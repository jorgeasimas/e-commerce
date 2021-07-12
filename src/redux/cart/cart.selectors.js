import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],//which is the state.cart
    cart => cart.cartItems 
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden

)

export const selectCarItemsSum = createSelector(
    [selectCartItems],//pulling from cartItems because it's quantity is a property of the Array
    cartItems => 
        cartItems.reduce((total, currentValue) => 
        total = total + currentValue.quantity,0)
        
)

export const selectCarItemsTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((total, currentValue) => 
        total = total + currentValue.quantity*currentValue.price,0)
)    