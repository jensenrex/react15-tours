import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false); 

  return ( 
    <div className="card" >
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
      <h5 className="card-title">{name} <mark>${price}</mark></h5>
      
      <p className="card-text">{readMore ? info : `${info.substring(0, 150)}.....`}
      <button onClick={()=> setReadMore(!readMore)}>
      {readMore ? "See Less" : "Read More"}
      </button>
      </p>
      <button className="btn btn-primary delete-btn" onClick={()=>removeTour(id)}>remove tour from list</button>
      </div>
  </div>
 );
};

export default Tour;
