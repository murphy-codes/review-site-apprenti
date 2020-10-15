import React from 'react';
import roundHalf from "../functions/roundHalf.js"

const RatingStars = (props) => {
  let rating = roundHalf(props.rating)
  let stars = ""
  let i;

  for (i = 0; i < Math.floor(rating); i++) { stars += '<i class="fas fa-star"></i>' }
  if(rating - Math.floor(rating) == 0.5) { stars += '<i class="fas fa-star-half"></i>' }

  return <div className="inline-block" dangerouslySetInnerHTML={{__html: stars}}/>;
}

export default RatingStars;
