//select the heading of the page by the ID and change its text
// let heading = document.querySelector("#heading");
// heading.textContent = "Desktop";

// select all li elements and print them using a for loop
// let list = document.querySelectorAll("li");
// list.forEach((element) => {
//     console.log(element.textContent)
// })

//select a paragraph and replace its content
// let para = document.querySelector("p");
// para.textContent = "webstorm";

//how to get an src of an image
// let image = document.querySelector('img');
// console.log(image.getAttribute("src"));

//select a link and update its href

// let link = document.querySelector('a');
// link.setAttribute("href", "https://www.google.com");

//add a title attribute to a div dynamically

// let a = document.querySelector("div");
// a.setAttribute("title", "yes");

//remove a disabled attribute of a button
// btn = document.querySelector("button");
// btn.removeAttribute("disabled");

//Dynamic DOM Manipulation

// what does create element do
// let h1 = document.createElement("h1");
// console.dir("h1");

//create a new list item and add it to the end of the ul
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "new task";
// ul.appendChild(li);

//create a new img element with a placeholder and add it to the top of  the div

// let img = document.createElement("img");
// img.setAttribute("src", "https://images.unsplash.com/photo-1754808398672-8b6694a2ea60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8");
// img.classList.add("placeholder");
// document.querySelector("div").prepend(img);

//select the first item in list and delete it form the dom
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

//add a highlight class to every even list item
// let ul = document.querySelectorAll("ul li:nth-child(2n)");
// ul.forEach((item) => {
//     item.classList.add("highlight");
// })

