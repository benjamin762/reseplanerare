import Activity from "../types/activityTypes"

export default function ActivityItem ({activity, id, onEdit, onDelete}: {activity: Activity, id: number, onEdit: (id: number) => void, onDelete: (id: number) => void}) {


    return <tr>
        <td>{activity.name}</td>
        <td>{activity.date}</td>
        <td>{activity.place}</td>
        <td>
            <button onClick={() => onEdit(id)} >Edit</button>
            <button onClick={() => onDelete(id)} >Delete</button>
        </td>
    </tr>
}