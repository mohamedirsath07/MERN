const mul = (a,b)=> a*b;
console.log(mul(3,8));

const square= d => {
    return mul(d,d);
}
console.log(square(3));

const print = m =>{
    return square(m);
}
console.log(print(2));

