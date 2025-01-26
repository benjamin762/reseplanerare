import ActivityItem from "./ActivityItem"
import Activity from "../types/activityTypes"

export default function ActivityList ({ activities, onEdit, onDelete}: { activities: Activity[], onEdit: (id: number) => void, onDelete: (id: number) => void })  {

    // TODO sort function
    // let currentSort: 'name'| 'name-reverese'|'date'
    // function sort(){}


    const activityItems = activities.map((a, i) => <ActivityItem activity={a} key={i} id={i} onEdit={onEdit} onDelete={onDelete}/>)

    return <div className="activityList">
        <table border={1}>
            <caption>All activites</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Place</th>
                    <th>Weather today</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { activityItems }
            </tbody>
            </table>
    </div>
}