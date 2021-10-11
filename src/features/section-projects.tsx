import styles from './section-projects.module.css'
import { useTranslation } from 'react-i18next'
import Project from '../components/project'

export default function ProjectsSection () {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <h2 className={styles.light}>{t('projects.projects')}</h2>
      <div className={styles.projects}> 
        <Project 
          title={t('projects.p1.title')}
          description={t('projects.p1.description')}
          imgName="hamilton-street.JPG"
          imgAlt={t('projects.p1.imgAlt')}
        />
        <Project 
          title={t('projects.p2.title')}
          description={t('projects.p2.description')}
          imgName="koala's-notebook.JPG"
          imgAlt={t('projects.p2.imgAlt')}
        />
      </div>
    </div>
  )
}