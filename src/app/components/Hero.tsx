import { MotionDiv, MotionH1, MotionSpan } from '../lib/motion'
import { ActionButtons } from './ActionButtons'
import { EmailBtn } from './EmailBtn'
import { TypewriterLoop } from './custom/typewriter-loop'
import { useMemo } from 'react'
import { greeting, visitors } from '../utils/greetings'

export const Hero = () => {
  const visitor = useMemo(
    () => visitors[Math.floor(Math.random() * visitors.length)],
    []
  );
  return (
    <section id="home">
      <MotionDiv className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center gap-3">
          <MotionSpan
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 20 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.4
            }}
            className="flex flex-col mb-2 text-2xl font-medium tracking-widest text-left self-start underline underline-offset-4 decoration-1 decoration-target/70"
          >
            {`${greeting()}, ${visitor}`}
          </MotionSpan>
          <MotionH1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.3
            }}
            className="text-center text-8xl font-bold md:text-7xl sm:text-5xl "
          >
            <span className='text-2xl text-target mr-4 tracking-widest'>I'm</span>
            Anshpreet Singh<span className="text-target">.</span>
          </MotionH1>
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.3
            }}
            className="text-center text-4xl sm:text-3xl"
          >
            <span className="font-bold tracking-wider">
              <TypewriterLoop />
            </span>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1.3, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            className="mt-4"
          >
            <ActionButtons />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}
