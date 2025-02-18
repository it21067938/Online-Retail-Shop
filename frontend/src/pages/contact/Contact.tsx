import React from "react";
import "../../assets/css/main.css";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { CiMail, CiLocationOn, CiPhone } from "react-icons/ci";

function Contact() {
  return (
    <>
      <Breadcrumbs />
      <div className="contact">
        <div className="google-map">
          <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kuliyapitiya&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-container-left">
          <h2>Get in touch</h2>
          <p>
            We are a leading brand in sports equipment, Electronic equipment and
            Home & Kitchen equipment providing top-quality products worldwide.
          </p>
          <div className="contact-location">
            <CiLocationOn style={{ color: "#ffcc00", fontSize: "2rem" }} />
            <div>
              <h3>Location :</h3>
              <p>123 Main Street, Anytown, CA 12345</p>
              <hr />
            </div>
          </div>

          <div className="contact-location">
            <CiMail style={{ color: "#ffcc00", fontSize: "2rem" }} />
            <div>
              <h3>Email :</h3>
              <p>hello@primepick.com</p>
              <hr />
            </div>
          </div>

          <div className="contact-location">
            <CiPhone style={{ color: "#ffcc00", fontSize: "2rem" }} />
            <div>
              <h3>Call :</h3>
              <p>+94 012 345 6789</p>
              <hr />
            </div>
          </div>
        </div>

        <div className="contact-container-right">
          <div>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
    <br/>
          <input className="message-subject" type="text" placeholder="Subject" />
          <br /><br/>
          <textarea  className="message-subject" placeholder="Message" /><br/>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
