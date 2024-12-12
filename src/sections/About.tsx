'use client'

import { SectionHeaders } from '@/components/sectionHeader'
import { Card } from '@/components/Card'
import bookImage from '@/assets/images/book-cover.png'
import Image from 'next/image'
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import SQLIcon from '@/assets/icons/sql.svg'
import JavaIcon from '@/assets/icons/java-icon.svg'
import ReduxIcon from '@/assets/icons/redux.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'
import VsCodeIcon from '@/assets/icons/css3.svg'
import MapImages from '@/assets/images/map2.jpg'
import MySmileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/TooboxItems' // Corrected import path
import { motion } from 'framer-motion'
import { useRef } from 'react'
const toolBoxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Redux',
    iconType: ReduxIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },

  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'Git',
    iconType: GithubIcon,
  },
  {
    title: 'Java',
    iconType: JavaIcon,
  },
]

const hobbies = [
  {
    title: 'Traveling',
    emoji: '🌍',
    left: '3%',
    top: '3%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '10%',
    top: '30%',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    left: '50%',
    top: '45%',
  },

  {
    title: 'Gaming',
    emoji: '🎮',
    left: '60%',
    top: '0%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '57%',
    top: '22%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '5%',
    top: '52%',
  },
  {
    title: 'Running',
    emoji: '🏃‍♂️',
    left: '55%',
    top: '72%',
  },
  {
    title: 'Learning',
    emoji: '📚',
    left: '10%',
    top: '75%',
  },
]

export const AboutSection = () => {
  const constraintsRef = useRef(null)
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeaders
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8 flex flex-col gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="bookCover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3">
              <CardHeader
                title="My Tool Box"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="px-6 pt-6"
              />
              <ToolboxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:40s]"
              />

              <ToolboxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8 flex flex-col gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title="Beyond The Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1 " ref={constraintsRef}>
                {hobbies.map((items) => (
                  <motion.div
                    className="inline-flex items-center  gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute "
                    key={items.title}
                    style={{
                      left: items.left,
                      top: items.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {items.title}
                    </span>
                    <span className="">{items.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2">
              <Image
                src={MapImages}
                alt="map"
                className="h-full w-full object-cover object-left-top "
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r  from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r  from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={MySmileMemoji} alt="MySmileMemoji" className="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
