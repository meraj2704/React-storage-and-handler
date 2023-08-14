import React from 'react';
import './Users.css'

const Users = (props) => {
    const {name,balance,gender,age,company,email}=props.user
    return (
        <div className='user-div'>
            <p>Name : <b>{name}</b> </p>
            <p>Balance : <b>{balance}</b> </p>
            <p>Gender : <b>{gender}</b> </p>
            <p>Age : <b>{age}</b> </p>
            <p>Email : <b>{company}</b> </p>
            <p>Company : <b>{email}</b> </p>
            
        </div>
    );
};

export default Users;