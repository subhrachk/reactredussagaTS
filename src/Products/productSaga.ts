import { put, call, take } from 'redux-saga/effects';
import {  producttemprestype } from './mockproduct';
import { fetchProduct } from './productapi';
import { selectAllProduct } from './productSlice';

 function* HandleProductLoad() 
    {
        const data : producttemprestype[] = yield call(()=> fetchProduct());
        yield console.log(data);
        yield put(selectAllProduct(data));
    }

const WatchSelectProduct = function* ()
    {
        yield take('products/loadProduct');
        yield call(HandleProductLoad);
    }

export default WatchSelectProduct;