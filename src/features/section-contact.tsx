import styles from './section-contact.module.css'
import Image from 'next/image'
import Contact from '../components/contact'

export default function ContactSection () {
  return (
    <>
      <div className={styles.koalaImgContainer}>
        <Image 
          src="/images/koala1.svg" 
          width={200} height={200} 
          alt="Koala"
        />
      </div>
      <h2 className={`${styles.light} ${styles.contactTitle}`}>Contact</h2>
      <Contact />
    </>
  )
}