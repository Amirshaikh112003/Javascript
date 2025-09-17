// let h1= document.querySelector("h1");
// console.dir(h1);
// h1.innerHTML = "h";
// // let a = document.querySelector("a");
// // a.href = "https://www.google.com";
//
// //setattribute
// let a  = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");
//getAttribute
// console.log(a.getAttribute("href"));
// removeAttribute
// a.removeAttribute("href");

//js se css badalna

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "orange";

// Event and Event listeners

//input eventListener
// let inp = document.querySelector("input");
// inp.addEventListener("input",(e)=>{
//     if(e.data !== null) {
//         console.log(e.data);
//     }
// });

//click event

// let click = document.querySelector("div");
// function a(){
//     click.style.color = "red";
// }
// click.addEventListener("click",a);

//change event

// let sel = document.querySelector('select');
// let dev = document.querySelector('#device');
// sel.addEventListener('change', e => {
//     dev.textContent = `${e.target.value} selected`;
// });

//keydown

// let h1 = document.querySelector('h1');
// window.addEventListener('keydown', (e) => {
//     if(e.key === " ") {
//         h1.textContent = "SPC"
//     }
//     else{
//         h1.textContent = e.key;
//     }
//});

//mouseover
// let abcd = document.querySelector('#abcd');
// abcd.addEventListener('mouseover',()=>{
//     abcd.style.backgroundColor="orange";
// });

//mouseout
// abcd.addEventListener('mouseout',()=>{
//     abcd.style.backgroundColor="red";
// });

//mousemove
// abcd = document.querySelector("#abcd");
// window.addEventListener('mousemove', (dets) => {
//     console.log(dets);
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// })

//event bubbling

// let ul = document.querySelector("ul");
// ul.addEventListener("click", (e) => {
//     e.target.classList.toggle("lt");
// });

let inp = document.querySelector("input");
let spn = document.querySelector("span");
inp.addEventListener("input",()=>{
    let left = 20 - inp.value.length;
    if(left<0){
        spn.textContent = left;
        spn.style.color = "red";
    } else{
        spn.textContent = left;
        spn.style.color = "black";
    }
});
