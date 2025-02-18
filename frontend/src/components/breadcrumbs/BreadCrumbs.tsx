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
    } else if (path === "/services") {
      breadCrumbsData.push({ label: "Services", path: "/services" });
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
          {index < breadcrumbs.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
