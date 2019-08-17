import { createStore } from "redux";

const initialState = {
  products: [],
  basketItems: [],
  isShowBasket: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCST":
      return {
        ...state,
        products: action.products
      };
    case "REMOVE_ITEM":
      let basketItem = state.basketItems.find(product => {
        return product === action.item;
      });
      if (basketItem.count === 1) {
        return {
          ...state,
          basketItems: state.basketItems.filter(item => {
            return item !== basketItem;
          })
        };
      }
       basketItem.count -= 1;
      return {
          ...state,
          basketItems : [...state.basketItems]
      }
    case "ADD_TO_BASKET":
      let itemIndex = state.basketItems.findIndex(
        product => product === action.product
      );
      if (itemIndex < 0) {
        action.product.count = 1;
        return {
          ...state,
          basketItems: [...state.basketItems, action.product]
        };
      }
      state.basketItems[itemIndex].count += 1;
      return {
        ...state,
        basketItems: [...state.basketItems]
      };

    case "OPEN_BASKET":
      return {
        ...state,
        isShowBasket: true
      };
    case "CLOSE_BASKET":
      return {
        ...state,
        isShowBasket: false
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
