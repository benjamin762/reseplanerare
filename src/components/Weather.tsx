import { useEffect, useState } from "react"

export default function Weather ({ place }: {place: string}) {
    const [weather, setWeather] = useState({result:false, temp: '', condition: '', icon: ''})

    useEffect(() => {
        let ignore = false
         async function fetchWeather() {
            const api = import.meta.env.VITE_WEATHER_API

            let response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + api + '&q=' + place + '&aqi=no')
            if (!response.ok && !ignore) {
                // Don't show any weather if locaiton is not found or api is unavailable.
                setWeather({result:false, temp: '', condition: '', icon: ''})
                // console.log("response not ok", await response.json())
                return
            }
            let data = await response.json()
            const result = {
                result: true,
                temp: data.current.temp_c + ' °C',
                condition: data.current.condition.text,
                icon: data.current.condition.icon
            }
            if (!ignore) {
                setWeather(result)
            }
        }
        fetchWeather()
        return () => {
            ignore = true
        }
    }, [place])

    return <span className="weather">
        {weather.result ?
            <>
                <img src={weather.icon} alt={weather.condition} title={weather.condition} />
                {weather.temp}
            </>
            :
            'No weather report.'
        }
    </span>
}