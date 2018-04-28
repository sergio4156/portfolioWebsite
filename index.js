var apiImage = $.ajax({
	type: 'GET',
  	dataType: 'json',
  	url: 'https://api.unsplash.com/users/sergio4156/likes/?client_id=f13ac5e8ebfa828152a8b37118d36f01fe9c11d29756718554bec313fc46afe1'
});

apiImage.done(function(data) {
	//apiImage = data;
	var image = data[0].urls.full;
	console.log(image);
	//init(image);

	$('#backgroundImgDiv').append('<img src="' + image + '"/>')

});

////////////////////////////////////////////////////

(function scrollToSection() {
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
})();

////////////////////////////////////////////////////

(function animatedLandingPageText() {
	var messages = ["user interfaces", "websites", "landing pages", "web applications"];
	var target = document.getElementById("message");
	var counter = 0;

	setInterval(function() {
		target.innerHTML = messages[counter];
		counter++;
		console.log("message: " + messages[counter]);

		if(counter >= messages.length) {
			counter = 0;
		}
	}, 800);
})();



////////////////////////////////////////////////////

function init(initialData) {
	//console.log('initialData',initialData);
	populateBackgroundImageContent(initialData);
}

////////////////////////////////////////////////////

function creatingHandlebarsTemplate(targetHandlebarsScriptElement, data, handlebarsPlaceHolderDiv) {
	var handlebarsScriptSource = document.getElementById(targetHandlebarsScriptElement).innerHTML;
	//console.log("handlebarsScriptSource: " + handlebarsScriptSource);
	var handlebarsTemplateToRender = Handlebars.compile(handlebarsScriptSource);
	var finalContentToRender = handlebarsTemplateToRender(data);
	var finalContentToRenderPlaceHolder = document.getElementById(handlebarsPlaceHolderDiv);
	finalContentToRenderPlaceHolder.innerHTML = finalContentToRender;
}

////////////////////////////////////////////////////

function populateBackgroundImageContent(imgData) {
	creatingHandlebarsTemplate("background-image-template", imgData, "background-image-placeHolder-div");
}