import React from 'react';
const Card = (props) => {
    const myStyle ={
      width: "18rem",
      margin: "40px"

    }
    console.log("in card");
    return(
    
      <div className="card" style= {myStyle}>
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">{props.blabel}</a>
    </div>
  </div>
    );
  }
export default Card;