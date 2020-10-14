import React, { useState } from 'react';

const CityForm = () => {
  const [newCity, setNewCity] = useState({
    name: "",
    description: "",
    imageUrl: ""
  })

  const handleInputChange = (event) => {
    setNewCity({
      ...newCity,
      [event.target.name] : event.target.value
    })
  }

  const clearForm = () => {
    setNewCity({
      name: "",
      description: "",
      imageUrl: ""
    })
  }

  const handleSubmit = () => {
    fetch('/api/v1/cities', {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: {"Content-Type" : "application/json"}
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form callout medium-8 cell">
      <h2>City Form</h2>
      <label>Name
        <input
          type="text"
          name="name"
          value={newCity.name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>Description
        <input
          type="text"
          name="description"
          value={newCity.description}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>Image URL
        <input
          type="text"
          name="imageUrl"
          value={newCity.imageUrl}
          onChange={handleInputChange}
        ></input>
      </label>
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" id="clear-button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
    </div>
  );
}

export default CityForm;
