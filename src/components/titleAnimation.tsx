import styles from './titleAnimation.module.css'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

const WHITE = 'white'
const LIGHTBLUE = '#95f1ff'
const GOLD = '#ffe739'
const BLUEGREEN = '#06745b'

export default function TitleAnimation({ text_frontend, text_fullstack, text_job}:{
  text_frontend: string,
  text_fullstack: string,
  text_job: string,
}) {
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
      { opacity: 1, height: 75, innerHeight: 75 },
      { transform: 'perspective(600px) rotateX(180deg)', color: GOLD },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: BLUEGREEN }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: WHITE },
  })

  
  const reset = useCallback((job, frontend, fullstack) => {
    const name = "Ophélie Le Vigouroux"
    const [frontend1, frontend2]= frontend.split(' ')
    const [fullstack1, fullstack2]= fullstack.split(' ')

    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set([name, frontend1, frontend2]), 2000))
    ref.current.push(setTimeout(() => set([name, job]), 5000))
    ref.current.push(setTimeout(() => set([name, fullstack1, fullstack2]), 3000))
    ref.current.push(setTimeout(() => set([name, frontend1, frontend2]), 8000))
  }, [])

  useEffect(() => {
    reset(text_job, text_frontend, text_fullstack)
    return () => ref.current.forEach(clearTimeout)
  }, [reset, text_job, text_frontend, text_fullstack])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div 
            className={styles.transitionsItem} 
            style={rest} 
            onClick={() => reset(text_job, text_frontend, text_fullstack)}
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
