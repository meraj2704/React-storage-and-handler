import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;
    return (
        <div className='cos-div'>
            
            <p>Name : <b>{name}</b></p>
            <p>Price : <b>{price}</b> </p>
        </div>
    );
};

export default Cosmetic;