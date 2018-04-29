////////////////////////////////////////////////////

function scrollToSection() {
	$(document).ready(function() {
		$('a[href^="#"]').on('click', function(event) {
			event.preventDefault();
			var target = this.hash;
			var $target = $(target);

			$('html, body').animate({
				'scrollTop': $target.offset().top
			}, 1000, 'swing');
		});
	});
};

////////////////////////////////////////////////////

function animatedLandingPageText() {
	var messages = ["user interfaces", "websites", "landing pages", "web applications"];
	var target = document.querySelector(".dynamic-text");
	var counter = 0;

	setInterval(function() {
		target.innerHTML = messages[counter];
		counter++;
		if(counter >= messages.length) {
			counter = 0;
		}
	}, 800);
};

////////////////////////////////////////////////////

function toggleReachoutInfo() {
	$('#reach-out').click(function() {
		$('.submenu').slideToggle();
	});
};

////////////////////////////////////////////////////

function init() {
	scrollToSection();
	animatedLandingPageText();
	toggleReachoutInfo()
}

////////////////////////////////////////////////////

var unsplashApiImageData = $.ajax({
	type: 'GET',
  	dataType: 'json',
  	url: 'https://api.unsplash.com/users/sergio4156/likes/?client_id=f13ac5e8ebfa828152a8b37118d36f01fe9c11d29756718554bec313fc46afe1'
});

unsplashApiImageData.done(function(imgData) {
	var topBottomImage = imgData[2].urls.full;
	//dynamically creating <img> and adding API uri as src
	$('#top').prepend('<img style="min-height: 800px; width: 100%;" src="' + topBottomImage + '"/>');
	init();
});