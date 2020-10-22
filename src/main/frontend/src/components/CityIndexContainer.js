import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CityTile from "./CityTile"

const CityIndexContainer = props => {
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(5)
  const [last, setLast] = useState(false)

  const [cities, setCities] = useState([])
  useEffect(() => {
    const fetchString = !props.match.params.searchTerm ? `api/v1/cities?size=${size}&page=${page}` : `/api/v1/search/cities/${props.match.params.searchTerm}?size=${size}&page=${page}`;
    fetch(fetchString)
    .then(result => result.json())
    .then(cities => {
      setLast(cities.last)
      setCities(cities.content)
    })
  }, [page,size,props.match.params.searchTerm])

  let showPaging = true;
  let cityTiles;
  if (cities.length > 0) {
    cityTiles = cities.map(city => {
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
  } else if (location.pathname == "/") {
    cityTiles = (<h2 className="loading-fetch center-text">Loading</h2>);
  } else {
    showPaging = false;
    cityTiles = (
    <div className="no-results center-text">
      <h2>No results found!</h2>
      <p className="center-text"><Link to="/">Return home?</Link></p>
    </div>
    );
  }

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    setPage(0);
  }

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

  let paging;
  if (showPaging) {
    paging = (
      <>
        <div className="select-size-container auto-margin">
          <label htmlFor="size" className="inline">Results per page:</label>
          <select name="size" id="size" className="select-size inline" onChange={handleSizeChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <p className="center-text">{prevButton} Pg: {page+1} {nextButton}</p>
      </>
    );
  }

  return (
    <>
      <br/>
      {cityTiles}
      {paging}
    </>
  )
}

export default CityIndexContainer