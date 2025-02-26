import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";
import assets from "./../../assets/img/assets";
import { Clock, BadgeCheck  } from "lucide-react";

function Deals() {
  return (
    <>
      <Breadcrumbs />
      <div className="deals">
        <div className="deals-header">
          <h1 className="deals-heading">🔥 Today's Top Deals</h1>
          <br />
          <div className="deals-category">
            <select className="deals-dropdown">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="home&kitchen">Home & Kitchen</option>
              <option value="sports">Sports</option>
            </select>
            <div className="deals-links">
              <p>Top Brands</p>
              <p>Weekly Deals</p>
            </div>
          </div>
        </div>

        <div className="deals-items-section">
          <div className="deals-items">
            {[...Array(15)].map((_, index) => (
              <div className="deals-card" key={index}>
                <div className="ribbon">
                  <Clock className="clock" size={15} strokeWidth={2} />
                </div>
                <img src={assets.logo} alt="Product" />
                <div className="deals-card-content">
                  <h2>Apple iPhone 13 128GB Unlocked - Excellent</h2>
                  <h1>$324.99</h1>
                  <br />
                  <div className="deals-card-badge">
                    <BadgeCheck size={13} strokeWidth={3} color="green"/>
                  <p>Prime Picks Refurbished</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Deals;
