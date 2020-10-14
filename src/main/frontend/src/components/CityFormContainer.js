import React, { useState, useEffect } from "react"
import CityForm from "./CityForm"

const CityFormContainer = props => {
  const [formSuccessMessage, setFormSuccessMessage] = useState([]);
  const handleFormSubmission = payload => {
    let fetchString = '/api/v1/cities';
    fetch(fetchString, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(body => {
        setFormSuccessMessage('Your city has been successfully added.');
      })
      .catch(error => {
        console.error(`Error in fetch: ${error.message}`)
      });
  }

  if (!Array.isArray(formSuccessMessage)) {
    return (
      <h2 className="center-text margin-top-1">{formSuccessMessage}</h2>
    )
  } else {
      return <CityForm handleFormSubmission={handleFormSubmission} />
  }
 }

export default CityFormContainer