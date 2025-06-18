import { renderOrderSummary } from "./checkout/orderSummary.js" ;
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cart-class.js'
import '../data/backend-practice.js'
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js" ;

Promise.all([
    new Promise((resolve) => {
        loadProductsFetch(() => {
            resolve() ;
        }) ;
    }),

    new Promise((resolve) => {
        loadCart(() => {
            resolve() ;
        }) ;
    })

]).then(() => {
    renderOrderSummary() ;
    renderPaymentSummary() ;
}) ;

