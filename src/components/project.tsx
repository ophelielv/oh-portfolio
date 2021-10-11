import styles from './project.module.css'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
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

      <h3>{title}</h3>
      <p>
        {description}
        <a href="" target="_blank" className={styles.link}>
          {t('projects.buttonSee')}
        </a>
      </p>

    </div>
  )
}