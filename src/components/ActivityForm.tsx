import { ChangeEvent, useState } from "react";
import Activity from "../types/activityTypes";

export default function ActivityForm ({ onNew }: {onNew: (newActivity: Activity) => void }) {
    const [newActivity, setNewActivity] = useState({name: '', date: '', place: ''})
    const [nameTouched, setNameTouched] = useState(false)
    const [dateTouched, setDateTouched] = useState(false)
    const [placeTouched, setPlaceTouched] = useState(false)
    
    // Function to change newActivity on change of input fields.
    function updateNewActivityOnInputChange(key: 'name'|'date'|'place') {
        return function (event: ChangeEvent<HTMLInputElement>) {
            setNewActivity({...newActivity, [key]: event.target.value})
        } 
    }

    function checkEmptyFieldsAndSubmit (event: React.MouseEvent<HTMLButtonElement>) { 
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
            <input id="name" value={newActivity.name} onChange={updateNewActivityOnInputChange('name')} onBlur={() => setNameTouched(true)} />
            <span className="error">{ nameTouched && newActivity.name?.trim() == "" ? "Name can not be empty" : "" }</span>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" value={newActivity.date} onChange={updateNewActivityOnInputChange('date')} onBlur={() => setDateTouched(true)} />
            <span className="error">{ dateTouched && newActivity.date == "" ? "Date must be selected." : ""} </span>

            <label htmlFor="place">Place</label>
            <input id="place" value={newActivity.place} onChange={updateNewActivityOnInputChange('place')} onBlur={() => setPlaceTouched(true)} />
            <span className="error"> { placeTouched && newActivity.place?.trim() == "" ? "Place can not be empty." : ""} </span>

            <button onClick={checkEmptyFieldsAndSubmit} disabled={newActivity.name == "" || newActivity.date=="" || newActivity.place ==""}>Add</button>
        </fieldset>
    </form>
}