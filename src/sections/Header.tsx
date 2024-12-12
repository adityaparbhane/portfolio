'use client'

import { useState, useEffect } from 'react'

export const Header = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => handleNavClick('home')}
          className={`nav-item ${
            activeSection === 'home' ? 'bg-white text-gray-900' : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick('project')}
          className={`nav-item ${
            activeSection === 'project' ? 'bg-white text-gray-900' : ''
          }`}
        >
          Project
        </button>
        <button
          onClick={() => handleNavClick('about')}
          className={`nav-item ${
            activeSection === 'about' ? 'bg-white text-gray-900' : ''
          }`}
        >
          About
        </button>
        <button
          onClick={() => handleNavClick('contact')}
          className={`nav-item ${
            activeSection === 'contact' ? 'bg-white text-gray-900' : ''
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  )
}
