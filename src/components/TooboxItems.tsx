import { twMerge } from 'tailwind-merge'
import { TechIcon } from './TechIcon'
import { Fragment } from 'react'

export const ToolboxItems = ({
  toolBoxItems,
  className,
  itemsWrapperClassName,
}: {
  toolBoxItems: {
    title: string
    iconType: React.ElementType
  }[]
  className?: string
  itemsWrapperClassName?: string
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6 pr-6',
          itemsWrapperClassName
        )}
      >
        {...new Array(2).fill(null).map((_, i) => (
          <Fragment key={i}>
            {toolBoxItems.map((item) => (
              <div
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
                key={item.title}
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold ">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
