import React from 'react';
import RatingStars from "./RatingStars"

const ReviewTile = (props) => {
  function updateReview() {
    fetch("/api/v1/reviews", {
      method: "PUT",
      body: JSON.stringify(props.review),
      headers: {"Content-Type" : "application/json"} 
    })
    .then(result => result.json())
    .then(review => {
      let updatedReviews = [...props.reviews]
      updatedReviews[props.index] = review
      updatedReviews.sort((x,y) => (x.votes > y.votes) ? -1: 1)
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
        <span>Votes: {props.review.votes ? props.review.votes : 0}</span><br/>
        <span>Cost: </span><RatingStars rating={props.review.cost}/><br/>
        <span>Fun: </span><RatingStars rating={props.review.fun}/><br/>
        <span>Safety: </span><RatingStars rating={props.review.safety}/>
      </div>
      <button className="button upvote" onClick={upvote}><i class="fas fa-arrow-up"></i></button>
      <button className="button downvote" onClick={downvote}><i class="fas fa-arrow-down"></i></button>
    </div>
  );
}

export default ReviewTile;
