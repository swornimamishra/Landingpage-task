import React from 'react'
import '../App.css';

function Navbar() {
  return (
    <div className="navbar navbar-light bg-light static-top" >
        <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary text-align-center" style={{height: "52px",width:"86px", textAlign: "center",paddingTop:"1rem",paddingRight:"0.75rem"}} href="#signup">Sign Up</a>
            </div>
    </div>
  )
}

export default Navbar