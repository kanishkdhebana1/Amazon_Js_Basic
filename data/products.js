import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id == productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct ;
}

class Product {
  id ;
  image ;
  name ;
  rating ;
  priceCents ;
  keywords ;

  constructor(productDetails) {
    this.id = productDetails.id ;
    this.image = productDetails.image ;
    this.name = productDetails.name ;
    this.rating = productDetails.rating ;
    this.priceCents = productDetails.priceCents ;
    this.keywords = productDetails.keywords ;
  }

  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png` ;
  }


  getPrice() {
    return `$${formatCurrency(this.priceCents)}` ;
  }

  extraInfoHTML() {
    return "" ;
  }
}


class Clothing extends Product {
  sizeChartLink ;

  constructor(productDetails) {
    super(productDetails) ;
    this.sizeChartLink = productDetails.sizeChartLink ;
  }

  extraInfoHTML() {
    return `
      <a href = "${this.sizeChartLink}" target = "_blank"> 
        Size Chart
      </a>
    ` ;
  }
}

export let products = [] ;

export function loadProductsFetch() {
  const promise = fetch(
    'https://supersimplebackend.dev/products'

  ).then((response) => response.json())
  .then((productsDetails) => {
      products = productsDetails.map((productDetails) => {
        if (productDetails.type === 'clothing') {
          return new Clothing(productDetails) ;
        } 

        return new Product(productDetails) ;
      }) ; 

      console.log('load products')

    }) ;

    return promise ;
}

