import ActivitiesList from './ActivitiesList'
import ActivitiesForm from './ActivitiesForm'

import { useState } from 'react'

import { ActivityType } from '../types/ActivityType'

export default function Activities() {
  const [activities, setActivities] = useState<ActivityType[]>([
    {
      title: 'Among Us',
      description: 'Amogus',
    },
    {
      title: 'The Finals',
      description: 'Full equipos de 3',
    },
    {
      title: 'Omegle',
      description: 'Ometv broski',
    },
  ])

  const addActivity = (newActivity: ActivityType) => {
    setActivities((current) => [...current, newActivity])
  }

  return (
    <div className="flex flex-row max-w-3xl mx-auto px-12 justify-between">
      <ActivitiesList activities={activities} />

      <ActivitiesForm submitButton={addActivity} />
    </div>
  )
}
