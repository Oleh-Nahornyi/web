$(".square").mouseenter( function(){
	$(".tr1").css("visibility" ,"visible")
}
);
$(".circle").mouseenter( function(){
	$(".tr2").css("visibility" ,"visible")
	
}
);
$(".circle").mouseleave( function(){
	$(".tr2").css("animation-name" "tr2")
}
);
$(".square").mouseleave( function(){
	$(".tr1").css("animation-name", "tr1")
}
);