import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { decreaseItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []

};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{ 
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{ 
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //it receives the original Array 
                //plus the new item which is added by the payload in cart.action
            };
        case CartActionTypes.REMOVE_ITEM:
            return{ 
                ...state,
                //cartItems: [...state.cartItems.slice(0, action.payload),
                //   ...state.cartItems.slice(action.payload + 1, state.cartItems.length)]
                //OR using "filter"
                cartItems: state.cartItems.filter(//it will clone old array compare each element id with
                    //element id passed in payload and create new array without the payload id element
                    cartItems => cartItems.id !== action.payload.id)
            };
            case CartActionTypes.DECREASE_ITEM:
                return{ 
                    ...state,
                    cartItems: decreaseItemToCart(state.cartItems, action.payload)                   
                };
        default:
            return state;
}
}

export default cartReducer;