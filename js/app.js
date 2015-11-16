$(document).ready(function(){
	console.log("ready");

	$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: 50
    
  }
})

	

});



