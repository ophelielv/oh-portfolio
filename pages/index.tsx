import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../src/components/section'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'react-i18next'
import PresentationSection from '../src/features/section-presentation'
import SkillsSection from '../src/features/section-skills'
import ProjectsSection from '../src/features/section-projects'
import ContactSection from '../src/features/section-contact'

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
          backgroundName="wave-1-sky-crust-1.svg" 
          backgroundAlt="Ciel et croûte terrestre"
          position="center"
        >
          <PresentationSection />
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
          <SkillsSection />
        </Section> 

        <Section 
          backgroundName="wave-4-magma-crust.svg" 
          backgroundAlt="Magma et croûte terrestre"
          position="start"
        >
          <ProjectsSection />
        </Section>  
        
        <Section 
          backgroundName="wave-5-crust-sky-1.svg" 
          backgroundAlt="Croûte terrestre et ciel"
          position="center"
        >  
          <ContactSection />
        </Section> 
      </main>
    </div>
  )
}

export default Home
