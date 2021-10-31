import React from "react"
import styles from './Card.module.css'

const Card = (props) => {
// option one
    //   let thisClassName = styles.card;
//   if (props.className) {
//     thisClassName = styles.card +' '+ props.className;
//   }

  // use children property
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
