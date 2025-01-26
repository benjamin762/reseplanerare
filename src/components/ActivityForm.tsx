import { ChangeEvent, useState } from "react";
import Activity from "../types/activityTypes";

export default function ActivityForm ({ onNew }: {onNew: (newActivity: Activity) => void }) {
    const [newActivity, setNewActivity] = useState({name: '', date: '', place: ''})
    
    // Function to change newActivity on change of input fields.
    function change(key: 'name'|'date'|'place') { //change new activity
        return function (event: ChangeEvent<HTMLInputElement>) {
            setNewActivity({...newActivity, [key]: event.target.value})
        } 
    }

    function addButtonClicked (event: React.MouseEvent<HTMLButtonElement>) { //Bättre namn gär två saker.
        event.preventDefault()
        // Check empty text.
        if (!(newActivity.name && newActivity.date && newActivity.place)) {
            console.log("Did not add activity with empty fields.")
            return
        }
        
        onNew(newActivity) // Send newActivity in callback.
        setNewActivity({name: '', date: '', place: ''})
    }


    return <form>
        <fieldset>
            <legend>Add your new travel plan</legend>

            <label htmlFor="name">Name</label>
            <input id="name" value={newActivity.name} onChange={change('name')} />
            <span className="error">{ newActivity.name?.trim() == "" ? "Name can not be empty" : "" }</span>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" value={newActivity.date} onChange={change('date')} />
            <span className="error">{ newActivity.date != "" ? "" : "Date must be selected."} </span>

            <label htmlFor="place">Place</label>
            <input id="place" value={newActivity.place} onChange={change('place')} />
            <span className="error"> { newActivity.place ? "" : "Place can not be empty." } </span>

            <button onClick={addButtonClicked} disabled={newActivity.name == "" || newActivity.date=="" || newActivity.place ==""}>Add</button>
        </fieldset>
    </form>
}