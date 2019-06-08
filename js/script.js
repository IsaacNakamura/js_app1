// https://www.youtube.com/embed/LFa9fnQGb3g このビデオ

function revealMessage(){
	document.getElementById("hiddenMessage").style.display = 'block' ;
}

// https://www.youtube.com/embed/JjIvF0yikGU このビデオ

$(document).ready(function(){
	$("#hidden").hover(function(){
		$(this).css("color","black");	
	},
	function(){
		//$(this).hide();		
		//$(this).css("display","none");
		$(this).css("color","white");
	});
	
	$("#button2").click(function(){
		alert("I am alerting you!気をつけて!")
	});
});