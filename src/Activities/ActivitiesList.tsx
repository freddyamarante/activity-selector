import Activity from './Activity'

import { ActivityType } from '../types/ActivityType'

type ActivitiesListProps = {
  activities: ActivityType[]
  onDelete: (index: number) => void
}

export default function ActivitiesList({
  activities,
  onDelete,
}: ActivitiesListProps) {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-6">Activities</h2>
      <div className="flex flex-col space-y-8 ml-2">
        {activities.map((activity, index) => {
          return (
            <Activity
              key={index}
              activity={activity}
              onDelete={() => onDelete(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
