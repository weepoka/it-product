import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartQuantity: 0,
    cartTotal: 0,
  },

  reducers: {
    cleatCart: (state) => {
      state.cartItems = [];
    },

    add(state, action) {
      //*Redux :
      // return [...state, action.payload];
      state.cartItems.push(action.payload);
      state.cartQuantity += 1;
      state.cartTotal += Number(
        action.payload.oldPrice * action.payload.pdCount
      );
      toast.success(`${action.payload.name} Added to cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // console.log("Action", action);
    },

    remove(state, action) {
      // const itemId = action.payload;
      const itemName = action.payload.name;
      const nextCartIem = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = nextCartIem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${itemName} removed from cart`, {
        position: "bottom-left",
      });
    },

    // increase(state,action) {
    //     return state.filter((item) => item.id === action.payload ? (item.qty = action.payload):item.qty);
    // },
  },
});

export const { cleatCart, add, remove } = cartSlice.actions;

export default cartSlice.reducer;
