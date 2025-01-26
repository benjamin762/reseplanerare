import './App.css'
import Header from './components/Header'
import ActivityList from './components/ActivityList'
import ActivityForm from './components/ActivityForm'
import Activity from './types/activityTypes'
import { useState } from 'react'
import EditActivityForm from './components/EditActivityForm'

function App() {
  let [activities, setActivities] = useState([{
    name: 'Summer vacation',
    date: '2025-06-01',
    place: 'London'
  }])
  let [activityToEdit, setActivityToEdit] = useState(-1)

  function addActivity(newActivity: Activity) {
    setActivities( activities.concat(newActivity))
    console.log("New activity added", newActivity, activities)
  }
  function deleteActivity(id: number) {
    setActivities(activities.filter((_, i) =>  i != id))
  }
  function beginEditActivity(id: number) {
    setActivityToEdit(id)
  }
  function finishEditActivity(editedActivity: Activity) {
    setActivities(activities.map((activity, i) => {
      if (i == activityToEdit) {
        return editedActivity
      } else {
        return activity
      }
    }))
    setActivityToEdit(-1)
  }


  return (
    <>
      <Header />
      <ActivityList activities={activities} onEdit={beginEditActivity} onDelete={deleteActivity} />
      { activityToEdit != -1 ?
         <EditActivityForm activity={activities[activityToEdit]} onFinish={finishEditActivity}/>
         : '' 
      }
      <ActivityForm onNew={addActivity} />
    </>
  )
}

export default App
