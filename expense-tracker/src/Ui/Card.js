import React from 'react';

import './Card.css'

const Card = (props) => {
 return(
 <div className="item_row">{props.children}</div>
 )
}
export default Card;