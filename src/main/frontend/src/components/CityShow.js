import React from "react"
import RatingStars from "./RatingStars"
import {useHistory} from "react-router-dom"

const CityShow = props => {
  let history = useHistory()
  const deleteCity = () => {
    fetch(`/api/v1/cities/${props.id}`, {
      "method" : "DELETE"
    })
    .then(() => {
      history.push("/")
    })
  }
  return (
    <div className="city-show row">
      <h2>{props.name}</h2>
      <img src={props.imageUrl} alt={props.name} className="city-img" />
      <p><br/>Description: {props.description}</p>
      <div className="margin-left-2 review-stars">
        <span>Cost: </span><RatingStars rating={props.cost}/><br/>
        <span>Fun: </span><RatingStars rating={props.fun}/><br/>
        <span>Safety: </span><RatingStars rating={props.safety}/>
      </div>
    </div>
  )
}
export default CityShow

