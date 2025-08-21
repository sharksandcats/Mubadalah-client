import { useState, useEffect } from 'react';

import '../css/CitySelector.css'

const CitySelector = ({onSelectCity}) =>{
    
    const [cities, setCities] = useState([]);
    
    useEffect(() =>{

        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({country: "Jordan"})
        })
         .then((response) => response.json())
         .then((result) => {
            const JordanCities = result.data
            setCities(JordanCities)
         })
         .catch((err) => console.error("Error fetching cities", err));
    }, [])

    return(
        <div className="city-list">
            {cities.map((city, index) =>(
                <div
                   key={index}
                   className='city-item'
                   onClick={() => onSelectCity(city)}
                >
                    {city}
                </div>
            ))}
        </div>
    )
}

export default CitySelector;