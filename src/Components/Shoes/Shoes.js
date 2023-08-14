import React from 'react';
import { sub } from '../Utilities/utilities';

const Shoes = () => {
    const f = 45;
    const s = 20;
    const total = sub(f,s);
    return (
        <div>
            <h1>Shoes</h1>
            <p>Total : {total}</p>
        </div>
    );
};

export default Shoes;