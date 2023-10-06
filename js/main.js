let btn=document.getElementById("btn");
// console.log(btn);
let Cname="Robin";
let foodName="cheese barbeque pizza";
btn.addEventListener("click",()=>{
    // console.log("hai");
    order(Cname,foodName);
})
let orderMsg=(Cname,foodName)=>{
    setTimeout(()=>{
        document.write(`${Cname} order the ${foodName}<br><br>`);
        document.write(`Your order is Booked<br><br>`)
    },1000)
}
let order=(Cname,foodName)=>{
    orderMsg(Cname,foodName);
    setTimeout(()=>{
        document.write(`Successfully,Your order finished<br><br>`)
    },2000)
    setTimeout(()=>{
        document.write(`PizzaHub hubs prepares the ${foodName} and it's ready after a While <br><br>`)
    },5000)
    setTimeout(()=>{
        document.write(`${Cname} your ${foodName} is on the way...`);
    },8000)
}
