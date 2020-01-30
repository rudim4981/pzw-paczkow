		var scrollPos = 0;
    $( window ).ready(function(){scr();$( 'section.zajecia' ).css('margin-top', '200px');$('html').removeAttr('class');$('html').removeAttr('style')});
		window.onscroll =  function() {scr()};
		window.onload = function() {scr()};
		function menu() {
			if((scrollPos > -125) && (scrollPos <= 0)){
				document.getElementById('info').className = 'def';
			}else{
				document.getElementById('info').className = 'top';
				document.getElementById( 'info' ).style.top = scrollPos + 'px';
			}
			scrollPos = (document.body.getBoundingClientRect()).top;
		};
		function scr(){
			for(var i=0;i<$('.instruktor').length;i++){
			if($('.instruktor').eq(i).offset().top-innerHeight < -document.body.getBoundingClientRect().top)
				$('.instruktor').eq(i).css('margin-left','0%');
			}
			menu();
			document.getElementById('progress').style.width = (((innerHeight-document.body.getBoundingClientRect().top-innerHeight))/(document.body.getBoundingClientRect().height - innerHeight))*101 + '%';
		}

$(window).load(function() {
		$(' .whenload ').css('opacity','0');
	setTimeout(function() {
		$(' .whenload ').css('display','none');
	}, 1000);
	});
$( window ).scroll( function() {
	menu();
});



