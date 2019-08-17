import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  const { openBasket, basketItems } = props;
  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav_logo">
          Logo
        </a>
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
          <li className="nav_link-basket">
            <a href="#" className="nav_link" onClick={openBasket}>
              Basket <span>{basketItems.reduce((accum, curr) => {
                  return accum + curr.count;
              },0)}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapState = state => {
  return {
    basketItems: state.basketItems
  };
};

const mapDispatch = dispatch => {
  return {
    openBasket: () => dispatch({ type: "OPEN_BASKET" })
  };
};

export default connect(
  mapState,
  mapDispatch
)(Header);
