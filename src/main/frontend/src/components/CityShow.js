import React from "react"
import { useHistory } from 'react-router-dom'

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
      <p>
        <span>Cost: {props.cost}</span><br/>
        <span>Fun: {props.fun}</span><br/>
        <span>Safety: {props.safety}</span>
      </p>
      <button className="button" onClick={deleteCity}>Delete</button>
    </div>
  )
}
export default CityShow