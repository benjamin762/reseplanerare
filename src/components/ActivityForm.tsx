import { ChangeEvent } from "react";
import Activity from "../types/activityTypes";

export default function ActivityForm ({ onNew }: {onNew: (newActivity: Activity) => void }) { // Props contains a callback function that takes a Activity type.
// export default function ActivityForm (props: { onNew: (newActivity: Activity) => void }) { // Props contains a callback function that takes a Activity type.
    // const { onNew } = props
    let newActivity: Activity = {name: '', date: '', place: ''}

    // Function to change newActivity on change of input fields.
    function change(key: 'name'|'date'|'place') { //change new activity
        return function (event: ChangeEvent<HTMLInputElement>) {
            newActivity[key] = event.target.value;
        } 
    }

    function addButtonClicked (event: React.MouseEvent<HTMLButtonElement>) { //Bättre namn gär två saker.
        event.preventDefault()
        // Check empty text.
        if (newActivity.name == "" || newActivity.date=="" || newActivity.place =="") {
            console.log("Did not add activity with empty fields.")
            return
        }
        
        onNew(newActivity) // Send newActivity in callback.
    }


    return <form>
        <fieldset>
            <legend>Add your new travel plan</legend>

            <label htmlFor="name">Name</label>
            <input id="name" onChange={change('name')} />
            <span className="error"></span>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" onChange={change('date')} />
            <span className="error"></span>

            <label htmlFor="place">Place</label>
            <input id="place" onChange={change('place')} />
            <span className="error">Can not be empty. :(</span>

            <button onClick={addButtonClicked}>Add</button>
        </fieldset>
    </form>
}