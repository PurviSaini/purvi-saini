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
                <div className="description">link</div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-linkedin" /> Linked in Id: </div>
                <div className="description">Delhi, India</div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-snowflake-o" /> Website: </div>
                <div className="description">Delhi, India</div>
            </div>

            <div className="container-fluid  d-flex justify-content-between wrapper">
                <div className="social"><i className="fa fa-credit-card" /> Email: </div>
                <div className="description">dummy123@gmail.com</div>
            </div>

        </div>
    );

}

export default Contact;