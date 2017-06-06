(function menuResponsive() {
	var btnMenu = document.getElementById('menu');
	var list = document.getElementById('list');
	btnMenu.addEventListener("click", function(event){
		event.preventDefault();
		list.classList.toggle('desktop');
	})	
})();