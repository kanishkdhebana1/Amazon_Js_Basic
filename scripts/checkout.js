import { renderOrderSummary } from "./checkout/orderSummary.js" ;
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import '../data/cart-class.js'
import '../data/backend-practice.js'
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js" ;


async function loadProducts() {
    await loadProductsFetch() ;
     
    const val = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3') ;
        }) ;
    })

    console.log(val) ;

    renderOrderSummary() ;
    renderPaymentSummary() ;
}

loadProducts() ;

// Promise.all([
//     new Promise((resolve) => {
//         loadProductsFetch(() => {
//             resolve() ;
//         }) ;
//     }),

//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve() ;
//         }) ;
//     })

// ]).then(() => {
//     renderOrderSummary() ;
//     renderPaymentSummary() ;
// }) ;

