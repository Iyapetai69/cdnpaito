$(function(){
    var eraseState,mouseDownState,curColor,curText;if($(".color.selected").length>0){curColor=$(".color.selected").attr("data-color");curText="white";}$("#clear").click(function(){$(".color").removeClass('selected');$("#paitotable tbody td").removeAttr('style').removeClass(["rek", "rke", "rko", "ras"]);$("#vas, #vko, #vke, #vek").val("");});$("#paitotable tbody").delegate("td:not(.disabled)","mousedown",function(){mouseDownState=true;$el=$(this);if(eraseState){$el.removeAttr("style");}else{$el.css("background",curColor).css("color",curText);}}).delegate("td","mouseenter",function(){if(mouseDownState){$el=$(this);if(eraseState){$el.removeAttr("style");}else{$el.css("background",curColor).css("color",curText);}}});$("html").bind("mouseup",function(){mouseDownState=false;});$(document).keydown(function(event){if(event.keyCode==18){eraseState=true;$(".selected").addClass("previous");$(".color").removeClass("selected");$(".eraser").addClass("selected");}}).keyup(function(event){if(event.keyCode==18){eraseState=false;$(".color").removeClass("selected");$(".previous").addClass("selected").removeClass("previous");$("."+ curColor).addClass("selected");}});$("#paitocolor").delegate(".color","click",function(){$el=$(this);var pulledVal=$el.attr("data-color");if(pulledVal=='eraser'){eraseState=true;}else{eraseState=false;curColor=pulledVal;curText="white";}$(".color").removeClass("selected");$(this).addClass("selected");});

    $("#floatmenu").css('width', $("#floatmenu").width()+10);
    var mcolpos = $("#floatmenu").offset().top; var mcolposlef = $("#floatmenu").offset().left;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= mcolpos) {
            $("#floatmenu").addClass('fixed').css({'left':mcolposlef});
        }else{
            $("#floatmenu").removeClass('fixed').css({'left':'unset'});
        }
    });
	$('#vas').change(function () {
		$('.nxp:nth-last-child(5n+5)').each(function () {
			if ($.trim($('#vas').find("option:selected").val()).length) {
				var r = $(this).text();
				var t = $("#vas").find("option:selected").val(); 	
				if (r == t ) {
					$(this).addClass("ras");
				}
			 }				
		});
	});
	$('#vko').change(function () {
		$('.nxp:nth-last-child(5n+4)').each(function () {
			if ($.trim($('#vko').find("option:selected").val()).length) {
				var r = $(this).text();
				var t = $("#vko").find("option:selected").val(); 	
				if (r == t ) {
					$(this).addClass("rko");
				}
			 }				
		});
	});
	$('#vke').change(function () {
		$('.nxp:nth-last-child(5n+3)').each(function () {
			if ($.trim($('#vke').find("option:selected").val()).length) {
				var r = $(this).text();
				var t = $("#vke").find("option:selected").val(); 	
				if (r == t ) {
					$(this).addClass("rke");
				}
			 }				
		});
	});
	$('#vek').change(function () {
		$('.nxp:nth-last-child(5n+2)').each(function () {
			if ($.trim($('#vek').find("option:selected").val()).length) {
				var r = $(this).text();
				var t = $("#vek").find("option:selected").val(); 	
				if (r == t ) {
					$(this).addClass("rek");
				}
			 }				
		});
	});
	$('#vd').change(function () {
		$('.nxpx').each(function () {
			if ($.trim($('#vd').find("option:selected").val()).length) {
				var r = $(this).text();
				var t = $("#vd").find("option:selected").val(); 	
				if (r == t ) {
					$(this).addClass("rd");
				}
			 }				
		});
	});
});
