import React from "react";
import "../../assets/css/main.css";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";

function Contact() {
  return (
    <>
      <Breadcrumbs />
      <div className="contact">
        <div className="google-map">
          <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kuliyapitiya&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
