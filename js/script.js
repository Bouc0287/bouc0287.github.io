$('#menubutton').click(function(){
    $('#main-menu').toggleClass("transitionslide");
});

$('.slide').click(function(){
   $('#main-menu').removeClass('transitionslide'); 
    
});

// Add smooth scrolling to all links
  $(document).on('click', "slide", function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $($.attr(this,"href")).offset().top
      }, 800);
});



