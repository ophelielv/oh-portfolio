import styles from './section-presentation.module.css'
import TitleAnimation from '../components/titleAnimation'
import ChooseLanguage from '../components/chooseLanguage'
import Image from 'next/image'

export default function PresentationSection () {
  return (
    <>
      <TitleAnimation />
      <h1 className={styles.hiddenTitle}>
        Ophélie Le Vigouroux Front-end developer
      </h1>
      <div className={styles.presentationContainer}>
        <ChooseLanguage />
        <div className={styles.treeImgContainer}>
          <Image 
            src="/images/tree.svg" 
            layout="fill"
            objectFit="cover"
            objectPosition="left"
            alt="tree"
          />
        </div> 
      </div> 
    </>
  )
}