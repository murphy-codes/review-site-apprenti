import React, { useState } from 'react';
import _ from "lodash"

const CityForm = props => {
  const emptyCity = {
    name: "",
    description: "",
    imageUrl: ""
  }
  const [newCity, setNewCity] = useState(emptyCity);
  const [errors, setErrors] = useState({})
  
  let requiredFields = {
    name: "Name",
    imageUrl: "Image URL can't be blank"
  }

  const handleInputChange = event => {
    setNewCity({
      ...newCity,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const clearForm = () => {
    setNewCity(emptyCity);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let formErrors = {}
    for (let field of Object.keys(requiredFields)) {
      if (newCity[field].trim() === "") {
        formErrors = {
          ...formErrors,
          [field] : `${requiredFields[field]} cannot be blank`
        }
      }
    }
    if (_.isEmpty(formErrors)) {
      fetch('/api/v1/cities', {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {"Content-Type" : "application/json"}
      })
    } else setErrors(formErrors)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form callout medium-8 cell">
      <h2>City Form</h2>
      <p className="error">{errors.name}</p>
      <label>Name
        <input
          type="text"
          name="name"
          placeholder="San Francisco"
          value={newCity.name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>Description
        <input
          type="text"
          name="description"
          placeholder="The golden city"
          value={newCity.description}
          onChange={handleInputChange}
        ></input>
      </label>
      <p className="error">{errors.imageUrl}</p>
      <label>Image URL
        <input
          type="text"
          name="imageUrl"
          placeholder="wiki.com/san_francisco.jpeg"
          value={newCity.imageUrl}
          onChange={handleInputChange}
        ></input>
      </label>
      <p id="require-descriptor">* denotes a required field</p>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" id="clear-button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
  </div>
  )

 }
export default CityForm
