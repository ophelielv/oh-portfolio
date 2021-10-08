import type { NextPage } from 'next'
import Head from 'next/head'
import Section from '../components/section'
import styles from '../styles/Home.module.css'

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
          backgroundName="wave-1-sky-crust.svg"
          backgroundAlt="Ciel et croûte terrestre"
        >
          <h1 className={styles.title}>
            Ophélie Le Vigouroux Front-end developer
          </h1>
        </Section>

        <Section
          backgroundName="wave-2-crust-magma.svg"
          backgroundAlt="Croûte terrestre et magma"
        >
          <h2 className={styles.light}>À propos</h2>
          <p className={styles.light}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor.</p>
        </Section>

        <Section
          backgroundName="wave-3-magma-core-magma.svg"
          backgroundAlt="Magma, noyau et magma"
        >  
          <h2 className={styles.dark}>Compétences</h2>
          <p className={styles.dark}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor.</p>
        </Section> 

        <Section
          backgroundName="wave-5-magma-crust.svg"
          backgroundAlt="Magma et croûte terrestre"
          >
            <h2 className={styles.light}>Projects</h2>
        </Section>  
        
        <Section
          backgroundName="wave-6-crust-sky.svg"
          backgroundAlt="Croûte terrestre et ciel"
        >  
         <h2 className={styles.light}>Contact</h2>
        </Section> 

      </main>
    </div>
  )
}

export default Home
