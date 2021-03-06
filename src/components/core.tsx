import styles from './core.module.css'
import React from 'react'
import { useTrail, animated } from '@react-spring/web'

const slow = { mass: 80, tension: 20, friction: 50 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Core() {
  const [trail, api] = useTrail(3, () => ({
    xy: [300, 300],
    config: slow, 
  }))
  
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className={styles.hooksMain}
        onMouseMove={e => api.start({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
    </>
  )
}
