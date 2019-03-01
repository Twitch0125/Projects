let list = document.getElementsByClassName('list')[0];
let items = list.innerHTML.split(",");
list.innerHTML += ` ${items.length} items`;

let divs = document.getElementsByTagName('div');