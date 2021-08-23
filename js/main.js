const CONTAINER = document.querySelector('.container-main');
const BUTTON = document.getElementById('spin');
let number = Math.ceil(Math.random() * 1000);

BUTTON.onclick = function() {
	CONTAINER.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}