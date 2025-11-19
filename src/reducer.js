import { toast } from 'react-toastify';

export function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD-ITEM': {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      toast.success("Mahsulot savatchaga muvaffaqiyatli qo'shildi!");
      return {
        ...state,
        order: newOrder,
      };
    }
    case 'INCREMENT':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity + 1;
            toast.success("1 dona mahsulot qo'shildi");
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };
    case 'DECREMENT':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity <= 0 ? (item.quantity = 0) : item.quantity - 1;
            toast.error('1 dona mahsulot ayrildi!');

            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'REMOVE_ORDER':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    default:
      return state;
  }
}
