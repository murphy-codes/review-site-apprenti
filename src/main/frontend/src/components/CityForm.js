import React, { useState, useEffect } from "react"
const CityForm = props => {
  const emptyCity = {
    name: "",
    description: "",
    image_url: ""
  };

  const [newCity, setNewCity] = useState(emptyCity);

  const handleInputChange = event => {
    setNewCity({
      ...newCity,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleFormSubmission(newCity);
    setNewCity(emptyCity);
  }

  const clearForm = () => {
    event.preventDefault();
    setNewCity(emptyCity);
  }

  return (
    <form onSubmit={handleSubmit} className="form callout medium-8 cell">
      <h2>New City</h2>
      <label>Name *
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
  )

 }
export default CityForm
