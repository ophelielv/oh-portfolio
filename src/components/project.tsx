import styles from './project.module.css'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Project({
  title,
  description,
  imgName,
  imgAlt,
  link,
}:{
  title: string,
  description: string,
  imgName: string,
  imgAlt: string,
  link: string,
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
      <p className={styles.description}>
        {description}
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          {t('projects.buttonOpen')}
        </a>
      </p>

    </div>
  )
}