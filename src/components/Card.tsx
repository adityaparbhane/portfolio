import grainImage from '@/assets/images/grain.jpg'
import { PropsWithChildren, type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 z-0 overflow-hidden after:z-10 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // filter: 'blur(20px)',
          // zIndex: -1,
        }}
      ></div>
      {children}
    </div>
  )
}
