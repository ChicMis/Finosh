$(document).ready(function(){

	
	var clickFunction = function(){
		$('.clickButton').click(function(event){
			var allTargets=$('.clickTarget'),
			currentTarget=$(this).siblings(".clickTarget");
			allTargets.each(function(){
				if ($(this)[0]!=currentTarget[0]) {
					$(this).fadeOut(200);
				}
			})
			event.stopPropagation();
			currentTarget.fadeToggle(200);
		})
		$(document).click(function(){
			$('.clickTarget').fadeOut(200);	
		})
	}
	clickFunction();
	
	$('#navShowButton').click(function(){
		var navOneMarginLeft=$('#navOne').css('marginLeft');
		if (navOneMarginLeft == '0px') {
			$('#navOne').animate({
				marginLeft:'-23rem'
			},200)
			$('#navShowButton').animate({
				marginLeft:'-23rem'
			},200)
			$('#testArea').animate({
				paddingLeft:'0'
			},200)
		}
		else{
			$('#navOne').animate({
				marginLeft:'0'
			},200)
			$('#navShowButton').animate({
				marginLeft:'0'
			},200)
			$('#testArea').animate({
				paddingLeft:'24rem'
			},200)
		}
	})
	/*
	$('#navOne').mouseover(function(){
		var navOneMarginLeft=$('#navOne').css('marginLeft');
		if (navOneMarginLeft != 0) {
			$('#navOne').animate({
				marginLeft:'0'
			},200)
			$('#navShowButton').animate({
				marginLeft:'0'
			},200)
		}
	})
	$('#navOne').mouseleave(function(){
		var navOneMarginLeft=$('#navOne').css('marginLeft');
		if (navOneMarginLeft == '0px') {
			$('#navOne').animate({
				marginLeft:'-23rem'
			},200)
			$('#navShowButton').animate({
				marginLeft:'-23rem'
			},200)
		}
	})*/
	var navClickFunction = function(){
		$(this).siblings('.selected').addClass('normal');
		$(this).siblings('.selected').removeClass('selected');
		$(this).addClass('selected');
		$(this).removeClass('normal');
	};

	$('.option li').click(navClickFunction)
	$('#navTwo li').click(navClickFunction)

	$('#indexMain #yourStory button').click(function(){
		$('.option').children('.selected').addClass('normal');
		$('.option').children('.selected').removeClass('selected');
		$('#newStory').removeClass('normal');
		$('#newStory').addClass('selected');
		$('#testArea').load('./test.html')

	})

	$('#newStory').click(function(){
		$('#loadArea').load('./newStory.html')
	})
	$('#newStory2').click(function(){
		$('#loadArea').load('./newStory.html')
	})

	function getSearchResult() {
		var data = {
			code:1,
			msg:"success",
			data:[
				"Tips on visiting South Asia",
				"Tips on visiting South Asia"
			]
			}
			return data;
		}

	$('#searchKeyWords').bind("input propertychange",function(event){
		$('#searchBox').css({
			'border':'1px solid #b1b1b1'
		})
		$('#inputBox').css({
			'border-color':'#fff'
		})
		$('#searchResult').css({
			'display':"block"
		})	
		
		var searchRuslt=getSearchResult().data;
		var html = '<div id="resultHeader"><div id="category">Stories</div><hr></div>';
		var searchWords=$(this).val();
		if (searchWords) {
			for (var i = 0; i < searchRuslt.length; i++) {
				var matchRule=new RegExp(searchWords, 'gi');
				var matchResult=searchRuslt[i].match(matchRule);
				var liContent = searchRuslt[i];
				if (matchResult) {
					$.unique(matchResult);
					console.log(matchResult);
					for (var g = 0; g < matchResult.length; g++) {
						var matchRule2=new RegExp(matchResult[g], 'g');
						liContent = liContent.replace(matchRule2,'<span class="yellow">' + matchResult[g] + '</span>')
						console.log(liContent);
					}
				}
				html += '<li>' + liContent + '</li>';

			}
		}else{
			for (var i = 0; i < searchRuslt.length; i++) {
				var liContent = searchRuslt[i];
				html += '<li>' + liContent + '</li>';
			}

		}
		$('#results').html(html)

	})

	$('#searchKeyWords').blur(function(){
		$('#searchResult').css({
			'display':"none"
		})
		$('#inputBox').css({
			'border-color':'#dfe1e3'
		})
		$('#searchBox').css({
			'border':'0'
		})
	})


	$('#searchResult li').mouseover(function(){
		$('#searchResult .hover').removeClass('hover');
		$(this).addClass('hover')
	})

	

})