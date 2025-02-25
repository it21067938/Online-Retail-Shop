import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/BreadCrumbs";

function Deals() {
  return (
    <div>
      <Breadcrumbs />
      <div className="deals">
        <div className="deals-category">
          <select className="deals-dropdown">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="home&kitchen">Home & Kitchen</option>
            <option value="sports">Sports</option>
          </select>
          <p>Top Brands</p>
          <p>Weekly Deals</p>
        </div>
      </div>
    </div>
  );
}

export default Deals;
