import styles from './section.module.css'
import Image from 'next/image'

const getBgColorClass = (name: string) => {
  switch(name){
    case 'topSky': 
      return styles.topSky;
    case 'topCrust': 
      return styles.topCrust;
    case 'core': 
      return styles.core;
    case 'bottomCrust': 
      return styles.bottomCrust;
    case 'bottomSky': 
      return styles.bottomSky;
    default :
      return styles.topSky;
  }
}

export default function Section({
  backgroundName,
  backgroundAlt,
  position,
  children,
  name,
}:{
  backgroundName: string,
  backgroundAlt: string,
  position: 'center' | 'start',
  name: 'topSky' | 'topCrust' | 'core' | 'bottomCrust' | 'bottomSky',
  children: React.ReactNode,
}) {

  const positionClass = position === 'center' ? styles.center : styles.start
  const bgColorClass = getBgColorClass(name)
  return (
    <section className={`${styles.section} ${bgColorClass}`}>
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