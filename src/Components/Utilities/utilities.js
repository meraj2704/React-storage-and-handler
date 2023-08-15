const add = (first, second) =>{
    return first + second;
};
const multifly =(first, second)=>{
    return first*second;
}
const sub = (first,second) =>{
    return first -second;
}
const divide =(first,second) =>{
    return first/second;
}
const showProfile= id =>{
    const quantity = localStorage.getItem(id);
    if(quantity)
    {
        const newShow = parseInt(quantity)+1;
        localStorage.setItem(id, newShow);
        alert('Item add');
    }
    else{
        localStorage.setItem(id,1);
        alert('New item add');
    }
}
const addToCart = id =>{
    let shopingCart;
    //get store cart from storage
    const storeCart = localStorage.getItem('shoping-cart');
    //strirng parse to object
    if(storeCart)
    {
        shopingCart = JSON.parse(storeCart);
    }
    else{
        shopingCart = {};
    }
    //add quantity
    const quan = shopingCart[id];
    if(quan)
    {
        const newQuan = quan + 1;
        shopingCart[id] = newQuan;
    }
    else
    {
        shopingCart[id] = 1;
    }
    //convert object to string and store in local storage
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}
const removeFromDb= id =>
{
    const storeCart = localStorage.getItem('shoping-cart');
    if(storeCart)
    {
        const shopingCart = JSON.parse(storeCart);
        if(id in shopingCart){
            delete shopingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
        }
    }
}
export {
    add,
    multifly,
    sub, divide,
    showProfile,
    addToCart,
    removeFromDb
};