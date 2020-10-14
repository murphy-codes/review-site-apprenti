import React from 'react';

const ReviewTile = (props) => {
  return (
    <div>
      <h2 className="center-text"> {props.review.comment}</h2>
      <p className="center-text">{props.review.cost}</p>
      <p className="center-text">{props.review.fun}</p>
      <p className="center-text">{props.review.safety}</p>
    </div>
  );
}

export default ReviewTile;
