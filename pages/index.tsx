import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        <section className={styles.presentation}>
          <Image
            src="/svg/wave-1-sky-crust.svg"
            alt="Ciel et croûte terrestre"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={styles.backgroundImage}
          />  
          <div className={styles.content}>
            <h1 className={styles.title}>
              Ophélie Le Vigouroux Front-end developer
            </h1>
          </div>
        </section>

        <section className={styles.about}>
          <Image
            src="/svg/wave-2-crust-magma.svg"
            alt="Croûte terrestre et magma"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={styles.backgroundImage}
          />  
          <div className={styles.content}>
            <h2>À propos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor.</p>
          </div>
        </section>

        <section className={styles.skills}>
          <Image
            src="/svg/wave-3-magma-core-magma.svg"
            alt="Magma, noyau et magma"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={styles.backgroundImage}
          />  
          <div className={styles.content}>
            <h2>Compétences</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mauris porta, elementum elit vel, porttitor velit. Nulla porttitor, sapien at egestas dictum, lorem metus pharetra mi, sed euismod turpis felis vitae nisi. In euismod, mauris vel faucibus facilisis, magna dui sollicitudin tortor.</p>
          </div>
        </section>

        <section className={styles.projects}>
          <Image
            src="/svg/wave-5-magma-crust.svg"
            alt="Magma et croûte terrestre"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={styles.backgroundImage}
          />  
          <div className={styles.content}>
            <h2>Projects</h2>
          </div>
        </section>

        <section className={styles.contact}>
          <Image
            src="/svg/wave-6-crust-sky.svg"
            alt="Croûte terrestre et ciel"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={styles.backgroundImage}
          />  
          <div className={styles.content}>
            <h2>Contact</h2>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home
