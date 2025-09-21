import type { Product } from "../../component/interface/interface";

type Action = {
  type: string;
  payload: any;
};

const initialState = {
  cart: [
    {
      id: 4,
      title: "Cake",
      price: 30,
      quantity: 5,
      stock: 10,
      image: "",
      content: "",
    },
    {
      id: 2,
      title: "Hamburger",
      price: 32,
      quantity: 6,
      stock: 32,
      image: "",
      content: "",
    },
    {
      id: 3,
      title: "Bread",
      price: 32,
      quantity: 7,
      stock: 12,
      image: "",
      content: "",
    },
    {
      id: 1,
      title: "Pizza",
      price: 32,
      quantity: 5,
      stock: 7,
      image: "",
      content: "",
    },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const newState = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { cart: newState };
    }

    case "DECREMENT": {
      const newState = state.cart.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { cart: newState };
    }
    case "ADD_TO_CART": {
      const p: Product = action.payload;
      const exist = state.cart.find((i) => i.id === p.id);

      if (exist) {
        const newQty = (exist.quantity || 0) + 1;
        if (newQty > (exist.stock || 0)) {
          return {
            ...state,
            message: "Số lượng sản phẩm vượt quá số lượng trong kho",
          };
        }
        const cart = state.cart.map((i) =>
          i.id === p.id ? { ...i, quantity: newQty } : i
        );
        return { cart, message: null };
      } else {
        if (1 > (p.stock || 0)) {
          return {
            ...state,
            message: "Số lượng sản phẩm vượt quá số lượng trong kho",
          };
        }
        const cart = [...state.cart, { ...p, quantity: 1 }];
        return { cart, message: null };
      }
    }
    case "DELETE_FROM_CART": {
      const newState = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { cart: newState };
    }

    default:
      return state;
  }
};
