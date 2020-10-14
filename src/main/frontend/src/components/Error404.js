import React from "react"
import { Link } from "react-router-dom"

const Error404 = props => {
  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1>Uh oh!</h1>
        <p><strong>Error 404</strong>: {props.error}</p>
        <iframe src="https://giphy.com/embed/14uQ3cOFteDaU" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/404-14uQ3cOFteDaU">via GIPHY</a></p>
      </div>
    </div>
  )
}

export default Error404