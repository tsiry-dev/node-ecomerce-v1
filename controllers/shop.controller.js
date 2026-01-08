// import Product from "../models/product.js";

export const findAllProduct = (req, res, next) => {
    res.render('shop/product-list' , {
        prods: [],
        path: '/',
        docTitle: 'Products'
    });
}


export const getIndex = (req, res, next ) =>  {
    Product.fetchAll(products => {
        res.render('/' , {
            prods: products,
            path: '/',
            docTitle: 'Products'
        });
    });
}

export const getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        docTitle: 'Your cart'
    });
}


export const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        docTitle: 'Checkout'     
    });
}