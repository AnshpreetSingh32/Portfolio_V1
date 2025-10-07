import Link from 'next/link'
import Image from 'next/image'


import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="flex flex-row items-center justify-between md:justify-center max-w-5xl mx-auto md:flex-col-reverse md:gap-8">
        <MotionDiv
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex max-w-xl flex-col gap-6 text-xl md:text-center sm:text-lg"
        >
          <p>
            Hello, I'm <span className='text-target'>Anshpreet Singh</span>. I'm a passionate full-stack developer
            and Computer Science graduate. I build projects using Next.js and Node.js, and have internship experience from
            Fidelity International.
          </p>

          <p>Currently studying, practicing, and seeking new opportunities.</p>
          <MotionDiv className="flex justify-start md:justify-center">
            <Link
              href="#contact"
              className="flex items-center gap-x-2 text-target transition-all hover:gap-x-3 hover:text-[#3385ff]"
            >
              Contact Me <MoveRight />
            </Link>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-center "
        >
          <div className="relative w-80 h-96 md:w-80 md:h-96">
            <Image
              src="/assets/About_Image.png"
              alt="Anshpreet Singh - Full Stack Developer"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
