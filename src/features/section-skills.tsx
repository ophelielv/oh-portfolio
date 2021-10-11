import styles from './section-skills.module.css'
import Skills from '../components/skills'
import Core from '../components/core'
import { useTranslation } from 'react-i18next'

const frontSkills = [ 
  'Javascript (ES5+)', 'React', 'React Native', 'SQL', 
  'HTML5', 'CSS3', 'Mocha', 'Chai', 'Next.js', 'react-spring',
  'Webpack', 'Yarn',
]
const backSkils = [
  'Symfony', 'Php', 'Node.js', 'Express.js', 'Firebase', 
  'Symfony', 'Php', 'Node.js', 'Express.js', 'Firebase'
]
const otherSkills = [
  'Git', 'Jira', 'Git',
  'Jira', 'Git'
]


export default function SkillsSection () {
  const { t } = useTranslation()
  return (
    <>
      <Core />
        <div className={styles.skills}>
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