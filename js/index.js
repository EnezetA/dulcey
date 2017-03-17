$( document ).ready(function() {
    $("#myNav a").on('click', function(event) {
  		if (this.hash !== "") {
	    	event.preventDefault();
	    	var hash = this.hash;
	    	$('html, body').animate({
			      scrollTop: $(hash).offset().top
			    }, 800, function(){
			      window.location.hash = hash;
			    });
  		} 
	});

	$('.menu li').click(function(e) {
	    $('.navbar li.active').removeClass('active');
	    var $this = $(this);
	    if (!$this.hasClass('active')) {
	        $this.addClass('active');
	    }
	    e.preventDefault();
	});
});