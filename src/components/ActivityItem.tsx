export default function ActivityItem (props: {activity: Activity}) {
    const {activity} = props

    return <tr>
        <td>{activity.name}</td>
        <td>{activity.date}</td>
        <td>{activity.place}</td>
    </tr>
}