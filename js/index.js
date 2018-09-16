$(document).ready(function(){
	$('#subscribe').click(function(){
		$('#subscribeMask').css({
			'visibility':'visible'
		})
	})
	$('#articleNav button').click(function(){
		$('#subscribeMask').css({
			'visibility':'visible'
		})
	})
	$('#subscribeMask svg').click(function(){
		$('#subscribeMask').css({
			'visibility':'hidden'
		})
	})
	$(document).scroll(
		function(){
			var scrollTop=$(document).scrollTop(),
			scrollHeight=$(document).height()-$(window).height(),
			percentage=scrollTop/scrollHeight,
			documentWidth=$(document).width(),
			percentageWidth=percentage*documentWidth;
			$('#percentage').width(percentageWidth)
			if (scrollTop>400) {
				$('#readProgress').slideDown(200)
			}
			else{
				$('#readProgress').slideUp(200)
			}
		}
	)


})