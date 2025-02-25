import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../assets/css/main.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const path = location.pathname;
    let breadCrumbsData = [{ label: "Home", path: "/" }];

    // Dynamically add breadcrumbs based on the path
    if (path === "/contact") {
      breadCrumbsData.push({ label: "Contact", path: "/contact" });
    } else if (path === "/deals") {
      breadCrumbsData.push({ label: "Daily Deals", path: "/deals" });
    } else if (path === "/electronics") {
      breadCrumbsData.push({ label: "Electronics", path: "/electronics" });
    } else if (path === "/sports") {
      breadCrumbsData.push({ label: "Sports", path: "/sports" });
    } else if (path === "/home&kitchen") {
      breadCrumbsData.push({ label: "Home & Kitchen", path: "/home&kitchen" });
    }

    setBreadcrumbs(breadCrumbsData);
  }, [location]);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          <Link to={breadcrumb.path} className="breadcrumb-link">
            {breadcrumb.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className="breadcrumb-separator"> &gt; </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
