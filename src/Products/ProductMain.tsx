import React from 'react'
import ProductList from './ProductList'
//import { initproductresponse } from './mockproduct';
import ProductCreate from './ProductCreate';

export type productrestype = {
    "name": string,
    "price": number,
    "image": string,
    "id": string,
    // "request": {
    //         "method": string,
    //         "url": string
    // }
};


export const ProductMain = () => {

//const productresponse = initproductresponse;

return (
    <div>
        <ProductCreate />
        <hr />
        <ProductList />
    </div>
  )
}
