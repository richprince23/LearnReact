import React from "react";

const handleClick = () =>{
    alert('clicked');
}

const Button = (props) => (
    
    <button className="btn border" onClick={handleClick}>A button </button>

)

export default Button;