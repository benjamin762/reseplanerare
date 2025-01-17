import ActivityItem from "./ActivityItem"
import Activity from "../types/activityTypes"

export default function ActivityList (props: { activities: Activity[] })  {
    const { activities }  = props

    // TODO sort function
    // let currentSort: 'name'| 'name-reverese'|'date'
    // function sort(){}


    const activityItems = activities.map((a, i) => <ActivityItem activity={a} key={i}/>)

    return <div className="activityList">
        <table>
            <caption>All activites</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                { activityItems }
            </tbody>
            </table>
    </div>
}