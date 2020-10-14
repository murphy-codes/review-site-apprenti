import React from "react"

const CityShow = props => {
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
    </div>
  )
}
export default CityShow