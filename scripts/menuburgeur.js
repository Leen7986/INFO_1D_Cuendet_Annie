// Script pour le menu burgeur de la version mobile du site
function menuBurger() {
	let menu = document.getElementById("myMenu_nav");
	if(menu.className === "menu_nav")
		menu.className += " responsive";
	else
		menu.className = "menu_nav";
}