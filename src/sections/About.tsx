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
import VsCodeIcon from '@/assets/icons/vscode.svg' // Corrected import path
import MapImages from '@/assets/images/map.png'
import MySmileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from '@/components/CardHeader'
import { ToolboxItems } from '@/components/TooboxItems' // Corrected import path

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
    title: 'React',
    iconType: ReactIcon,
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
    title: 'VS Code',
    iconType: VsCodeIcon,
  },
]

const hobbies = [
  {
    title: 'Traveling',
    emoji: '🌍',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
  },
  {
    title: 'Cycling',
    emoji: '🚴‍♂️',
  },
  {
    title: 'Running',
    emoji: '🏃‍♂️',
  },
  {
    title: 'Socializing',
    emoji: '👫',
  },
  {
    title: 'Networking',
    emoji: '🤝',
  },
  {
    title: 'Learning',
    emoji: '📚',
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeaders
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="bookCover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Tool Box"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems toolBoxItems={toolBoxItems} className="mt-6" />
          </Card>
          <Card className="h-[320px]">
            <CardHeader
              title="Beyond The Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((items) => (
                <div className="" key={items.title}>
                  <span className="">{items.title}</span>
                  <span className="">{items.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px]">
            <Image src={MapImages} alt="map" />
            <Image src={MySmileMemoji} alt="MySmileMemoji" />
          </Card>
        </div>
      </div>
    </div>
  )
}
