import { CherryIcon } from './components/CherryIcon'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-cherry-700 gap-4">
      <CherryIcon size={64} />
      <span className="font-display text-2xl">Cherry 🍒</span>
    </div>
  )
}

export default App
