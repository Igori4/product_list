import React from "react";
import { connect } from "react-redux";
import products from "../producsService";
import Basket from "./Basket";

class Main extends React.Component {
  componentDidMount() {
    const { setProducts } = this.props;
    setProducts(products);
  }
  render() {
    const { products, isShowBasket, addToBasket } = this.props;
    return (
      <main className="main">
        {isShowBasket ? <Basket /> : null}
        <div className="products">
          <h2>Products</h2>
          <ul className="product_list">
            {products.map(product => {
              return (
                <li key={product.id} className="product">
                  <h3 className="product_title">{product.title}</h3>
                  <p className="product_description">{product.description}</p>
                  <span className="product_price">
                    Price: {product.price} $
                  </span>
                  <button
                    className="add_button"
                    onClick={() => addToBasket(product)}
                  >
                    Add to basket
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

const mapState = state => {
  return {
    products: state.products,
    isShowBasket: state.isShowBasket
  };
};

const mapDispatch = dispatch => {
  return {
    addToBasket: product => dispatch({ type: "ADD_TO_BASKET", product }),
    setProducts: products => dispatch({ type: "SET_PRODUCST", products })
  };
};

export default connect(
  mapState,
  mapDispatch
)(Main);
