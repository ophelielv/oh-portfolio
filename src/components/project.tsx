import styles from './project.module.css'
import Image from 'next/image'

export default function Project({
  title,
  description,
  imgName,
  imgAlt,
}:{
  title: string,
  description: string,
  imgName: string,
  imgAlt: string,
}){
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image 
          src={`/projects/${imgName}`}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className={styles.texts}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="" target="_blank" className={styles.link}>Voir</a>
      </div>

    </div>
  )
}