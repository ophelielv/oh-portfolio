import type { NextPage } from 'next'
import Head from 'next/head'
import Core from '../src/components/core'
import Project from '../src/components/project'
import Section from '../src/components/section'
import Skills from '../src/components/skills'
import styles from '../styles/Home.module.css'
import Contact from '../src/components/contact'
import ChooseLanguage from '../src/components/chooseLanguage'
import { useTranslation } from 'react-i18next'
import TitleAnimation from '../src/components/titleAnimation'

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

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <Head>
        <title>Ophélie Le Vigouroux</title>
        <meta name="description" content="Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Section 
          backgroundName="wave-1-sky-crust.svg" 
          backgroundAlt="Ciel et croûte terrestre"
          position="center"
        >
          <TitleAnimation />
          <h1 className={styles.title}>
            Ophélie Le Vigouroux Front-end developer
          </h1>
          <ChooseLanguage />
        </Section>

        <Section 
          backgroundName="wave-2-crust-magma.svg" 
          backgroundAlt="Croûte terrestre et magma"
          position="center"
        >
          <h2 className={styles.light}>{t('about.about')}</h2>
          <p className={`${styles.light} ${styles.description}`}>
            {t('about.description')}
          </p>
        </Section>

        <Section 
          backgroundName="wave-3-magma-core-magma.svg" 
          backgroundAlt="Magma, noyau et magma"
          position="center"
        >  
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
        </Section> 

        <Section 
          backgroundName="wave-4-magma-crust.svg" 
          backgroundAlt="Magma et croûte terrestre"
          position="start"
        >
          <h2 className={styles.light}>{t('projects.projects')}</h2>
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
        </Section>  
        
        <Section 
          backgroundName="wave-5-crust-sky.svg" 
          backgroundAlt="Croûte terrestre et ciel"
          position="start"
        >  
          <h2 className={`${styles.light} ${styles.contactTitle}`}>Contact</h2>
          <Contact />
        </Section> 
      </main>
    </div>
  )
}

export default Home
