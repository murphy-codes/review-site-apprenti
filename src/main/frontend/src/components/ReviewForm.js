import React, { useState }from 'react';

const ReviewForm = (props) => {
  const [review, setReview] = useState({
    name: "",
    cost: "3",
    fun: "3",
    safety: "3",
    comment: ""
  })

  const handleInputChange = (event) => {
    setReview({
      ...review,
      [event.target.name] : event.target.value
    })
  }

  const clearForm = () => {
    setReview({
      name: "",
      cost: "",
      fun: "",
      safety: "",
      comment: ""
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/api/v1/reviews/${props.id}`, {
      method: "POST",
      body: JSON.stringify(review),
      headers: {"Content-Type" : "application/json"}
    })
    clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form callout medium-8 cell">
      <h2>Review Form</h2>
      <label>Name
        <input
          type="text"
          name="name"
          value={review.name}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>Cost        
        <input
          type="range"
          min="1"
          max="5"
          value="3"
          name="cost"
          className="input-slider"
          value={review.cost}
          onChange={handleInputChange}
        ></input>
        {review.cost}
      </label>
      <label>Fun
        <input
          type="range"
          min="1"
          max="5"
          value="3"
          name="fun"
          className="input-slider"
          value={review.fun}
          onChange={handleInputChange}
        ></input>
        {review.fun}
      </label>
      <label>Safety
        <input
          type="range"
          min="1"
          max="5"
          value="3"
          name="safety"
          className="input-slider"
          value={review.safety}
          onChange={handleInputChange}
        ></input>
        {review.safety}
      </label>
        <textarea
          type="text"
          name="comment"
          value={review.comment}
          onChange={handleInputChange}
        />
      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
        <button className="button" id="clear-button" value="Clear Form" onClick={clearForm}>Clear</button>
      </div>
    </form>
    </div>
  );
}

export default ReviewForm;
