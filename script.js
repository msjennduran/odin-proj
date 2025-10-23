const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const pContent = document.createElement('p');
pContent.textContent = "Hey I'm red!"
pContent.style.color = 'red';

const h3Content = document.createElement('h3');
h3Content.textContent = "I'm blue h3!"
h3Content.style.color = 'blue';

const divContent = document.createElement('div');
const inDivElement = document.createElement('h1');
inDivElement.textContent = "I'm in a div";
const innerPElement = document.createElement('p');
innerPElement.textContent = "ME TOO";

divContent.appendChild(inDivElement);
divContent.appendChild(innerPElement);

container.appendChild(content);
container.appendChild(pContent);
container.appendChild(h3Content);
container.appendChild(divContent);