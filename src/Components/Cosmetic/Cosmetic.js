import React from 'react';
import './Cosmetic.css'
import { addToCart, removeFromDb } from '../Utilities/utilities';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    const cart = id =>{
        addToCart(id);
    }
    const removeCart = id =>{
        removeFromDb(id);
    }
    return (
        <div className='cos-div'>
            
            <p>Name : <b>{name}</b></p>
            <p>Price : <b>{price}</b> </p>
            <button onClick={()=>cart(id)}>ADD To Cart</button>
            <button onClick={()=>removeCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;