jQuery(function($) {
	"use strict";

	$.validate();

	new WOW().init();
	//Variables
	var fixed_point = 0;
	var loaded = false;

	// Author Code Here
	$(window).load(function(){
	
		$('.main-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 400
		});
		$(".get-direction").tooltip({
		    direction: "top"
		});
		// Navbar "Breaking" Fix
		loaded = true;
		$('.navbar').after("<div class='navbar-filler'></div>");
	});

	
	$('.sample-button').click(function(event){
		$('#sample-form').slideDown();
		event.preventDefault();
	});

	$('form').submit(function(event){
		if($(this).find(".has-error").length > 0)
			return;
		event.preventDefault();
		var that = $(this),
			url = $(that).attr('action'),
			type = $(that).attr('method'),
			dataX = {};
			
		$(that).find("[name]").each(function(){
			dataX[$(this).attr("name")] = $(this).val();
		});

		$('.notification-box').addClass('active');

		$.ajax({
			type:'POST',
			url: url,
			data: dataX,
			success: function(response){
				$('.notification-box span').html(response);
					setTimeout(function(){
						$('.notification-box').removeClass('active');
						$('.notification-box span').html("Sending...");
					}, 4000);
				}
		});
	});

	// Mobile Nav
	$('.mobile-nav > ul').html($('.navbar-nav').html());
	$('.mobile-nav').append("<a href='#' class='close-btn'><i class='icon_close'></i></a>");

	$('.navbar-toggle').click(function(event){
		event.stopPropagation();
		$('#wrapper').addClass('behind');
		$('.mobile-nav').addClass('active');
	});
	$('.mobile-nav a.close-btn').click(function(event){
		$('#wrapper').removeClass('behind');
		$('.mobile-nav').removeClass('active');
		event.preventDefault();
	});

	// Scrolling
	$('a.scrollto').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $("[name='" + this.hash.slice(1) +"']");
			if (target.length) {
				$('#wrapper').removeClass('behind');
				$('.mobile-nav').removeClass('active');
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});