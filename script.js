// set link

const linkItemHasChildren = document.querySelectorAll('.menu-item-has-children > a');

for (let i = 0; i < linkItemHasChildren.length; i++) {
	linkItemHasChildren[i].classList.add('dropdown-toggle');
	linkItemHasChildren[i].id = "dropdown" + i;
	linkItemHasChildren[i].setAttribute('data-toggle', 'dropdown');
	linkItemHasChildren[i].setAttribute('aria-haspopup', 'true');
	linkItemHasChildren[i].setAttribute('aria-expanded', 'false');
}

// set dropdown list

const linkSubMenu = document.querySelectorAll('.sub-menu > li > a');

for (let i = 0; i < linkSubMenu.length; i++) {
	linkSubMenu[i].classList.add('dropdown-item');	
}

const subMenu = document.querySelectorAll('.sub-menu');
const temHasChildren = document.querySelectorAll('.menu-item-has-children');
let c = 0;
for (let i = 0; i < subMenu.length; i++) {
	let div = document.createElement("div");
	temHasChildren[i].appendChild(div);
	div.classList.add('dropdown-menu');
	div.setAttribute('aria-labelledby', 'dropdown' + i);

	//const child = document.querySelectorAll('.sub-menu > li > a');
	for (let k = 0; k < subMenu[i].children.length; k++) {
		//console.log('номер ' + i)
		//console.log(linkSubMenu[c]);
		div.appendChild(linkSubMenu[c]);
		c++;
	}

	subMenu[i].remove();

	//let parent = subMenu[i].parentNode;
	//div.appendChild(subMenu[i]);
	//parent.insertBefore(div, subMenu[i]);
}