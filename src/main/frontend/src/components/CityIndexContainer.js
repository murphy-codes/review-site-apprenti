import React, { useState, useEffect } from "react"
import CityTile from "./CityTile"


const CityIndexContainer = props => {
  const [cities, setCities] = useState([])
  useEffect(() => {
    fetch('/api/v1/cities')
    .then(result => result.json())
    .then(cities => {
      setCities(cities.content)
    })
  }, [])
  const cityTiles = cities.map(city => {
    return (
     <CityTile
      key={city.id}
      id={city.id}
      name={city.name}
      description={city.description}
      thumbnail={city.imageUrl}
     />
   );
 });
 return (
   cityTiles
   
 )
}

export default CityIndexContainer