'use client'

export interface ActionButton {
  label: string
  hoverText: string
  type: 'scroll' | 'link'
  target: string
  icon: React.ReactNode
}

interface ActionButtonsProps {
  buttons: ActionButton[]
}

export const ActionButtons = ({ buttons }: ActionButtonsProps) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1))
    if (section) {
      const header = document.querySelector('header')
      if (header) {
        const headerHeight = window.getComputedStyle(header).height
        const headerHeightNumber = parseFloat(headerHeight)
        window.scrollTo({
          top: section.offsetTop - headerHeightNumber,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="flex gap-4 mt-6 flex-wrap">
  {buttons.map((btn, index) => (
        <button suppressHydrationWarning
          key={index}
          onClick={() => {
            if (btn.type === 'scroll') {
              scrollToSection(btn.target)
            } else {
              window.open(btn.target, '_blank')
            }
          }}
          className="relative flex items-center border px-6 sm:px-2 py-3 text-lg transition
            before:absolute before:left-0 before:top-0 before:z-10 before:h-full
            before:w-full before:origin-top-left before:scale-0 before:bg-target
            before:px-6 before:py-3 before:text-textLight before:opacity-0
            before:transition before:content-[attr(data-hover)]
            hover:border-target hover:before:scale-100 hover:before:opacity-100"
          data-hover={btn.hoverText}
        >
          {/* Icon */}
          <span className="flex items-center">
            {btn.icon}
          </span>

          {/* Divider + Text */}
          <span className="ml-4 border-l pl-4 sm:ml-2 sm:pl-2">{btn.label}</span>
        </button>
      ))}
    </div>
  )
}
