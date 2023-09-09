import { productresListType } from "./mockproduct";

const fetchProduct = async () => {    
    const myres = await fetch('http://localhost:3200/products');
     const data : productresListType = await myres.json();
     if (myres.status >= 400) {
        throw new Error('Error occured!');
    }
    //console.log(data);
    
    return data.products;
};


export {fetchProduct};