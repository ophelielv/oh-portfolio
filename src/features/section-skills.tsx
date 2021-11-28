import styles from './section-skills.module.css'
import Skills from '../components/skills'
import Core from '../components/core'
import { useTranslation } from 'react-i18next'

const frontSkills = [ 
  'React', 'Javascript (ES5+)', 'Typescript', 'Next.js', 'react-spring', 
  'Redux', 'Angular', 'AngularJS', 'jQuery', 'Jasmine', 'Jest', 'HTML5',
  'CSS3', 'Animation', 'LESS', 'SASS', 'Webpack', 'Yarn', 'Npm'
]
const backSkils = [
  'Node.js', 'Express.js', 'Sqlite', 'Firebase',
  'PHP', 'Symfony', 'Doctrine', 'PHPUnit', 'Twig',
  'Oracle', 'MySQL'
]
const otherSkills = [
  'React Native', 'Ionic', 'Android studio', 'Git', 'Jira'
]

export default function SkillsSection () {
  const { t } = useTranslation()
  return (
    <>
      <Core />
        <div className={styles.skillsContainer}>
          <h2 className={styles.dark}>{t('skills.skills')}</h2>
          <p className={`${styles.dark} ${styles.description}`}>
            {t('skills.description')}
          </p>
          <div className={styles.row}>
            <Skills title={t('skills.title.front')} skills={frontSkills} />
            <Skills title={t('skills.title.back')} skills={backSkils} />
            <Skills title={t('skills.title.others')} skills={otherSkills} />
          </div>
        </div>
    </>
  )
}