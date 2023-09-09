import { productrestype } from "./ProductMain";

export type producttemprestype = {
    "name": string,
    "price": number,
    "image": string,
    "id": string,
    "request": {
            "method": string,
            "url": string
    }
};

export type productresListType = {
    count: number,
    products: producttemprestype[]
};

export async function initproductresponse() {   
    const myres = await fetch('http://localhost:3200/products');
     const data : productresListType = await myres.json();
     if (myres.status >= 400) {
        throw new Error('Error occured!');
    }
    
    return data;
};




// export const initproductresponse : { count: number, products : productrestype[]} = {
//     "count": 5,
//     "products": [
//         {
//             "name": "Test2",
//             "price": 102,
//             "image": "uploads\\20220231679339190482_1.jpg",
//             "id": "6415ec89316f853827945598",
//             // "request": {
//             //     "method": "GET",
//             //     "url": "http://localhost:3000/products/6415ec89316f853827945598"
//             // }
//         },
//         {
//             "name": "Test3",
//             "price": 103,
//             "image": "uploads\\18220231679158417410applewatch-wd-1200x600.jpg",
//             "id": "6415ec91316f85382794559a",
//             // "request": {
//             //     "method": "GET",
//             //     "url": "http://localhost:3000/products/6415ec91316f85382794559a"
//             // }
//         },
//         {
//             "name": "mortgage",
//             "price": 12,
//             "image": "uploads\\20220231679356782309_4.jpg",
//             "id": "6417154982f6ac1bd5fb0bd7",
//             // "request": {
//             //     "method": "GET",
//             //     "url": "http://localhost:3000/products/6417154982f6ac1bd5fb0bd7"
//             // }
//         },
//         {
//             "name": "test12",
//             "price": 12,
//             "image": "uploads\\20220231679336677268_10.jpg",
//             "id": "6417228382f6ac1bd5fb0be1",
//             // "request": {
//             //     "method": "GET",
//             //     "url": "http://localhost:3000/products/6417228382f6ac1bd5fb0be1"
//             // }
//         },
//         {
//             "name": "test90",
//             "price": 10,
//             "image": "uploads\\20220231679318613561_3.jpg",
//             "id": "64172319bdc97a1eef72704b",
//             // "request": {
//             //     "method": "GET",
//             //     "url": "http://localhost:3000/products/64172319bdc97a1eef72704b"
//             // }
//         }
//     ]
// };