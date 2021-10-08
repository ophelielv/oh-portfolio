import type { NextPage } from 'next'
import Head from 'next/head'
import Core from '../src/components/core'
import Project from '../src/components/project'
import Section from '../src/components/section'
import Skills from '../src/components/skills'
import styles from '../styles/Home.module.css'
import Contact from '../src/components/contact'
import ChooseLanguage from '../src/components/chooseLanguage'

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
  return (
    <div className={styles.container}>
      <Head>
        <title>Ophélie Le Vigouroux</title>
        <meta name="description" content="Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Section backgroundName="wave-1-sky-crust.svg" backgroundAlt="Ciel et croûte terrestre">
          <ChooseLanguage />
          <h1 className={styles.title}>
            Ophélie Le Vigouroux Front-end developer
          </h1>
        </Section>

        <Section backgroundName="wave-2-crust-magma.svg" backgroundAlt="Croûte terrestre et magma">
          <h2 className={styles.light}>À propos</h2>
          <p className={`${styles.light} ${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor.
          </p>
        </Section>

        <Section backgroundName="wave-3-magma-core-magma.svg" backgroundAlt="Magma, noyau et magma">  
          <Core />
          <div className={styles.skills}>
            <h2 className={styles.dark}>Compétences</h2>
            <p className={`${styles.dark} ${styles.description}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor.
            </p>
            <div className={styles.row}>
              <Skills title="Front" skills={frontSkills} />
              <Skills title="Back" skills={backSkils} />
              <Skills title="Autres" skills={otherSkills} />
            </div>
          </div>
        </Section> 

        <Section backgroundName="wave-4-magma-crust.svg" backgroundAlt="Magma et croûte terrestre">
          <h2 className={styles.light}>Projects</h2>
          <Project 
            title="CSS Art"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor."
            imgName="hamilton-street.JPG"
            imgAlt="Hamilton street"
          />
          <Project 
            title="Web application"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor."
            imgName="koala's-notebook.JPG"
            imgAlt="Koala's notebook"
          />
        </Section>  
        
        <Section backgroundName="wave-5-crust-sky.svg" backgroundAlt="Croûte terrestre et ciel">  
          <h2 className={styles.light}>Contact</h2>
          <Contact />
        </Section> 
      </main>
    </div>
  )
}

export default Home
