export let cart ;

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart')) ;

    if (!cart) {
        cart = [] ;
    }
}

loadFromStorage() ;


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart)) ;
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem ;
        }
    })

    if (matchingItem) {
        matchingItem.quantity += 1 ;
    }

    else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        })
    }

    saveToStorage() ;
}


export function removeFromCart(productId) {
    const newCart = [] ;

    cart.forEach((cartItem) => {
        if (cartItem.productId != productId) {
            newCart.push(cartItem) ;
        }
    }) ;

    cart = newCart ;

    saveToStorage() ;
} 


export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem ;
        }
    })

    matchingItem.deliveryOptionId = deliveryOptionId ;
    saveToStorage() ;
}


    export function loadCart(fun) {
        const xhr = new XMLHttpRequest() ;

        xhr.addEventListener('load', () => {
            console.log(xhr.response) ;
            fun() ;
        }) ;

        xhr.open('GET', 'https://supersimplebackend.dev/cart') ;
        xhr.send() ;
    }