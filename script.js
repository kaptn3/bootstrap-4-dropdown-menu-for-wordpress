// set link

const parent = document.querySelectorAll('.menu-item-has-children > a');

for (let i = 0; i < parent.length; i++) {
	parent[i].classList.add('dropdown-toggle');
	parent[i].id = "dropdown" + i;
	parent[i].setAttribute('data-toggle', 'dropdown');
	parent[i].setAttribute('aria-haspopup', 'true');
	parent[i].setAttribute('aria-expanded', 'false');
}

// set dropdown list

const childs = document.querySelectorAll('.sub-menu > li > a');

for (let i = 0; i < childs.length; i++) {
	childs[i].classList.add('dropdown-item');	
}

const ulli = document.querySelectorAll('.sub-menu');
const par = document.querySelectorAll('.menu-item-has-children');
let c = 0;
for (let i = 0; i < ulli.length; i++) {
	let div = document.createElement("div");
	par[i].appendChild(div);
	div.classList.add('dropdown-menu');
	div.setAttribute('aria-labelledby', 'dropdown' + i);

	//const child = document.querySelectorAll('.sub-menu > li > a');
	for (let k = 0; k < ulli[i].children.length; k++) {
		//console.log('номер ' + i)
		//console.log(childs[c]);
		div.appendChild(childs[c]);
		c++;
	}

	ulli[i].remove();

	//let parent = ulli[i].parentNode;
	//div.appendChild(ulli[i]);
	//parent.insertBefore(div, ulli[i]);
}