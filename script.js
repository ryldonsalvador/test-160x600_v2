var tl = new TimelineLite();

function initThis(){

	TweenMax.set('#main_content, #frame1', {opacity:1, delay:0});
	setElements();
}


function elemId(id) {
	return document.getElementById(id);
}

function setElements(){
	introFrame();
}

function introFrame() {
	tl.set('#headline1', {opacity: 1, ease:Power3.easeInOut})
	.set('#cta', {delay:.5, opacity: 1, ease:Power4.easeInOut})
	.to('#headline1', 1, {opacity: 0, ease:Power4.easeInOut}, "+=1")
	.to('#headline2', 1, {opacity: 1, ease:Power4.easeInOut}, "-=.5")
	.to('.bg', 3.5, {scale:1.2,y:50, ease:Power4.easeInOut,onComplete:function(){
		TweenMax.to('.img2', 1, {delay:1, opacity: 1, ease:Power4.easeInOut})
		TweenMax.to('.bg', 1, {delay:1, opacity: 0, ease:Power2.easeInOut})	
		TweenMax.to('#headline3', 1, {delay:1.5, opacity: 1, ease:Power3.easeInOut})
	}}, "-=4")
}


setTimeout(initThis,1500);
