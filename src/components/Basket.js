import React from "react";
import { connect } from "react-redux";

const Basket = (props) => {
  const { basketItems, removeItem, closeBasket } = props;
  return (
    <div className="basket">
      <h3 className="basket_title">Basket</h3>
      <ul className="basket_item_list">
        {basketItems.map(item => {
          return (
            <li key={Math.random()} className="basket_item">
              <h4>{item.title}</h4>
              <span className="product_count">{item.count}</span>
              <button className="remove-item" onClick={() => {
                  removeItem(item)
              }}>-</button>
            </li>
          );
        })}
      </ul>
      <button className="close_basket" onClick={closeBasket}>X</button>
      <span className="amount_price"> Total :{basketItems.reduce((accum, curr) => {
        return accum + (+curr.price * curr.count);
      },0)}$</span>
    </div>
  );
};

const mapState = state => {
  return {
    isShowBasket: state.isShowBasket,
    basketItems: state.basketItems
  };
};

const mapDispatch = dispatch => {
  return {
    removeItem: item => dispatch({ type: "REMOVE_ITEM", item }),
    closeBasket: () => dispatch({ type: "CLOSE_BASKET" })
  };
};

export default connect(
  mapState,
  mapDispatch
)(Basket);
