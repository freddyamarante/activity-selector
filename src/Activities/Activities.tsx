import ActivitiesList from './ActivitiesList'
import ActivitiesForm from './ActivitiesForm'

import { useState, useEffect } from 'react'

import { ActivityType } from '../types/ActivityType'

export default function Activities() {
  const [activities, setActivities] = useState<ActivityType[]>([])

  useEffect(() => {
    setActivities([
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
  }, [])

  return (
    <div className="flex flex-row space-x-4 px-4">
      <ActivitiesList activities={activities} />

      <ActivitiesForm />
    </div>
  )
}
