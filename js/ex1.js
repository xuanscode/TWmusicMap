// JavaScript Document
$(document).ready(function(){
				  $(window).bind('load resize',function(){  //bind:把事件整合起來一起寫，這裡是load(開啟網頁)和resize(調整視窗)一起
					re_win(); //幫函式取的名字
					var r_in = $("div.ch_bg").index();
					var top_rs = an_he(r_in);
					$("html,body").animate({scrollTop: top_rs}, 500); //animate是scrolltop屬性,因為原本的top對應css裡的設定
					$("aside").stop().animate({top:top_rs},1000);
					});
	
				//box event	
				$(".box").eq(0).addClass("ch_bg");
				$(".box").click(function(){
					var _ind2 = $(this).index();
					var top_s = an_he(_ind2); //自訂的高度偵測函數
					
					$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
					$("html,body").animate({scrollTop: top_s}, 1000); //改以視窗本身作為移動元素，否則可能會和按鈕互相干擾
				});
				
				//scroll event
				$(window).scroll(function(){
					
					var _win_sc = $(window).scrollTop(); //去找卷軸的位置
					var _in = ch_bt(_win_sc); //照到目前對應的序號
					
					$(".box").eq(_in).addClass("ch_bg").siblings().removeClass("ch_bg");
					
					$("aside").stop().animate({top: _win_sc},1000); //多找aside的animate
				});
	
	
				function re_win(){  //以下由右到左
					
					var imgp = $("img").eq(0);  //尋找img這個標籤
					var imgwidth = imgp.width();
					var imgheight = imgp.height();
					
					var winwidth = $(window).width(); //尋找視窗寬度
					var winheight = $(window).height();
					
					var winratio = winwidth/winheight;
					var imgratio = imgwidth/imgheight;
					
					
					$(".content").css({height: winheight});
					
					if (winratio>1 && winratio>imgratio){
						$(".content").find(".fullimg").css({
							width: "100%",
							height:"auto"
						});
					}else{
						$(".content").find(".fullimg").css({
							width: "auto",
							height: winheight
						});
					}
				}
	
				function an_he(_index){
					var h = $(".content").height();
					var top_s = h*_index;
					return top_s;
				}
	
				function ch_bt(_win){
					var h  = $(".content").height();
					var _in = Math.round(_win/h); //一個數學運算式，算接近的整數已取得序號_in
					return _in; //再傳回有用到(_in)的地方
				}
});