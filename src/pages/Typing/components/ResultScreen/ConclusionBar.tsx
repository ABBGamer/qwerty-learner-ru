import classNames from 'classnames'
import type { ElementType, SVGAttributes } from 'react'
import IconExclamationTriangle from '~icons/heroicons/exclamation-triangle-solid'
import IconHandThumbUp from '~icons/heroicons/hand-thumb-up-solid'
import IconHeart from '~icons/heroicons/heart-solid'

type IconMapper = {
  icon: ElementType<SVGAttributes<SVGSVGElement>>
  className: string
  text: (mistakeCount: number) => string
}

const ICON_MAPPER: IconMapper[] = [
  {
    icon: IconHeart,
    className: 'text-indigo-600',
    text: (mistakeCount: number) =>
      `Хорошая производительность！` + (mistakeCount > 0 ? `Просто неправильно ${mistakeCount} Одно слово` : 'В порядке！'),
  },
  {
    icon: IconHandThumbUp,
    className: 'text-indigo-600',
    text: () => 'Есть несколько небольших проблем, в следующий раз вы можете справиться лучше!',
  },
  {
    icon: IconExclamationTriangle,
    className: 'text-indigo-600',
    text: () => 'Здесь слишком много ошибок, как насчет того, чтобы повторить это еще раз？',
  },
]

const ConclusionBar = ({ mistakeLevel, mistakeCount }: ConclusionBarProps) => {
  const { icon: Icon, className, text } = ICON_MAPPER[mistakeLevel]

  return (
    <div className="flex h-10 flex-row items-center">
      <Icon className={classNames(className, 'h-5 w-5')} />
      <span className="ml-2 inline-block align-middle text-sm font-medium leading-10 text-gray-700 sm:text-sm md:text-base">
        {text(mistakeCount)}
      </span>
    </div>
  )
}

export type ConclusionBarProps = {
  mistakeLevel: number
  mistakeCount: number
}

export default ConclusionBar
