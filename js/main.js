(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(1200).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});

	// AJAX
	$('#crs_1').click(function () {
		$.getJSON("json/course_1.json", function (data) {
			var ajaxData = '';
			$.each(data, function (key, value) {
				ajaxData += 
				'<ul><li><h3>' + value.name_1 +	
				'</h3><li>' + value.info_1 + '</li>' +
				'<li>'+ value.info_2+'</li>'+
				'<li>'+ value.info_3+'</li></ul>'
			});
			$('.modal-body').html(ajaxData);
		});
	});
	$('#crs_2').click(function () {
		$.getJSON("json/course_2.json", function (data) {
			var ajaxData = '';
			$.each(data, function (key, value) {
				ajaxData += 
				'<ul><li><h3>' + value.name_2 +	
				'</h3><li>' + value.info_4 + '</li>' +
				'<li>'+ value.info_5+'</li>'+
				'<li>'+ value.info_6+'</li></ul>'
			});
			$('.modal-body').html(ajaxData);
		});
	});

	$('#crs_3').click(function () {
		$.getJSON("json/course_3.json", function (data) {
			var ajaxData = '';
			$.each(data, function (key, value) {
				ajaxData += 
				'<ul><li><h3>' + value.name_3 +	
				'</h3><li>' + value.info_7 + '</li>' +
				'<li>'+ value.info_8+'</li>'+
				'<li>'+ value.info_9+'</li></ul>';	
			});
			$('.modal-body').html(ajaxData);
		});
	});
	$('#crs_4').click(function () {
		$.getJSON("json/course_4.json", function (data) {
			var ajaxData = '';
			$.each(data, function (key, value) {
				ajaxData += 
				'<ul><li><h3>' + value.name_4 +	
				'</h3><li>' + value.info_10 + '</li>' +
				'<li>'+ value.info_11+'</li>'+
				'<li>'+ value.info_12+'</li></ul>';
			});
			$('.modal-body').html(ajaxData);
		});
	});

	$('#crs_5').click(function () {
		$.getJSON("json/course_5.json", function (data) {
			var ajaxData = '';
			$.each(data, function (key, value) {
				ajaxData +=
					'<ul><li><h3>' + value.name_5 +
					'</h3><li>' + value.info_13 + '</li></ul>';
			});
			$('.modal-body').html(ajaxData);
		});
	});

	$('#crs_6').click(function () {
		$.getJSON("json/course_6.json", function (data) {
			var ajaxData = '';
			$.each(data, function (key, value) {
				ajaxData += 
				'<ul><li><h3>' + value.name_6 +	
				'</h3><li>' + value.info_14 + '</li>' +
				'<li>'+ value.info_15+'</li>'+
				'<li>'+ value.info_16+'</li></ul>'
			});
			$('.modal-body').html(ajaxData);
		});
	});
})(jQuery);






