import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    qty: 1,
    price: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.product.push(action.payload);
      state.qty++;
      state.price += action.payload.price * action.payload.count;
    },
    increase: (state, action) => {
      let findProduct = state.find((e) => e._id === action.payload._id);
      if (findProduct) {
        findProduct.qty += 1;
      } else {
        let clone = { qty: 1 };
      }
    },
    decrease: (state, action) => {
      let findProduct = state.find((e) => e._id === action.payload._id);
      if (findProduct) {
        if (findProduct.qty > 1) {
          findProduct.qty -= 1;
        } else {
          return state.filter((e) => e._id !== action.payload._id);
        }
      }
    },
  },
});

export const { addToCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
