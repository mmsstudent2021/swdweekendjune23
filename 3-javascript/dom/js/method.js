const heading = document.createElement("h1");
heading.innerText = "Min Ga Lar Par";

const para = document.createElement("p");

para.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quae, suscipit sapiente a beatae recusandae molestiae, culpa enim consequuntur dolor omnis dignissimos dolorum mollitia velit odit molestias. Dolor, at quod?";

const input = document.createElement("input");

const btn = document.createElement("button");
btn.innerText = "Add List";

const googleLink = document.createElement("a");
googleLink.href = "https://google.com";
googleLink.innerText = "Google";
// console.log(googleLink);

const img = document.createElement("img");
img.src = "./img/poe-mamhe-thar-2.jpg";
img.width = 100
// console.log(img);


const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "apple"
// ul.prepend(li1)

const li2 = document.createElement("li");
li2.innerText = "orange"
// ul.prepend(li2)

const li3 = document.createElement("li");
li3.innerText = "mango"
// ul.prepend(li3)

// console.log(ul);

const textOnly = document.createTextNode("san kyi tar");

const frg = document.createDocumentFragment();

frg.append(li1)
frg.append(li2)
frg.append(li3)

ul.append(frg)

console.dir(frg);


// document.body.append(img)
// document.body.append(heading);
// document.body.append(googleLink);
// document.body.append(para);
// document.body.append(input);
// document.body.append(btn);
// document.body.append(ul);

document.body.append(heading);
heading.before(img)
heading.after(googleLink)
googleLink.after(para)
para.after(ul)
document.body.append(textOnly)