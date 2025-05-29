import {cart, addToCart, loadFromLocalStorage} from '../../data/cart.js'

describe('test suite: addToCart', () => {
    it('adds new product to cart', () => {
        spyOn(localStorage, 'setItem') ;

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]) ;
        }) ;

        loadFromLocalStorage() ;

        console.log(localStorage.getItem('cart'))

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6') ;
        expect(cart.length).toEqual(1) ;
        expect(localStorage.setItem).toHaveBeenCalledTimes(1) ;
    }) ;

}) ;
