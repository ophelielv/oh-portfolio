import styles from './section.module.css'
import Image from 'next/image'

export default function Section({
  backgroundName,
  backgroundAlt,
  children,

}:{
  backgroundName: string,
  backgroundAlt: string,
  children: React.ReactNode,
}) {
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
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}