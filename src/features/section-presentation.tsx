import styles from './section-presentation.module.css'
import TitleAnimation from '../components/titleAnimation'
import ChooseLanguage from '../components/chooseLanguage'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function PresentationSection () {
  const { t } = useTranslation()
  return (
    <>
      <TitleAnimation 
        text_frontend={t('presentation.frontend')} 
        text_fullstack={t('presentation.fullstack')} 
        text_job={t('presentation.job')} 
    />

      <h1 className={styles.hiddenTitle}>
        Ophélie Le Vigouroux Front-end developer
      </h1>

      <div className={styles.presentationContainer}>
      <ChooseLanguage />
        <div className={styles.foxImgContainer}>
          <Image 
            src="/images/fox.svg" 
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            alt="tree"
          />
        </div> 
        <div className={styles.treeImgContainer}>
          <Image 
            src="/images/tree.svg" 
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            alt="tree"
          />
        </div> 
      </div> 
    </>
  )
}