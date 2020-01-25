var testowa = 0;
function addClass(){
	$('#tochange').addClass('is-active');
	$('#tochange').attr('onclick','removeClass()');
	$('.menu-all').css('display','block');
}
function removeClass(){
	$('#tochange').removeClass('is-active');
	$('#tochange').attr('onclick','addClass()');
	$('.menu-all').css('display','none');
}

var scrollPos = 0;
			window.onload = $('footer').next().remove();
			function menu() {
			if((document.body.getBoundingClientRect().top > -125) && (scrollPos <= 0)){
					document.getElementById('info').className = 'def';
					document.getElementById('info').style.top=document.body.getBoundingClientRect().top+'px';
				}
				//else if(document.body.getBoundingClientRect().top < scrollPos){
				//	document.getElementById('info').className = 'bottom';
				//}
				else{
					document.getElementById('info').className = 'top';
				}
				scrollPos = (document.body.getBoundingClientRect()).top;
			};

var powturzenie = 1;
var powturzenie2 = 1;

if(document.body.getBoundingClientRect().width > 1024)
{
	
$('.of-hidden-1').click(function(){


if((-document.body.getBoundingClientRect().top >= 0) && (-document.body.getBoundingClientRect().top <100)){
	document.getElementById('menu-hidden').style.top=  (200 + document.body.getBoundingClientRect().top);
	}
else if((-document.body.getBoundingClientRect().top >= 100) && (-document.body.getBoundingClientRect().top <135)){
	document.getElementById('menu-hidden').style.top=97 - (-(document.body.getBoundingClientRect().top)-105);
	}
else{
	document.getElementById('menu-hidden').style.top="none";
	document.getElementById('menu-hidden').className = 'menu-hidden-top';
	}
	
if($('.of-hidden-1').attr('cart') == 'def'){
	$('.of-hidden-1').attr("id","rotate");
	$('.of-hidden-1').attr('cart','up');
}else if($('.of-hidden-1').attr('cart') == 'up'){
		$('.of-hidden-1').removeAttr("id","rotate");
		document.getElementById('menu-hidden').style.removeProperty('top');
		document.getElementById('menu-hidden').className = 'menu-hidden';
		$('.of-hidden-1').attr('cart','def');
	}
});


$('.of-hidden-2').click(function(){
if((-document.body.getBoundingClientRect().top >= 0) && (-document.body.getBoundingClientRect().top <100)){
	document.getElementById('menu-hidden-2').style.top=  (200 + document.body.getBoundingClientRect().top);
	}
else if((-document.body.getBoundingClientRect().top >= 100) && (-document.body.getBoundingClientRect().top <135)){
	document.getElementById('menu-hidden-2').style.top=97 - (-(document.body.getBoundingClientRect().top)-105);
	}
else{
	document.getElementById('menu-hidden-2').style.top="none";
	document.getElementById('menu-hidden-2').className = 'menu-hidden-top-2';
	}
	if($('.of-hidden-2').attr('cart') == 'def'){
	$('.of-hidden-2').attr("id","rotate");
	$('.of-hidden-2').attr('cart','up');
}else if($('.of-hidden-2').attr('cart') == 'up'){
		$('.of-hidden-2').removeAttr("id","rotate");
		document.getElementById('menu-hidden-2').style.removeProperty('top');
		document.getElementById('menu-hidden-2').className = 'menu-hidden-2';
		$('.of-hidden-2').attr('cart','def');
	}
});


$('section').on('click', function(){
    if($('.of-hidden-1').attr('cart') == 'up'){
				document.getElementById('menu-hidden').style.removeProperty('top');
				document.getElementById('menu-hidden').className = 'menu-hidden';
				$('.of-hidden-1').removeAttr("id","rotate");
				$('.of-hidden-1').attr('cart','def');
				}
				if($('.of-hidden-2').attr('cart') == 'up'){
				document.getElementById('menu-hidden-2').style.removeProperty('top');
				document.getElementById('menu-hidden-2').className = 'menu-hidden-2';
				$('.of-hidden-2').removeAttr("id","rotate");
				}
});

			
			var scrollPos = 0;
			

			function menu() {
			if((document.body.getBoundingClientRect().top > -125) && (scrollPos <= 0)){
					document.getElementById('info').className = 'def';
					document.getElementById('info').style.top=document.body.getBoundingClientRect().top+'px';
				}
				
				else{
					document.getElementById('info').className = 'top';
				}
				scrollPos = (document.body.getBoundingClientRect()).top;
			};
			var last = 0;

				
				document.onscroll=function(){
				if($('.of-hidden-1').attr('cart') == 'up'){
				document.getElementById('menu-hidden').style.removeProperty('top');
				document.getElementById('menu-hidden').className = 'menu-hidden';
				$('.of-hidden-1').removeAttr("id","rotate");
				$('.of-hidden-1').attr('cart','def');
				}
				if($('.of-hidden-2').attr('cart') == 'up'){
				document.getElementById('menu-hidden-2').style.removeProperty('top');
				document.getElementById('menu-hidden-2').className = 'menu-hidden-2';
				$('.of-hidden-2').removeAttr("id","rotate");
				$('.of-hidden-2').attr('cart','def');
				}
				$('.image-under-text').css('background-size',-(document.body.getBoundingClientRect()).top/18+'%');
				function getViewportScroll() {
					if(typeof window.scrollY != 'undefined') {
						return window.scrollY;
					}
					if(typeof pageYOffset != 'undefined') {
						return pageYOffset;
					}
					var doc = document.documentElement;
					doc = doc.clientHeight ? doc : document.body;
					return doc.scrollTop;
				}
				function getViewportHeight() {
					var a = document.documentElement.clientHeight, b = window.innerHeight;
					return a < b ? b : a;
				}
				var images = [].slice.call(document.querySelectorAll('.image'));
				var el, elOffset, elHeight,
				offset = getViewportScroll(),
				vHeight = getViewportHeight();
				for(var i in images) {
					el = images[i];
					elOffset = el.offsetTop;
					elHeight = el.offsetHeight;
					if((Math.round((elOffset - offset)*3/8) > 300) || (Math.round((elOffset - offset)*3/8) < -187	)){}
					else
					if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }
					el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
				}};
				
			
			}else if((document.body.getBoundingClientRect().width > 600)&&(document.body.getBoundingClientRect().width<1024)){
				
$('.of-hidden-1').click(function(){


if((-document.body.getBoundingClientRect().top >= 0) && (-document.body.getBoundingClientRect().top <100)){
	document.getElementById('menu-hidden').style.top=  (200 + document.body.getBoundingClientRect().top);
	}
else if((-document.body.getBoundingClientRect().top >= 100) && (-document.body.getBoundingClientRect().top <135)){
	document.getElementById('menu-hidden').style.top=97 - (-(document.body.getBoundingClientRect().top)-105);
	}
else{
	document.getElementById('menu-hidden').style.top="none";
	document.getElementById('menu-hidden').className = 'menu-hidden-top';
	}
	
if($('.of-hidden-1').attr('cart') == 'def'){
	$('.of-hidden-1').attr("id","rotate");
	$('.of-hidden-1').attr('cart','up');
}else if($('.of-hidden-1').attr('cart') == 'up'){
		$('.of-hidden-1').removeAttr("id","rotate");
		document.getElementById('menu-hidden').style.removeProperty('top');
		document.getElementById('menu-hidden').className = 'menu-hidden';
		$('.of-hidden-1').attr('cart','def');
	}
});


$('.of-hidden-2').click(function(){
if((-document.body.getBoundingClientRect().top >= 0) && (-document.body.getBoundingClientRect().top <100)){
	document.getElementById('menu-hidden-2').style.top=  (200 + document.body.getBoundingClientRect().top);
	}
else if((-document.body.getBoundingClientRect().top >= 100) && (-document.body.getBoundingClientRect().top <135)){
	document.getElementById('menu-hidden-2').style.top=97 - (-(document.body.getBoundingClientRect().top)-105);
	}
else{
	document.getElementById('menu-hidden-2').style.top="none";
	document.getElementById('menu-hidden-2').className = 'menu-hidden-top-2';
	}
	if($('.of-hidden-2').attr('cart') == 'def'){
	$('.of-hidden-2').attr("id","rotate");
	$('.of-hidden-2').attr('cart','up');
}else if($('.of-hidden-2').attr('cart') == 'up'){
		$('.of-hidden-2').removeAttr("id","rotate");
		document.getElementById('menu-hidden-2').style.removeProperty('top');
		document.getElementById('menu-hidden-2').className = 'menu-hidden-2';
		$('.of-hidden-2').attr('cart','def');
	}
});


$('section').on('click', function(){
    if($('.of-hidden-1').attr('cart') == 'up'){
				document.getElementById('menu-hidden').style.removeProperty('top');
				document.getElementById('menu-hidden').className = 'menu-hidden';
				$('.of-hidden-1').removeAttr("id","rotate");
				$('.of-hidden-1').attr('cart','def');
				}
				if($('.of-hidden-2').attr('cart') == 'up'){
				document.getElementById('menu-hidden-2').style.removeProperty('top');
				document.getElementById('menu-hidden-2').className = 'menu-hidden-2';
				$('.of-hidden-2').removeAttr("id","rotate");
				}
});

			
			var scrollPos = 0;
			

			function menu() {
			if((document.body.getBoundingClientRect().top > -125) && (scrollPos <= 0)){
					document.getElementById('info').className = 'def';
					document.getElementById('info').style.top=document.body.getBoundingClientRect().top;
				}
				
				else{
					document.getElementById('info').className = 'top';
				}
				scrollPos = (document.body.getBoundingClientRect()).top;
			};
			var last = 0;

				
				document.onscroll=function(){
				if($('.of-hidden-1').attr('cart') == 'up'){
				document.getElementById('menu-hidden').style.removeProperty('top');
				document.getElementById('menu-hidden').className = 'menu-hidden';
				$('.of-hidden-1').removeAttr("id","rotate");
				$('.of-hidden-1').attr('cart','def');
				}
				if($('.of-hidden-2').attr('cart') == 'up'){
				document.getElementById('menu-hidden-2').style.removeProperty('top');
				document.getElementById('menu-hidden-2').className = 'menu-hidden-2';
				$('.of-hidden-2').removeAttr("id","rotate");
				$('.of-hidden-2').attr('cart','def');
				}
			
			}
			}else{
					
				$('.of-hidden-1').click(function(){
					$('.menu-hidden-mobile').css('display','block');
					if(powturzenie%2)
					$('.of-hidden-1').attr("id","rotate");
				else{
						$('.of-hidden-1').removeAttr("id","rotate");
						$('.menu-hidden-mobile').css('display','none');
					}
					powturzenie++;
				});
				
				$('.of-hidden-2').click(function(){
					$('.menu-hidden-2-mobile').css('display','block');
					if(powturzenie2%2)
					$('.of-hidden-2').attr("id","rotate");
				else{
						$('.of-hidden-2').removeAttr("id","rotate");
						$('.menu-hidden-2-mobile').css('display','none');
					}
					powturzenie2++;
				});
			}
			
			
			
			window.onscroll =  function() {
			
			
			if(document.body.getBoundingClientRect().width > 500){
			menu();
			}
			scr2()
			};
			window.onload = function() {
			
			if(document.body.getBoundingClientRect().width > 500){
			menu();
			}
			scr2()};
			function scr2(){
			var all = document.getElementsByClassName('of');    
				if(($('#toleft').offset().top-innerHeight < -document.body.getBoundingClientRect().top) && (testowa == 0)){
					document.getElementById('toleft').style.paddingLeft= 0;
					document.getElementById('toleft').style.paddingRight= 400 + 'px';
					setTimeout(function(){ document.getElementById('toleft').style.paddingRight= 0; }, 600);
					testowa = 1;
				}
				if($('#oferty').offset().top-innerHeight < -document.body.getBoundingClientRect().top){
					document.getElementById('oferty').style.color="orange";
					}
				if($('.oferty').offset().top-innerHeight < -document.body.getBoundingClientRect().top){
					for (var i = 0; i < all.length; i++) {
						all[i].style.marginLeft = 0;
					}
				}
			document.getElementById('progress').style.width = (((innerHeight-document.body.getBoundingClientRect().top-innerHeight))/(document.body.getBoundingClientRect().height - innerHeight))*101 + '%';
			
			
			
			if(($('.text1').prop('offsetTop') - 100 <= -(document.body.getBoundingClientRect().top)) && ($('.text1').prop('offsetTop') + $('.text1').prop('scrollHeight') > -(document.body.getBoundingClientRect().top - 100)))
						$('#oferty-link-width').addClass("menu-item-active");
					else
						$('#oferty-link-width').removeClass("menu-item-active");
					if(($('.text2').prop('offsetTop') - 100 <= -(document.body.getBoundingClientRect().top)) && ($('.text2').prop('offsetTop') + $('.text2').prop('scrollHeight') > -(document.body.getBoundingClientRect().top - 100)))
						$('#onas-width').addClass("menu-item-active");
					else
						$('#onas-width').removeClass("menu-item-active");
					if(($('.text3').prop('offsetTop') - 100 <= -(document.body.getBoundingClientRect().top)) && ($('.text3').prop('offsetTop') + $('.text3').prop('scrollHeight') > -(document.body.getBoundingClientRect().top - 100)))
						$('#info-width').addClass("menu-item-active");
					else
						$('#info-width').removeClass("menu-item-active");
					if(($('.text4').prop('offsetTop') - 100 <= -(document.body.getBoundingClientRect().top)) && ($('.text4').prop('offsetTop') + $('.text4').prop('scrollHeight') > -(document.body.getBoundingClientRect().top )))
						$('#kontakt-width').addClass("menu-item-active");
					else
						$('#kontakt-width').removeClass("menu-item-active");
						
						$('a.menu-link').click(function(){
$(window).scrollTop($('#'+this.name).offset().top);
});
			}
			$('button.info-news').click(function(){
var tekst = '<svg id="svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>';
if(this.name == "zarybianie")
	 tekst += 'Dnia 10.01.2020 odbyło się pierwsze zarybianie stawy niedaleko basenu.</br>Wydarzenie zaczęło się o godzinie 12 i dzięki waszej pomocy wszystko zakończyło się w przeciągu 4 godzin ryby jakie dzięki wam znalazły swój kąt: Amur, Okoń, Płoć.</br>Całe nasze spodkanie zakończyliśmy ogniskiem z kiełbasami. Szczególne podziękowania należą się Adamowi Kowalskiemu, któremu udało się załatwić potrzebny sprzęt. Dziękujemy pozostałym.';
else if(this.name == "nowy-sezon")
	 tekst += "Nasze coroczne wędkownie z okazji przyjęcia nowego roku z wędką odbyły się 12.01.2020 na jeziorze Otmuchowskim.</br>Zebraliśmy się w 20-osobowej grupię i wspólnie wędkowaliśmy tak spędziliśmy piękne 5 godzin łowienia, na szczęście nie zabrakło emocji i piękne okazy co chwila meldowały się na naszych wędkach. W trakcie spotaknia nie mogliśmy narzekać, także i tym razem rozpaliliśmy ognisko i jedliśmy kiełbasy.";
else if(this.name == "piewsze-zawody")
	 tekst += "Chcielibyśmy ogłosić zawody które odbędą się 1.02.2020 o 7:00 na rzece Nysie-Kłodziej niedaleko mostu.</br>Będą to pierwsze zawody w tym roku, liczymy na duże zainteresowanie z waszej strony. Jak zwykle będziecie mogli liczyć na świetne nagrody, których jak na razie nie ujawnimy."
$('#info-news').html(tekst);
$('#info-news').addClass("active");
$('#info-news').css('display','block');
$(window).scrollTop($('#info-news').offset().top-200);
$('#svg').click(function(){
$('#info-news').removeClass("active");
$('#svg').css('display','none');
$('#info-news').css('display','none');
});
});
