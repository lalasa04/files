type Data={
    lenght:number,
    breadth:number
}
function area(a:Data){
    return a.lenght*a.breadth
}
console.log(area({lenght:2,breadth:3}))