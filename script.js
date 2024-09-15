let countervalue=document.querySelector(".countervalue")
let increment=document.querySelector(".inc")
let decrement=document.querySelector(".dec")
let reset=document.querySelector(".res")

initial_value=countervalue.innerText

increment.addEventListener("click",()=>{
    countervalue.innerText++
})
decrement.addEventListener("click",()=>{
   if(countervalue.innerText>0)
         countervalue.innerText--
})

reset.addEventListener("click",()=>{
    countervalue.innerText=initial_value
})
