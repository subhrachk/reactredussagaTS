import React, { useEffect } from 'react';
import { productrestype } from './ProductMain';
import {  useSelector } from 'react-redux';
import { loadProduct, selectProducts } from './productSlice';
import { useAppDispatch, useAppSelector } from '../hooks';


export type productListType = {
    count: number,
    products: productrestype[]
};

const ProductList = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadProduct());
    },[]);

    const products = useAppSelector(selectProducts);
    return (
        <div>
            <h1>ProductList</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                {/* <td>
                    <a routerLink='edit/{{product.id}}' class="btn btn-small btn-success"><i class="fas fa-edit"></i></a>
                    <a routerLink='delete/{{product.id}}' class="btn btn-small btn-danger"><i class="fas fa-trash"></i></a>
                </td> */}
                            </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;
