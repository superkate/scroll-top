var scrollLimit = 0;
var arrowName = 'uni_scroll_top_arrow';
var arrowSelector = '#' + arrowName;
var clickAllowed = true;

var arrow = document.createElement('div');
arrow.id = arrowName;
arrow.innerText = ' \u2191 ';
arrow.onclick = scrollTop;
document.getElementsByTagName('body')[0].appendChild(arrow);
	
window.onscroll = toggleTopButton;
	
if (window.pageYOffset > scrollLimit) {
	toggleTopButton();
}

function toggleTopButton() {
	var YOffset = window.pageYOffset;
		
	arrow.style.display = (YOffset > scrollLimit) ?
		'block' :
		'none';
}

function scrollTop() {
	if (clickAllowed) {
		window.scrollTo(0,0);
	}
		
	clickAllowed = false;
	setTimeout(function() {
		clickAllowed = true;
	}, 1000);
}