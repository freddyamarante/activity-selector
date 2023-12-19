import { ActivityType } from '../types/ActivityType'

export default function Activity({ title, description }: ActivityType) {
  return (
    <>
      <div className="flex flex-col bg-slate-600 rounded-lg px-4 py-2 border-2 border-slate-950">
        <div className="font-bold text-xl">{title}</div>
        <div className="font-light text-md">{description}</div>
      </div>
    </>
  )
}
