import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav">
        <ul className="nav_links">
          <li className="nav_link-aboutUs">
            <a href="#" className="nav_link">
              AboutUs
            </a>
          </li>
          <li className="nav_link-contacts">
            <a href="#" className="nav_link">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_numbers">
        <ul className="numbers_list">
          <li key="124">+ 380-433-662-75</li>
          <li key="2345">+ 380-433-662-75</li>
          <li key="123562">+ 380-433-662-75</li>
        </ul>
      </div>
      <div className="footer_emails">
        <ul className="emails_list">
          <li key="098">uss@gamil.com</li>
          <li key="0528">uss@gamil.com</li>
          <li key="964">uss@gamil.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
