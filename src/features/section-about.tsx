import styles from './section-about.module.css'
import { useTranslation } from 'react-i18next'
import Icons from '../components/icons'

export default function AboutSection () {
  const { t } = useTranslation()
  const texts = t('about.description').split('<br />')

  return (
    <div className={styles.container}>
      <h2 className={styles.light}>{t('about.about')}</h2>
      {texts.map((text, index) => (
        <p className={`${styles.light} ${styles.description}`} key={index}>
          {text}
        </p>
      ))}

      <Icons />
    </div>
  )
}