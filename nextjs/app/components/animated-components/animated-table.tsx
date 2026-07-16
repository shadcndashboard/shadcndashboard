"use client"

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

// ====== Motion Variants ======

const wrapperVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1 },
};

const tableBodyVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const tableRowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ====== Animated Table Wrapper ======

interface AnimatedTableWrapperProps {
  children: ReactNode;
  className?: string;
}

const AnimatedTableWrapper = ({ children, className }: AnimatedTableWrapperProps) => {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ====== Animated Table Body ======

interface AnimatedTableBodyProps {
  children: ReactNode;
  className?: string;
}

const AnimatedTableBody = ({ children, className }: AnimatedTableBodyProps) => {
  return (
    <motion.tbody
      variants={tableBodyVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.tbody>
  );
};

// ====== Animated Table Row ======

interface AnimatedTableRowProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const AnimatedTableRow = ({ children, className, index }: AnimatedTableRowProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -10% 0px', // Trigger slightly before fully in view
  });

  return (
    <motion.tr
      ref={ref}
      variants={tableRowVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.25,
      }}
      className={className}
    >
      {children}
    </motion.tr>
  );
};

// ====== Exports ======

export { AnimatedTableWrapper, AnimatedTableBody, AnimatedTableRow };
