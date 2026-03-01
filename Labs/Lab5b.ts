interface Area{
    add(a:number,b:number):number
    muitiply(a:number,b:number):number
}
let calculation:Area={
    add:function(a:number,b:number):number{
        return a+b
    },
    muitiply:function(a:number,b:number):number{
        return a*b
    }
}
console.log(calculation.add(3,4))
console.log(calculation.muitiply(3,4))