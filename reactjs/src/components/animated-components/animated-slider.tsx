

import React, { useRef, useState } from 'react'
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion'

const MAX_OVERFLOW = 50

interface ElasticSliderProps {
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  color?: string
  onChange?: (value: number) => void
}

const AnimatedSlider: React.FC<ElasticSliderProps> = ({
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  color = 'val(--color-primary)',
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue)
  const sliderRef = useRef<HTMLDivElement>(null)

  const clientX = useMotionValue(0)
  const overflow = useMotionValue(0)

  useMotionValueEvent(clientX, 'change', (latest: number) => {
    if (!sliderRef.current) return
    const { left, right } = sliderRef.current.getBoundingClientRect()
    let diff = 0
    if (latest < left) diff = left - latest
    else if (latest > right) diff = latest - right
    overflow.jump(decay(diff, MAX_OVERFLOW))
  })

  const updateValue = (clientXPos: number) => {
    if (!sliderRef.current) return
    const { left, width } = sliderRef.current.getBoundingClientRect()
    let newValue = min + ((clientXPos - left) / width) * (max - min)
    newValue = Math.round(newValue / step) * step
    newValue = Math.min(Math.max(newValue, min), max)
    setValue(newValue)
    onChange?.(newValue)
    clientX.jump(clientXPos)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='flex flex-col items-center w-72 group select-none'>
      <div className='flex items-center gap-2 w-full'>
        <div
          ref={sliderRef}
          className='relative flex-1 py-0 cursor-grab'
          onPointerDown={(e) => {
            updateValue(e.clientX)
            e.currentTarget.setPointerCapture(e.pointerId)
          }}
          onPointerMove={(e) => e.buttons > 0 && updateValue(e.clientX)}
          onPointerUp={() =>
            animate(overflow, 0, { type: 'spring', bounce: 0.5 })
          }>
          <motion.div
            style={{
              scaleX: useTransform(
                () => 1 + overflow.get() / (sliderRef.current?.offsetWidth || 1)
              ),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() =>
                sliderRef.current
                  ? clientX.get() <
                    sliderRef.current.offsetLeft +
                    sliderRef.current.offsetWidth / 2
                    ? 'right'
                    : 'left'
                  : 'center'
              ),
            }}
            className='h-1.5 group-hover:h-2 transition-all duration-500 rounded-full bg-gray-300 dark:bg-white/30 w-full'>
            <div
              className='h-full rounded-full'
              style={{
                width: `${((value - min) / (max - min)) * 100}%`,
                backgroundColor: color,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function decay(value: number, max: number): number {
  const entry = value / max
  return 2 * (1 / (1 + Math.exp(-entry)) - 0.5) * max
}

export default AnimatedSlider
