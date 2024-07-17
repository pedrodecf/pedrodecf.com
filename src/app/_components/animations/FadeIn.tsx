'use client'

import { motion, MotionProps, Target, useReducedMotion } from 'framer-motion'
import { ReactNode, ElementType } from 'react'

interface FadeInProps extends MotionProps {
  children: ReactNode
  as?: ElementType
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  initial?: Target
  animate?: Target
  exit?: Target
  startOnScrollIntersect?: boolean
}

const directionMap = {
  left: { direction: 'x', value: 20 },
  right: { direction: 'x', value: -20 },
  up: { direction: 'y', value: 20 },
  down: { direction: 'y', value: -20 },
}

export function FadeIn({
  children,
  as: Component = 'div',
  direction = 'right',
  delay = 0.1,
  duration = 0.5,
  className,
  initial,
  animate,
  exit,
  startOnScrollIntersect = true,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  const animation = directionMap[direction] || { direction: 'x', value: 0 }
  const MotionComponent = motion(Component)

  const defaultStyles = {
    opacity: shouldReduceMotion ? 1 : 0,
    [animation.direction]: shouldReduceMotion ? 0 : animation.value,
  }
  const animationStyles = { opacity: 1, [animation.direction]: 0, ...animate }

  return (
    <MotionComponent
      className={className}
      initial={{ ...defaultStyles, ...initial }}
      animate={startOnScrollIntersect ? undefined : animationStyles}
      whileInView={startOnScrollIntersect ? animationStyles : undefined}
      exit={startOnScrollIntersect ? undefined : { ...defaultStyles, ...exit }}
      transition={{ delay, duration }}
      viewport={{
        once: startOnScrollIntersect,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
