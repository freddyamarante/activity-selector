import Activity from './Activity'

import { ActivityType } from '../types/ActivityType'

type ActivitiesListProps = {
  activities: ActivityType[]
}

export default function ActivitiesList({ activities }: ActivitiesListProps) {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-6">Activities</h2>
      <div className="flex flex-col space-y-8 ml-2">
        {activities.map((activity) => {
          return (
            <Activity
              title={activity.title}
              description={activity.description}
            />
          )
        })}
      </div>
    </div>
  )
}
