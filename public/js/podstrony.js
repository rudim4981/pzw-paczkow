		var scrollPos = 0;
    $( window ).ready(function(){scr();$( 'section.zajecia' ).css('margin-top', '200px');});
		window.onscroll =  function() {scr()};
		window.onload = function() {scr()};
		function menu() {
			if((document.body.getBoundingClientRect().top > -125) && (scrollPos <= 0)){
				document.getElementById('info').className = 'def';
				document.getElementById('info').style.top=document.body.getBoundingClientRect().top;
			}else{
				document.getElementById('info').className = 'top';
			}
			scrollPos = (document.body.getBoundingClientRect()).top;
		};
		function scr(){
			menu();
			document.getElementById('progress').style.width = (((innerHeight-document.body.getBoundingClientRect().top-innerHeight))/(document.body.getBoundingClientRect().height - innerHeight))*101 + '%';
		}
