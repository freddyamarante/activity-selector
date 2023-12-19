import { ActivityType } from '../types/ActivityType'

import { ChangeEvent, FormEvent, useState } from 'react'

type ActivitiesFormProps = {
  submitButton: (newActivity: ActivityType) => void
}

export default function ActivitiesForm({ submitButton }: ActivitiesFormProps) {
  const [formData, setFormData] = useState<ActivityType>({
    title: '',
    description: '',
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (formData.title !== '') {
      submitButton(formData)
      setFormData({ title: '', description: '' })
      setErrorMessage(null)
    } else {
      setErrorMessage('Please add a title')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-grow-0 space-y-6"
    >
      <div className="flex flex-col">
        <label className="font-semibold text-xl mb-1" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="bg-slate-600 border-2 border-slate-950 pl-2 py-1 rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-xl mb-1" htmlFor="description">
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="bg-slate-600 border-2 border-slate-950 pl-2 py-1 rounded-lg"
        />
      </div>

      {errorMessage && (
        <div className="font-light text-red-500">{errorMessage}</div>
      )}

      <button type="submit" className="bg-slate-950 p-2 rounded-lg hover:">
        Add Activity
      </button>
    </form>
  )
}
