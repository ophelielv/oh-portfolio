import styles from './section.module.css'
import Image from 'next/image'

export default function Section({
  backgroundName,
  backgroundAlt,
  position,
  children,

}:{
  backgroundName: string,
  backgroundAlt: string,
  position: 'center' | 'start',
  children: React.ReactNode,
}) {
  const positionClass = position === 'center' ? styles.center : styles.start
  return (
    <section className={styles.section}>
      <Image
        src={`/svg/${backgroundName}`}
        alt={backgroundAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={styles.backgroundImage}
      />  
      <div className={`${styles.content} ${positionClass}`}>
        {children}
      </div>
    </section>
  )
}