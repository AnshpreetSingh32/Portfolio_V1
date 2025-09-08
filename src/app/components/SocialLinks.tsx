import { link } from 'fs'
import { MotionDiv } from '../lib/motion'

import { Github, Linkedin, Mails } from 'lucide-react'

export const socialData = [
  {link: 'mailto:anshpreetsingh3232@gmail.com', icon: <Mails />},
  { link: 'https://www.linkedin.com/in/Anshpreetsingh32', icon: <Linkedin /> },
  { link: 'https://github.com/AnshpreetSingh32', icon: <Github /> }
]

export const SocialLinks = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 flex flex-col items-center gap-y-4 sm:left-1 md:left-4 lg:left-4"
    >
      {socialData.map((social, index) => (
        <a
          key={index}
          className="transition hover:-translate-y-1 hover:text-target"
          target="_blank"
          href={social.link}
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="mt-4 h-32 w-[2px] origin-bottom bg-target"></div>
    </MotionDiv>
  )
}
