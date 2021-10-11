import styles from './icons.module.css'
import Image from 'next/image'

function Icon({ imgName, iconName, href }:{
  imgName: string,
  iconName: string,
  href: string,
}){
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer noopener "
      className={styles.icon}
    >
      <Image 
        src={`/icons/${imgName}`} 
        width={30} 
        height={30} 
        alt={iconName} 
      />
    </a>
  )
}

export default function Icons(){
  const icons = [
    { 
      iconName: 'Linkedin',
      imgName: 'linkedin.png',
      href: 'https://www.linkedin.com/in/ophelielv/' 
    },
    { 
      iconName: 'Github',
      imgName: 'github.png',
      href: 'https://github.com/ophelielv',
    }   
  ]

  return (
    <div className={styles.container}>
      {icons.map((x,i) => (
        <Icon 
          imgName={x.imgName} 
          iconName={x.iconName}
          href={x.href}
          key={i}
        />
      ))}
    </div>
  )
}