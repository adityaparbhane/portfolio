import React from 'react'

export const SectionHeaders = ({
  title,
  eyebrow,
  description,
}: {
  title: string
  eyebrow: string
  description: string
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl mt-6 text-center">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg md:max-w-md mx-auto lg:text-xl ">
        {description}
      </p>
    </>
  )
}
