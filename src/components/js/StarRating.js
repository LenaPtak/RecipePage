import React, { useState } from "react";
import "../css/StarRating.css";

export default function StarRating(props) {

  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            // className={index <= (hover || rating) ? "on" : "off"}
            // onClick={() => setRating(index)}
            // onMouseEnter={() => setHover(index)}
            // onMouseLeave={() => setHover(rating)}

            //proba
            className={index <= (props.hover || props.rating[props.cardId-1]) ? "on" : "off"}
            onClick={() => props.clickStar(index, props.cardId)}
            onMouseEnter={() => props.hoverStar(props.rating[props.cardId], props.cardId)}
            onMouseLeave={() => props.clickStar(index, props.cardId)}
          >
            <span className="star"> &#9733; </span>
          </button>
        );
      })}
    </div>
  );
}
