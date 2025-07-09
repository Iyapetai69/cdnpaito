// Reset warna background
$(document).ready(function () {
    $("#btnSubmit").click(function () {
        $(".asu, .asux, td").css("background", "");
    });
});

// Grid Drawing & Tracing
$(function () {
    var eraseState, mouseDownState, curColor, tracingMode;

    if ($(".color.selected").length > 0) {
        curColor = $(".color.selected").attr("data-color");
    }

    // Tombol Clear dan bangun ulang grid
    $("#clear").click(function () {
	$(".color").removeClass('selected');
        $("#paitotable tbody td").removeAttr('style').removeClass(["rek", "rke", "rko", "ras"]);
        $("#vas, #vko, #vke, #vek").val("");
	var size = $("#gridSize").val().split(",");
        var rows = size[0];
        var cols = size[1];
        buildGrid(rows, cols);
    });

    // Gambar dengan mouse
    $("#drawing-table tbody")
        .delegate("td", "mousedown", function () {
            mouseDownState = true;
            var $el = $(this);
            eraseState ? $el.removeAttr("style") : $el.css("background", curColor);
        })
        .delegate("td", "mouseenter", function () {
            if (mouseDownState) {
                var $el = $(this);
                eraseState ? $el.removeAttr("style") : $el.css("background", curColor);
            }
        });

    $("html").bind("mouseup", function () {
        mouseDownState = false;
    });

    // ALT Key untuk mode hapus
    $(document)
        .keydown(function (event) {
            if (event.keyCode === 18) {
                eraseState = true;
                $(".selected").addClass("previous");
                $(".color").removeClass("selected");
                $(".eraser").addClass("selected");
            }
        })
        .keyup(function (event) {
            if (event.keyCode === 18) {
                eraseState = false;
                $(".color").removeClass("selected");
                $(".previous").addClass("selected").removeClass("previous");
                $("." + curColor).addClass("selected");
            }
        });

    // Pilih warna
    $("#color-selector").delegate(".color", "click", function () {
        var $el = $(this);
        var pulledVal = $el.attr("data-color");

        eraseState = (pulledVal === 'eraser');
        if (!eraseState) curColor = pulledVal;

        $(".color").removeClass("selected");
        $el.addClass("selected");
    });

    // Form tracing image
    $("#tracing-image-form").submit(function () {
        var url = $("#fileLocation").val();

        $("<div />", { id: "tracing-image" }).appendTo("#table-wrap");
        $("#drawing-table").css("opacity", 0.5);
        $("#toggle-tracing-mode").show();
        $("#tracing-image-form").remove();
        tracingMode = true;

        return false;
    });

    // Toggle tracing mode
    $("#toggle-tracing-mode").click(function () {
        tracingMode = !tracingMode;
        $("#tracing-image").css("visibility", tracingMode ? "visible" : "hidden");
        $(this).html(tracingMode ? "Toggle Tracing Mode Off" : "Toggle Tracing Mode On");
        $("#drawing-table").css("opacity", tracingMode ? 0.5 : 1);
    });

    // Get HTML Table
    $("#get-html-button").click(function () {
        var html = "<table style='width: 100%; border-collapse: collapse;'>" + $("#drawing-table").html() + "</table>";
        $("#the-html").val(html);
    });
});

// Reset highlight class dan kelas kombinasi
$(document).ready(function () {
    $("#rb").click(function () {
        $("span").removeClass("highlight");
        $("td").removeClass("e1 e2 e3 e4 e5 e6 e7 e8 e9 e0 k1 k2 k3 k4 k5 k6 k7 k8 k9 k0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c0 a1 a2 a3 a4 a5 a6 a7 a8 a9 a0");
    });
});

// Reset form
function myFunction() {
    document.getElementById("myForm").reset();
}

// Input kombinasi angka
$(function () {
   	$('#vas').change(function () {
		$('.asu:nth-last-child(5n+5)').each(function () {
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
		$('.asu:nth-last-child(5n+4)').each(function () {
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
		$('.asu:nth-last-child(5n+3)').each(function () {
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
		$('.asu:nth-last-child(5n+2)').each(function () {
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
		$('.asux').each(function () {
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
// Sticky colormenu + select redirect
jQuery(function ($) {
    $("#colormenu")
        .css('width', $("#colormenu").width() + 10)
        .css('height', '30px');

    var mcolpos = $("#colormenu").position().top;
    var mcolposlef = $("#colormenu").position().left;

    function fixColormenu() {
        if ($(window).scrollTop() >= mcolpos) {
            $("#colormenu").addClass('fixed').css({ 'left': mcolposlef });
        } else {
            $("#colormenu").removeClass('fixed').css({ 'left': 'unset' });
        }
    }

    $(window).on("load scroll", fixColormenu);

    // Pindah halaman berdasarkan select option
    $("#paitopsr").change(function () {
        var newgoto = $(this).find("option:selected").data('goto');
        if (newgoto !== '') {
            window.location.href = newgoto;
        }
    });
});
