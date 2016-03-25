function init(){
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
	$('ul.tabs').tabs();
	$('.button-collapse').show();			
	$('#modalComienzo_1').openModal({dismissible:false});
}

function initTour(){
	$('#modalComienzo_1').closeModal({});
	tour1_1();
}