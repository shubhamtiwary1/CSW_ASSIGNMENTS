$("#btn1").click(function(){
    $("#div1").slideUp("slow");
});

$("#btn2").click(function(){
    $("#div1").slideDown("slow");
});

$("#btn3").click(function(){
	$(".div2").animate({height: "300px"});
});

$("#btn4").click(function(){
	$(".para2").fadeOut();
});

$("#btn5").click(function(){
	$(".para2").fadeIn();
});

$(".para3").mouseleave(function(){
	$(".para3").css("background-color","yellow");
});

$("#btn6").click(function(){
	$("img").attr("width","500");
});

