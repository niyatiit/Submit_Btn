const btn = document.querySelector("button")
const box = document.querySelector('#box')

btn.addEventListener('click',function(){
    box.style.display = 'block';
})

const sub_btn = document.querySelector('.sbmit')
const fir_input = document.querySelector('#first_input')
const sec_input = document.querySelector('#second_input')
const h2 = document.querySelector("h2");

sub_btn.addEventListener("click",function(){
    h2.style.border = "2px solid black";
    h2.style.width = "50vw";
    h2.style.backgroundColor = "#696C9F";
    h2.innerHTML  = fir_input.value + " " +  sec_input.value;
    
})