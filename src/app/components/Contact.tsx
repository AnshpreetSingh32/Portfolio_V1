'use client'

import { MotionDiv } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { SectionContainer } from './SectionContainer'
import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import {FileText, PhoneCallIcon, MessageCircleMoreIcon } from 'lucide-react'
import { ActionButtons } from './ActionButtons'


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Dev-time env debug (won't run in production builds)
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug('EmailJS env', {
      service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      key: !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS environment variables. Make sure NEXT_PUBLIC_EMAILJS_* are set.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          to_name: 'Anshpreet Singh',
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      )

      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <SectionContainer id="contact" title="Contact">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <MotionDiv
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1,  x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6 self-start"
      >
        <div className='mb-16'>
        <h2 className="text-2xl font-bold leading-tight mb-2">
              Let's Build Something<br />
              Awesome - <span className="text-target">Message Me!</span>
            </h2>
            <p className="text-lg max-w-xl mb-6">
              I'd love to hear from you! Whether you have a project idea, need help
              with software development, or just want to connect and chat about
              tech, feel free to reach out.
            </p>
            <EmailBtn />
            <ActionButtons
              buttons={[
                {
                  label: '+91-9814893232',
                  hoverText: 'Call Me',
                  type: 'link',
                  target: 'tel:+91-9814893232',
                  icon: <PhoneCallIcon size={20} />
                }
              ]}
            />
            <ActionButtons
              buttons={[
               {
                  label: 'Whatsapp',
                  hoverText: 'Message me',
                  type: 'link',
                  target: 'https://wa.me/919814893232',
                  icon: <MessageCircleMoreIcon size={20} />
                }
              ]}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold leading-tight mb-2">
              Why Hire me <span className="text-target">?</span>
            </h3>
            <p className='text-lg'>I deliver robust full-stack apps with React.js and Node.js, automating real workflows and crafting seamless user experiences for enterprise solutions.</p>
            <ActionButtons
              buttons={[
                {
                  label: 'Resume',
                  hoverText: '❯❯❯❯',
                  type: 'link',
                  target: 'https://drive.google.com/file/d/1HdLBFkIEuRbs3en91NeNYP4sZMz6HDGg/view?usp=sharing',
                  icon: <FileText size={20} />
                }
              ]}
            />
          </div>
      </MotionDiv>
  <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay:0.5, duration: 0.5 }}
    className="rounded-xl p-8  shadow-lg bg-secondary w-full self-start dark:shadow-gray-50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <label htmlFor="name" className="block text-sm mb-2">
                  Full Name
                </label>
                <input
                  suppressHydrationWarning
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-target outline-none"
                  placeholder="e.g. Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-md mb-2">
                  Email Address
                </label>
                <input
                  suppressHydrationWarning
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-target outline-none"
                  placeholder="e.g. doejane@gmail.com"
                />
              </div>
              
              <div className='pb-8'>
                <label htmlFor="message" className="block text-md mb-2">
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-target outline-none resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              
              <button
                suppressHydrationWarning
                type="submit"
                className="w-full bg-target hover:bg-target/90 font-medium py-3 px-6 rounded-lg transition-colors duration-200 "
              >
                SEND MESSAGE
              </button>
            </form>
          </MotionDiv>
      </div>
      <Toaster position="bottom-right" />
    </SectionContainer>
  )
}
