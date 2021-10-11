import styles from './section-about.module.css'
import { useTranslation } from 'react-i18next'
import Icons from '../components/icons'

export default function AboutSection () {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <h2 className={styles.light}>{t('about.about')}</h2>
      <p className={`${styles.light} ${styles.description}`}>
        {t('about.description')}
      </p>

      <Icons />
    </div>
  )
}