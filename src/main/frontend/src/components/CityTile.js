import React from "react"
import { Link } from "react-router-dom"
import ReviewForm from "./ReviewForm"

const CityTile = props => {
  return (
    <div className="city-tile row">
      <Link to={`/cities/${props.id}`} className="city-thumbnail float-left margin-right-1 margin-left-2 margin-bottom-1"><img className="city-image" src={props.thumbnail} alt={`${props.name}`} /></Link>
      <div>
        <h2 className="center-text"><Link to={`/cities/${props.id}`}> {props.name} </Link></h2>
        <p className="center-text">
          {props.description} <br />
        </p>
      </div>
      <hr />
    </div>
  )
}

export default CityTile
