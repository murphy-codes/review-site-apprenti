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
      <div className="clearfix">
        <img src={props.imageUrl} alt={props.name} className="city-show-img float-left" />
        <div className="city-show-text">
          <br/>{props.description ? (<p>Description: {props.description}</p>) : ""}
          {isNaN(props.cost) ? "" : (
            <div className="margin-left-2 review-stars inline-block">
              <span>Cost: </span><RatingStars rating={props.cost}/><br/>
              <span>Fun: </span><RatingStars rating={props.fun}/><br/>
              <span>Safety: </span><RatingStars rating={props.safety}/>
            </div>
          )}
          <br/><button onClick={deleteCity} className="button">Delete</button>
        </div>
      </div>
    </div>
  )
}
export default CityShow

