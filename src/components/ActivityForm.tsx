import { ChangeEvent } from "react";
import Activity from "../types/activityTypes";

export default function ActivityForm (props: { onNew: (newActivity: Activity) => void }) {
    const { onNew } = props
    let newActivity: Activity = {name: '', date: '', place: ''}

    function change(what: 'name'|'date'|'place') {
        return function (event: ChangeEvent<HTMLInputElement>) {
            newActivity[what] = event.target.value;
        } 
    }

    function add (event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        onNew(newActivity)
    }


    return <form>
        <fieldset>
            <legend>Add your new travel plan</legend>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={change('name')} />
            <label htmlFor="date">Date</label>
            <input id="date" type="date" onChange={change('date')} />
            <label htmlFor="place">Place</label>
            <input id="place" onChange={change('place')} />
            <button onClick={add}>Add</button>
        </fieldset>
    </form>
}