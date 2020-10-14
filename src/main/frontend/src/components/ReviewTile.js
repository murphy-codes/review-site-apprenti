import React from 'react';
import RatingStars from "./RatingStars"

const ReviewTile = (props) => {
  function roundHalf(num) {
      return Math.round(num*2)/2;
  }

  return (
    <div className="center-text">
      <h2 className="inline-block"> {props.review.name}</h2> - <h3 className="inline-block"> {props.review.comment}</h3><br/>
      <div className="margin-left-2 review-stars auto-margin">
        <span>Cost: </span><RatingStars rating={props.review.cost}/><br/>
        <span>Fun: </span><RatingStars rating={props.review.fun}/><br/>
        <span>Safety: </span><RatingStars rating={props.review.safety}/>
      </div>
    </div>
  );
}

export default ReviewTile;
