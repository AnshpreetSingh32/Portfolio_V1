'use client'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'
import { Calendar, MapPin, Wrench, CheckCircle2, Building2 } from 'lucide-react'


export const Experience = () => {
  // Card data based on the user's reference image
  const items = [
    {
      date: 'January 2025 - July-2025',
      company: 'Fidelity International',
      role: 'Software Developer Intern',
      location: 'Gurugram, Haryana',
      logo: '/assets/FidelityLogo.png',
      technicalScope: 'React.js, Node.js, Git, MySQL, Service Now, Nexthink, Active Directory, IAM, Jira, Confluence',
      responsibilities: [
        'Developed and deployed the Nex-Migrate web portal supporting Windows 11 migration workflows for 200+ enterprise users, with seamless ServiceNow API integration.', 'Supported enterprise device readiness initiatives and gained hands-on exposure to frontend technologies, service automation, and enterprise security practices including IAM and access control systems.'
      ]
    }
  ]

  return (
    <SectionContainer id="experience" title="Professional Experience">
      <div className="relative">
        <ul className="space-y-10">
          {items.map((item, index) => (
            <li key={index} className="relative pl-12 group">
              <MotionDiv
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative rounded-xl bg-secondary p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg dark:shadow-gray-50"
              >
                {/* per-card rail and node (inside MotionDiv) */}
                <div className="pointer-events-none absolute -left-8 top-0 h-full w-[1.2px] bg-gradient-to-b from-target/40 via-target/60 to-target/40 group-hover:animate-pulse" />
                <span className="pointer-events-none absolute -left-[37px] top-4 h-3 w-3 rounded-full border-2 border-dashed bg-target shadow-[0_0_0_6px] shadow-target/20 group-hover:animate-spin" />
                {/* Header */}
                <div className="flex flex-row sm:flex-col gap-4 items-start sm:items-center">
                  <div className="flex sm:h-18 sm:w-52 h-20 w-52 flex-shrink-0
                  sm:items-center overflow-hidden rounded-lg bg-target/15 text-target">
                    {item.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.logo} alt={`${item.company} logo`} className="h-full w-full object-cover" />
                    ) : (
                      <Building2 size={22} className="opacity-80" />
                    )}
                  </div>
                  <div className="w-full">

                    <div className="flex flex-wrap-reverse items-center justify-between gap-1">

                      <p className="text-2xl font-bold text-emerald-600 tracking-wide">{item.role}</p>
                      <p className="flex items-center gap-2 text-sm  tracking-wide">
                        <span className='text-target'><Calendar size={14} />
                        </span> {item.date}
                      </p>
                    </div>

                    <h3 className="mt-3 text-xl font-medium">{item.company}</h3>
                    <p className="flex items-center gap-1 text-xs opacity-70 whitespace-nowrap ">
                      <MapPin size={12} /> {item.location}
                    </p>

                  </div>
                </div>

                <hr className="my-5 border-gray-800/10 dark:border-white/10" />

                {/* Technical scope */}
                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Wrench size={16} className="text-target" /> Technical Scope
                  </h4>
                  <p className="text-sm opacity-90">{item.technicalScope}</p>
                </div>

                {/* Responsibilities */}
                <div className="mt-4 space-y-2">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 size={16} className="text-target" /> Responsibilities
                  </h4>
                  <ul className="ml-1 list-disc space-y-2 pl-5 text-sm">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="marker:text-target/80">{r}</li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default Experience


