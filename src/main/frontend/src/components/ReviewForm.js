import React, { useState }from 'react';

const ReviewForm = (props) => {
  const emptyReview = {
    name: "",
    cost: "3",
    fun: "3",
    safety: "3",
    comment: ""
  }
  const [review, setReview] = useState(emptyReview)

  const clearForm = () => {
    setReview(emptyReview)
  }

  const submitForm = (event) => {
    props.handleSubmit(event, review)
    clearForm()
  }

  const handleInputChange = (event) => {
    setReview({
      ...review,
      [event.target.name] : event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={submitForm} className="form callout medium-8 cell">
      <h2>Review Form</h2>
      <label>Name
        <input
          type="text"
          name="name"
          value={review.name}
          onChange={handleInputChange}
        ></input>
      </label>
      <div className="review-form-sliders auto-margin">
        <label className="inline-block margin-top-bottom-1 margin-left-2">Cost
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
        <label className="inline-block margin-top-bottom-1 margin-left-2">Fun
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
        <label className="inline-block margin-top-bottom-1 margin-left-2">Safety
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
      </  div>
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
