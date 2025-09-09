'use client'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'
import { Calendar, MapPin, Award } from 'lucide-react'

export const Education = () => {
  const items = [
    {
      institute: 'Guru Nanak Dev University',
      degree: 'B.Tech in Computer Science and Engineering',
      location: 'Amritsar, Punjab',
      period: '2021 – 2025',
      marks: 'CGPA: 8.15'
    },
    {
      institute: 'Police D.A.V Public School',
      degree: 'Class 10+2 (C.B.S.E)',
      location: 'Amritsar, Punjab',
      period: 'June 2021',
      marks: 'Percentage: 91.0%'
    },
    {
      institute: 'Police D.A.V Public School',
      degree: 'Class 10 (C.B.S.E)',
      location: 'Amritsar, Punjab',
      period: 'March 2019',
      marks: 'Percentage: 92.5%'
    }
  ]

  return (
    <SectionContainer id="education" title="Education">
      <div className="relative">
        <ul className="space-y-10">
          {items.map((item, index) => (
            <li key={index} className="relative pl-12 group">
              <MotionDiv
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative rounded-xl bg-secondary p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:shadow-gray-50"
              >
                {/* per-card rail and node */}
                <div className="pointer-events-none absolute -left-8 top-0 h-full w-[1.2px] bg-gradient-to-b from-target/40 via-target/60 to-target/40 group-hover:animate-pulse" />
                <span className="pointer-events-none absolute -left-[37px] top-4 h-3 w-3 rounded-full border-2 border-dashed bg-target shadow-[0_0_0_6px] shadow-target/20 group-hover:animate-spin" />
                <div className="flex flex-row sm:flex-col gap-0 justify-between sm:justify-start">
                  <h3 className="text-lg font-bold">{item.degree}</h3>
                  <p className="flex items-center gap-2 text-sm opacity-80"><Calendar size={14} className="text-target" /> {item.period}</p>
                </div>
                <p className="mt-2 text-base">{item.institute}</p>
                <p className="flex items-center gap-2 text-xs opacity-70 whitespace-nowrap"><MapPin size={12} /> {item.location}</p>
                
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><Award size={14} className="text-target" />{item.marks}</p>
              </MotionDiv>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default Education


