import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
  const [val, dispatch] = useReducer(reducer, initialState);

  val.handleAddBtn = (item) => {
    dispatch({ type: 'ADD-ITEM', payload: item });
  };

  val.increment = (itemId) => {
    dispatch({ type: 'INCREMENT', payload: { id: itemId } });
  };

  val.decrement = (itemId) => {
    dispatch({ type: 'DECREMENT', payload: { id: itemId } });
  };

  val.handleBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  val.removeOrder = (itemId) => {
    dispatch({ type: 'REMOVE_ORDER', payload: { id: itemId } });
  };

  val.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  val.setLoad = () => {
    dispatch({ type: 'SET_LOAD', payload: true });
  };

  return <ShopContext.Provider value={val}>{children}</ShopContext.Provider>;
};
