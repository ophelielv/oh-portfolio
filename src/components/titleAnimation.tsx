import styles from './titleAnimation.module.css'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

const WHITE = 'white'
const LIGHTBLUE = '#95f1ff'
const GOLD = '#ffe739'
const BLUEGREEN = '#06745b'

export default function TitleAnimation() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: LIGHTBLUE,
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: GOLD },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: BLUEGREEN }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: WHITE },
  })

  const name = "Ophélie Le Vigouroux"
  const frontTechno = "Front-end"
  const fullTechno = "Full-stack"
  const job = "Developer"

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set([name, frontTechno, job]), 2000))
    ref.current.push(setTimeout(() => set([name, job]), 5000))
    ref.current.push(setTimeout(() => set([name, fullTechno, job]), 3000))
    ref.current.push(setTimeout(() => set([name, frontTechno, job]), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div 
            className={styles.transitionsItem} 
            style={rest} 
            onClick={reset}
          >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
