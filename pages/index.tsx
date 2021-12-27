import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../src/components/section'
import styles from '../styles/Home.module.css'
import PresentationSection from '../src/features/section-presentation'
import SkillsSection from '../src/features/section-skills'
import ProjectsSection from '../src/features/section-projects'
import ContactSection from '../src/features/section-contact'
import initFirebase from '../src/firebase/initFirebase'
import AboutSection from '../src/features/section-about'

initFirebase()

const Home: NextPage = () => {
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
          name="topSky"
        >
          <PresentationSection />
        </Section>

        <Section 
          backgroundName="wave-2-crust-magma.svg" 
          backgroundAlt="Croûte terrestre et magma"
          position="center"
          name="topCrust"
        >
          <AboutSection />
        </Section>

        <Section 
          backgroundName="wave-3-magma-core-magma.svg" 
          backgroundAlt="Magma, noyau et magma"
          position="center"
          name="core"
        >  
          <SkillsSection />
        </Section> 

        <Section 
          backgroundName="wave-4-magma-crust.svg" 
          backgroundAlt="Magma et croûte terrestre"
          position="start"
          name="bottomCrust"
        >
          <ProjectsSection />
        </Section>  
        
        <Section 
          backgroundName="wave-5-crust-sky-1.svg" 
          backgroundAlt="Croûte terrestre et ciel"
          position="center"
          name="bottomSky"
        >  
          <ContactSection />
        </Section> 
      </main>
    </div>
  )
}

export default Home
