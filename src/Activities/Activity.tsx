import { ActivityType } from '../types/ActivityType'

type ActivityProps = {
  activity: ActivityType
  onDelete: () => void
}

export default function Activity({ activity, onDelete }: ActivityProps) {
  const { title, description } = activity

  const handleClick = () => {
    onDelete()
  }

  return (
    <div className="flex justify-between align-middle place-items-center px-4 py-2 bg-slate-600 rounded-lg border-2 border-slate-950">
      <div className="flex flex-col mr-4">
        <div className="font-bold text-xl">{title}</div>
        <div className="font-light text-md">{description}</div>
      </div>
      <button
        onClick={handleClick}
        className="font-bold bg-red-500 w-fit h-fit leading-none text-white py-1 px-2 rounded-lg"
      >
        X
      </button>
    </div>
  )
}
