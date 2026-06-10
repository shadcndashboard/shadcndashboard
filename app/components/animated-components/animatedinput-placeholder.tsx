import { AnimatePresence, motion } from 'framer-motion'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

export interface PlaceholdersInputHandle {
  triggerSubmit: () => void
}

interface PlaceholdersInputProps {
  value: string
  onChange: (val: string) => void
  onSubmit?: (val: string) => void
  onBlur?: (val: string) => void
  placeholders: string[]
  disabled?: boolean
  className?: string
}

interface PixelData {
  x: number
  y: number
  r: number
  color: string
}

const PlaceholdersInput = forwardRef<
  PlaceholdersInputHandle,
  PlaceholdersInputProps
>(
  (
    { value, onChange, onSubmit, placeholders, onBlur, disabled, className },
    ref
  ) => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
    const [animating, setAnimating] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const newDataRef = useRef<PixelData[]>([])
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    // Cycle through placeholders every 3s
    useEffect(() => {
      const startAnimation = () => {
        intervalRef.current = setInterval(() => {
          setCurrentPlaceholder((p) => (p + 1) % placeholders.length)
        }, 3000)
      }

      const handleVisibility = () => {
        if (document.visibilityState === 'hidden' && intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        } else if (!intervalRef.current) {
          startAnimation()
        }
      }

      startAnimation()
      document.addEventListener('visibilitychange', handleVisibility)

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        document.removeEventListener('visibilitychange', handleVisibility)
      }
    }, [placeholders])

    const draw = useCallback(() => {
      if (!inputRef.current || !canvasRef.current) return
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return

      canvasRef.current.width = 800
      canvasRef.current.height = 800
      ctx.clearRect(0, 0, 800, 800)

      const style = getComputedStyle(inputRef.current)
      const fontSize = parseFloat(style.fontSize)
      ctx.font = `${fontSize * 2}px ${style.fontFamily}`
      ctx.fillStyle = '#fff'
      ctx.fillText(value, 16, 40)

      const imageData = ctx.getImageData(0, 0, 800, 800).data
      newDataRef.current = []
      for (let y = 0; y < 800; y += 2) {
        for (let x = 0; x < 800; x += 2) {
          const idx = (y * 800 + x) * 4
          if (imageData[idx] || imageData[idx + 1] || imageData[idx + 2]) {
            newDataRef.current.push({
              x,
              y,
              r: 1,
              color: `rgba(${imageData[idx]},${imageData[idx + 1]},${
                imageData[idx + 2]
              },${imageData[idx + 3]})`,
            })
          }
        }
      }
    }, [value])

    const animateVanish = (maxX: number, callback: () => void) => {
      const frame = (pos = maxX) => {
        requestAnimationFrame(() => {
          newDataRef.current = newDataRef.current
            .map((p) => ({
              ...p,
              x: p.x + (Math.random() > 0.5 ? 1 : -1),
              y: p.y + (Math.random() > 0.5 ? 1 : -1),
              r: Math.max(0, p.r - 0.05 * Math.random()),
            }))
            .filter((p) => p.r > 0)

          const ctx = canvasRef.current?.getContext('2d')
          if (ctx) {
            ctx.clearRect(pos, 0, 800, 800)
            newDataRef.current.forEach(({ x, y, r, color }) => {
              if (x > pos) {
                ctx.fillStyle = color
                ctx.fillRect(x, y, r, r)
              }
            })
          }

          if (newDataRef.current.length > 0) {
            frame(pos - 8)
          } else {
            callback()
          }
        })
      }
      frame(maxX)
    }

    const vanishAndSubmit = () => {
      if (!value) return
      setAnimating(true)
      draw()
      const maxX = newDataRef.current.reduce((m, p) => Math.max(m, p.x), 0)
      animateVanish(maxX, () => {
        setAnimating(false)
        onChange('')
        onSubmit?.(value)
      })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      vanishAndSubmit()
    }

    useImperativeHandle(ref, () => ({
      triggerSubmit: () => vanishAndSubmit(),
    }))

    return (
      <form
        onSubmit={handleSubmit}
        className={cn('relative flex w-full items-center transition')}>
        <canvas
          ref={canvasRef}
          className={cn(
            'absolute left-2 top-[20%] origin-top-left scale-50 pr-20 invert dark:invert-0 pointer-events-none',
            animating ? 'opacity-100' : 'opacity-0'
          )}
        />

        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => {
            if (!animating) onChange(e.target.value)
          }}
          onKeyDown={(e) =>
            e.key === 'Enter' && !animating && vanishAndSubmit()
          }
          onBlur={() => onBlur?.(value)}
          type='text'
          disabled={disabled}
          className={cn(
            'w-full bg-transparent text-sm text-black pl-10 focus:outline-none dark:text-white sm:text-base',
            animating && 'text-transparent',
            className
          )}
        />

        <div className='pointer-events-none absolute inset-0 flex items-center rounded-full'>
          <AnimatePresence mode='wait'>
            {!value && (
              <motion.p
                key={currentPlaceholder}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'linear' }}
                className={cn(
                  'w-[calc(100%-2rem)] truncate text-sm pl-10 py-2 text-neutral-500 sm:text-sm dark:text-zinc-500',
                  className
                )}>
                {placeholders[currentPlaceholder]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    )
  }
)

PlaceholdersInput.displayName = 'PlaceholdersInput'

export default PlaceholdersInput
