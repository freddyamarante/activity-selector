export default function ActivitiesForm() {
  return (
    <form className="flex flex-col space-y-6">
      <div className="flex flex-col">
        <label className="font-semibold text-xl mb-1" htmlFor="title">
          Title
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="bg-slate-600 border-2 border-slate-950 pl-2 py-1 rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-xl mb-1" htmlFor="description">
          Description
        </label>
        <input
          name="description"
          type="text"
          placeholder="Description"
          className="bg-slate-600 border-2 border-slate-950 pl-2 py-1 rounded-lg"
        />
      </div>

      <button className="bg-slate-950 p-2 rounded-lg hover:" type="button">
        Add Activity
      </button>
    </form>
  )
}
