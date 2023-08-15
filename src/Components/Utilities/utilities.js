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
export {add, multifly, sub, divide, showProfile};