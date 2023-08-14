import React from 'react';
import { add } from '../Utilities/utilities';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const first = 20;
    const second = 20;
    const total = add(first,second);
    const cosmetics = [
        {id:'1', name:'Oil', price:'200'},
        {id:'2', name:'Powder', price:'300'},
        {id:'3', name:'Cream', price:'400'},
        {id:'4', name:'Clips', price:'500'},
        {id:'5', name:'Pin', price:'600'}
    ]
    return (
        <div>
            <h1>Cosmetics</h1>
            <p>Total : {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                key ={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;