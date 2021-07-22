import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCarItemsTotal } from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import Stripe from "../../components/stripe/stripe.component";

import './checkout.styles.scss';

const CheckOutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
        </div>
        {
           cartItems.map(cartItems => (
            <CheckOutItem key={cartItems.id} items={cartItems} />
        ))   
        }
        <div className='total'> TOTAL: ${totalPrice}</div>
        <div className='test-warning'>
            For the payment test, use the following credit card information:
            card numer: 4242 4242 4242 4242 Expiration date: 01/22 and CVV: 123
        </div>
        <Stripe price={totalPrice} />

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCarItemsTotal
});

export default connect(mapStateToProps)(CheckOutPage);