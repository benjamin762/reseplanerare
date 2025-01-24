import './App.css'
import Header from './components/Header'
import ActivityList from './components/ActivityList'
import ActivityForm from './components/ActivityForm'
import Activity from './types/activityTypes'
import { useState } from 'react'

function App() {
  let [activities, setActivities] = useState([{
    name: 'Example activity',
    date: '2025-01-01',
    place: 'Somewhere'
  }])

  function addActivity(newActivity: Activity) {
    setActivities( activities.concat(newActivity))
    console.log("New activity added", newActivity, activities)
  }
  function deleteActivity(id: number) {
    setActivities(activities.filter((_, i) =>  i != id))
  }


  return (
    <>
      <Header />
      <ActivityList activities={activities} onEdit={()=>null} onDelete={deleteActivity} />
      <ActivityForm onNew={addActivity} />
    </>
  )
}

export default App
