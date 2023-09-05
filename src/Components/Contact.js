import "./Contact.css"
function Contact(){
    return(
        <div className=" my-1 contact container rounded d-flex justify-content-evenly flex-column align-items-end px-5" id="contact">

            <div className="container-fluid  d-flex justify-content-between wrapper">
                 <div className="social"> <i className="fa fa-map-marker" /> Based in: </div>
                <div className="description">Delhi, India</div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-github" /> Github username: </div>
                <div className="description">PurviSaini</div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-twitter" /> Twitter handle: </div>
                <div className="description">@PurviSaini45</div>
            </div>
    
            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-linkedin" />  Linked Id: </div>
                <div className="description"><a href="https://www.linkedin.com/in/purvi-saini-a30a23246" className="contact-links">Purvi Saini</a></div>
            </div>


            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-briefcase" />  Devpost: </div>
                <div className="description"><a href="https://devpost.com/purvisaini157" className="contact-links">Purvi Saini's Projects</a></div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-snowflake-o" /> Website: </div>
                <div className="description"><a href="#" className="contact-links">Portfolio Website</a></div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-credit-card" /> Email: </div>
                <div className="description">purvisaini157@gmail.com</div>
            </div>

        </div>
    );

}

export default Contact;