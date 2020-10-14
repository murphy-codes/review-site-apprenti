import React, { useState, useEffect } from "react"
import CityTile from "./CityTile"

const CityIndexContainer = props => {
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  const [last, setLast] = useState(false)

  const [cities, setCities] = useState([])
  useEffect(() => {
    fetch(`api/v1/cities?size=${size}&page=${page}`)
    .then(result => result.json())
    .then(cities => {
      setLast(cities.last)
      setCities(cities.content)
    })
  }, [page,size])

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

 const prev = () => {
   event.preventDefault();
   setPage(page-1);
 }

 const next = () => {
   event.preventDefault();
   setPage(page+1);
 }

 let prevButton = page != 0 ? (<a href="#" onClick={prev}><i className="fas fa-angle-double-left soft-button"></i></a>) : null;
 let nextButton = !last ? (<a href="#" onClick={next}><i className="fas fa-angle-double-right soft-button"></i></a>) : null;

 return (
   <>
     <br/>
     {cityTiles}
     <p className="center-text">{prevButton} Pg: {page+1} {nextButton}</p>
   </>
 )
}

export default CityIndexContainer