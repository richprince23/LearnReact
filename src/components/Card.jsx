import React from "react";
import pic from '../img/pic.jpg';
import  "../styles/App.css";

const Card = (props) => {
  console.log(props);
    return (
        <div className="card">
        <img src={pic} alt="Avatar" style={{ width: "100%" }}/>
        <div className="container">
          <h5><b>{ props.name}</b></h5>
          <p>{ props.title}</p>
          <p className="small text-muted">{props.children}</p>
          <button className="btn btn-danger" onClick={props.onDelete}>Delete</button>
        </div>
      </div> 
    )
}

export default Card;
