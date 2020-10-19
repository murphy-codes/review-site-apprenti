import React from 'react';
import RatingStars from "./RatingStars"

const ReviewTile = (props) => {
  function roundHalf(num) {
      return Math.round(num*2)/2;
  }

  function updateReview() {
    fetch("/api/v1/reviews", {
      method: "PUT",
      body: JSON.stringify(props.review),
      headers: {"Content-Type" : "application/json"} 
    })
    .then(result => result.json())
    .then(review => {
      let updatedReviews = props.reviews
      updatedReviews[props.index] = review
      props.setReviews(updatedReviews)
    })
  }

    function upvote() {
    props.review.votes += 1
    updateReview()
  }

  function downvote() {
      props.review.votes -= 1
      updateReview()
  }

  return (
    <div className="center-text">
      <h2 className="inline-block"> {props.review.name}</h2> - <h3 className="inline-block"> {props.review.comment}</h3><br/>
      <div className="margin-left-2 review-stars auto-margin">
      <p>{props.review.votes}</p>
        <span>Cost: </span><RatingStars rating={props.review.cost}/><br/>
        <span>Fun: </span><RatingStars rating={props.review.fun}/><br/>
        <span>Safety: </span><RatingStars rating={props.review.safety}/>
      </div>
      <button className = "button" onClick = {upvote}> Upvote </button>
      <button className = "button" onClick = {downvote}> Downvote </button>
    </div>
  );
}

export default ReviewTile;
