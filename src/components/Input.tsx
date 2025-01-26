

export default function Input ({type, onChange, errorFunction}: {type: "name"|"date"|"place", onChange: (value: string) => void, errorFunction (value: string) => string|null }) {
    let error = ''

    function handleChange (event) {
        error = errorFunction(event.target.value);

        if (!error) {
            onChange(event.target.value)
        } 
        
    }

    return <label>
        {label}
        <input type={type} onChange={handleChange} />
        <span className="error"> {error}</span>
    </label>
}