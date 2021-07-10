import { CartActionTypes } from "./cart.types";

export const setCartHidden = () => ({ //this is the Action object inside the Action Creator (function that returns the object)
    type: CartActionTypes.TOGGLE_CART_HIDDEN,

});

export const addItems = (item) => ({ //this is the Action object inside the Action Creator (function that returns the object)
    type: CartActionTypes.ADD_ITEM,
    payload: item

});