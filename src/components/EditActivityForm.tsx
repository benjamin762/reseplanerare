import { ChangeEvent, useState } from "react";
import Activity from "../types/activityTypes";

export default function EditActivityForm ({ activity, onFinish }: {activity: Activity, onFinish: (editedActivity: Activity) => void }) {
    const [newActivity, setNewActivity] = useState(activity)
    
    // Function to change newActivity on change of input fields.
    function change(key: 'name'|'date'|'place') { //change new activity
        return function (event: ChangeEvent<HTMLInputElement>) {
            setNewActivity({...newActivity, [key]: event.target.value})
        } 
    }

    function saveEdit (event: React.MouseEvent<HTMLButtonElement>) { //Bättre namn gär två saker.
        event.preventDefault()
        // Check empty text.
        if (!(newActivity.name && newActivity.date && newActivity.place)) {
            console.log("Did not add activity with empty fields.")
            return
        }
        
        onFinish(newActivity) // Send newActivity in callback.
        setNewActivity({name: '', date: '', place: ''})
    }
    function cancelEdit (event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        onFinish(activity)
    }


    return <form className="editActivityForm">
        <fieldset>
            <legend>Edit {activity.name}</legend>

            <label htmlFor="name">Name</label>
            <input id="name" value={newActivity.name} onChange={change('name')} />
            <span className="error">{ newActivity.name?.trim() == "" ? "Name can not be empty" : "" }</span>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" value={newActivity.date} onChange={change('date')} />
            <span className="error">{ newActivity.date != "" ? "" : "Date must be selected."} </span>

            <label htmlFor="place">Place</label>
            <input id="place" value={newActivity.place} onChange={change('place')} />
            <span className="error"> { newActivity.place?.trim() ? "" : "Place can not be empty." } </span>

            <button onClick={saveEdit} disabled={newActivity.name == "" || newActivity.date=="" || newActivity.place ==""}> Save </button>
            <button onClick={cancelEdit}> Cancel </button>
        </fieldset>
    </form>
}