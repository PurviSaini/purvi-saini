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
        <a href="https://drive.google.com/file/d/1Dc_2aZOHGjiLdv6mT2EAoQZZnWh-vK-X/view" target="_blank" rel="noreferrer" className="btn" download="Resume.pdf">
        Download Resume
        </a>

    </div>
    <div className="mx-5 col-md-4 img-container p-4">
    <div className="bg"></div>
      <img src={img} className="img-fluid" alt="profile" />
    </div>
</div>

    );
}

export default Home;