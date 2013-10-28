var scrollLimit = 0;
var arrowName = 'uni_scroll_top_arrow';
var arrowSelector = '#' + arrowName;
var clickAllowed = true;

$(function() {
	$('body').append('<div id="' + arrowName + '"> &uarr; </div>');
	$(arrowSelector).click(function() {
		if (clickAllowed) {
			$("html, body").animate({ scrollTop: "0px" }, 1000);
		}
		
		clickAllowed = false;
		setTimeout(function() {
			clickAllowed = true;
		}, 1000);
	});
	
	$( window ).scroll(toggleTopButton);
	
	if ($( window ).scrollTop() > scrollLimit) {
		toggleTopButton();
	}
});

function toggleTopButton() {
	var YOffset = window.pageYOffset || document.documentElement.scrollTop;
		
	var arrow = $(arrowSelector);
		
	if (YOffset > scrollLimit) {
		arrow.fadeIn();
	} else {
		arrow.fadeOut();
	}
}