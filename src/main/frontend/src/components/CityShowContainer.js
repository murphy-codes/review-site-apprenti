import React, { useEffect, useState } from "react"
import Error404 from "./Error404"
import CityShow from "./CityShow"
import ReviewTile from "./ReviewTile"
import ReviewForm from "./ReviewForm"

const CityShowContainer = props => {
  const [city, setCity] = useState(null);
  const [reviews, setReviews] = useState([])
  
  const handleSubmit = (event, review) => {
    event.preventDefault()
    fetch(`/api/v1/reviews/${props.id}`, {
      method: "POST",
      body: JSON.stringify(review),
      headers: {"Content-Type" : "application/json"}
    })
    .then(result => result.json())
    .then(newReview => {
      setReviews([
        ...reviews, review
      ])
    })
    clearForm()
  }

  useEffect(() => {
    const fetchString = `/api/v1/cities/${props.match.params.id}`;
    fetch(fetchString)
      .then(response => {
        if (response.ok) { return response; }
         else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw (error);
        }})
      .then(response => response.json())
      .then(city => {
        setCity(city)
        setReviews(city.reviews)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  if (city) {
    let cost, fun, safety;
    cost = fun = safety = 0;
    let reviewElements = reviews.map((review, index) => {
      cost += review.cost;
      fun += review.fun;
      safety += review.safety;
      return (
        <ReviewTile key={index} review={review} />
      )
    })
    cost /= city.reviews.length;
    fun /= city.reviews.length;
    safety /= city.reviews.length;

    return (
      <div className="row">
        <div className="small-8 small-centered columns">
          <CityShow
            id={city.id}
            name={city.name}
            description={city.description}
            imageUrl={city.imageUrl}
            cost={cost.toFixed(2)}
            fun={fun.toFixed(2)}
            safety={safety.toFixed(2)}
          />
        </div>
        <ReviewForm handleSubmit={handleSubmit} id={city.id} />
        {reviewElements}
      </div>
    );
  } else { return <Error404 error={`Sorry, but that but that city doesn't exist on our site yet!'.`} /> }
}
export default CityShowContainer