import React from 'react';
const Button = (prop) =>{
return(<button type="button" className="btn btn-success">{prop.intext?prop.intext:"Default"}</button>);   
}
export default Button;