// JavaScript Document
$(document).ready(function(){
	
	$(window).resize(function(){
		location.reload();
	});
	
	$(".menu").click(function(){
		$("nav").slideToggle();
		
	});
	
	//fancybox 效果
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
		
	
	 $("#s2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	
});



