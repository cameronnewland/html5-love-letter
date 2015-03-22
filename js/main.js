function verticallyCenterPoetryBox(){
	var containerHeight = $(window).height();
	containerHeight -= $('.vertically-centered-container').height();
	containerHeight /= 2;
    jQuery('.vertically-centered-container').css('margin-top',containerHeight);
}

$(window).load(function(){
	verticallyCenterPoetryBox();
	$('.vertically-centered-container p:first-child').animate({opacity: 1},2000,function(){
		$('.vertically-centered-container p:nth-child(2)').animate({opacity: 1},2000,function(){
			$('.vertically-centered-container p:nth-child(3)').animate({opacity: 1},2000,function(){
				$('.vertically-centered-container p:nth-child(4)').animate({opacity: 1},3000,function(){
					$('.vertically-centered-container span').animate({opacity: 1},2000,function(){
						$('span').addClass('pulse');
					});
				});
			});
		});
	});
});

  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });

//When the user resizes the browser window, the client overlay re-centers itself vertically
$(window).resize(function() {
	verticallyCenterPoetryBox();
});