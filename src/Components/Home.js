import React from "react";
import "./Home.css"
import img from "./profile.png"
function Home(){
    return(
 <div className="card my-3 container" id="home">
    <div>
    <h1>Purvi Saini</h1>
        <p className="card-text">
          I am a Student, Coder, Developer !!!
        </p>
        <button className="btn">Download Resume</button>
    </div>
    <div className="col-md-4 img-container p-4">
    <div className="bg"></div>
      <img src={img} className="img-fluid" alt="profile image" />
    </div>
</div>

    );
}

export default Home;