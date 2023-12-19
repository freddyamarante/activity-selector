import Activities from './Activities/Activities'

function App() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">Activity Selector</h1>

      <div className="bg-slate-800 rounded-3xl border-2 border-slate-600 mt-16 my-4 py-16 px-4">
        <Activities />
      </div>
    </main>
  )
}

export default App
