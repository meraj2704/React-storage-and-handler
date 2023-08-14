import React from 'react';
import { add } from '../Utilities/utilities';

const Cosmetics = () => {
    const first = 20;
    const second = 20;
    const total = add(first,second);
    return (
        <div>
            <h1>Cosmetics</h1>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cosmetics;