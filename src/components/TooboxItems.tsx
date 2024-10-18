import { twMerge } from 'tailwind-merge'
import { TechIcon } from './TechIcon'

export const ToolboxItems = ({
  toolBoxItems,
  className,
}: {
  toolBoxItems: {
    title: string
    iconType: React.ElementType
  }[]
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div className="flex flex-none py-0.5 gap-6">
        {toolBoxItems.map((item) => (
          <div
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
            key={item.title}
          >
            <TechIcon component={item.iconType}  />
            <span className="font-semibold ">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}