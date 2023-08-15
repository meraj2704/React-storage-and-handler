import React from 'react';
import './Cosmetic.css'
import { addToCart } from '../Utilities/utilities';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    const cart = id =>{
        addToCart(id);
    }
    return (
        <div className='cos-div'>
            
            <p>Name : <b>{name}</b></p>
            <p>Price : <b>{price}</b> </p>
            <button onClick={()=>cart(id)}>ADD To Cart</button>
        </div>
    );
};

export default Cosmetic;