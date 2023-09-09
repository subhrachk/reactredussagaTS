import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useAppDispatch } from '../hooks';
import { productrestype } from './ProductMain';
import { createProduct } from './productSlice';

const ProductCreate = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const dispatch = useAppDispatch();

    const createNewProduct = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name + ':' + price + ':' + image);
        const newProd : productrestype = {name: name, price : price, image: image, id : Math.floor(Math.random()*100000000000).toString()};
        dispatch(createProduct(newProd));        
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'price':
                setPrice(+e.target.value);
                break;
            case 'image':
                setImage(e.target.value);
                break;
            default:
                return;
        }
    }

    return (
        <div>
            <h2>Product Create</h2>
            <form className="container" onSubmit={(e)=>createNewProduct(e)} >
                <div className="mb-3 form-group">
                    <label className="form-label">Name</label>
                    <input className='form-control' type="text" name="name" onChange={(e) => onChange(e)} value={name}/>
                </div>
                <div className="mb-3 form-group">
                    <label className="form-label">Price</label>
                    <input className='form-control' type="number" name="price" onChange={(e) => onChange(e)} value={price}/>
                </div>
                <div className="mb-3 form-group">
                    <label className="form-label">Image</label>
                    <input className='form-control' type="file" id="file" name="image" onChange={(e) => onChange(e)} value={image}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}


export default connect()(ProductCreate);
