import React from 'react';
import './Users.css'
import { showProfile } from '../Utilities/utilities';

const Users = (props) => {
    const {name,balance,gender,age,company,email,id}=props.user
    const profile = (id) =>{
        showProfile(id);
    }
    return (
        <div className='user-div'>
            <p>Name : <b>{name}</b> </p>
            <p>Balance : <b>{balance}</b> </p>
            <p>Gender : <b>{gender}</b> </p>
            <p>Age : <b>{age}</b> </p>
            <p>Email : <b>{company}</b> </p>
            <p>Company : <b>{email}</b> </p>
            <button onClick={()=>profile(id)}>Profile</button>
            
        </div>
    );
};

export default Users;