export const addItemToCart = (cartItems, cartItemToAdd) => {//original array plus new item to add from payload
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);//it loops inside the 
    //the original array and if it doesn't find repeated item the const will be undefined and jumps to "return"
    
    if(existingCartItem) {//if the item already exist in the array 
        return  cartItems.map(cartItem => //it will loop inside the array to check for the repeated items
            //and increment the quantity. For not repeated item it will leave as it is
            cartItem.id === cartItemToAdd.id
            ?
            {...cartItem, quantity: cartItem.quantity + 1}//it will increment the quantity prop
            :
            cartItem //For not repeated item it will leave as it is
            )
     }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]//every time a new item is added wich is the same as
    //the item not found inside the array it will add the new item inside the array and create a prop quantity
    //prop will be set as 1 
}
export const decreaseItemToCart = (cartItems, cartItemToDec) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDec.id);
    
    if (existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDec.id);
        //cartItemToDec is the payload.id
        //cloning the cartItems array (old) comparing with payload and creating a new one excludind the payload
    }
    return cartItems.map(cartItem => 
            cartItem.id === cartItemToDec.id
            ? {...cartItem, quantity: cartItem.quantity -1}//it will increment the quantity prop
            : cartItem //For not repeated item it will leave as it is
        ); 
};