import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export const FooterComponent = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">
          © {getCurrentYear()} UCE, Inc
        </p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <button href="#" className="nav-link px-2 text-muted">
              <FontAwesomeIcon icon={faBook}/> Books List
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FooterComponent;
