import './App.css'
import Header from './components/Header'
import ActivityList from './components/ActivityList'
import ActivityForm from './components/ActivityForm'
import Activity from './types/activityTypes'

function App() {
  // let activities: { name: string, date: string, place: string }[] = []
  let activities: Activity[] = [{
    name: 'Example activity',
    date: '2025-01-01',
    place: 'Somewhere'
  }]

  function addActivity(newActivity: Activity) {
    activities.push(newActivity)
    console.log("New activity added", newActivity, activities)
  }


  return (
    <>
      <Header />
      <ActivityList activities={activities} />
      <ActivityForm onNew={addActivity} />
    </>
  )
}

export default App
