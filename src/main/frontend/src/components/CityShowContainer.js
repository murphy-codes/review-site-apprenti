import React from "react"
import ageToString from "../functions/ageToString.js"

const CityShow = props => {
  return (
    <div className="city-show row">
      <h2>Dynamically fetched city name</h2>
      <img src="https://c1.wallpaperflare.com/preview/111/19/672/bay-area-golden-gate-bridge-golden-gate-bridge.jpg" alt="Dynamically fetched city name" />
      <p><br/>Description: Dynamically fetched city description</p>
      <p>
        <span>Cost: 5</span>
        <span>Fun: 3.5</span>
        <span>Safety: 2.5</span>
      </p>
    </div>
  )
}
export default CityShow