$(function () {
    var eraseState, mouseDownState, curColor, curText;

    // Inisialisasi warna awal jika ada yang terpilih
    if ($(".color.selected").length > 0) {
        curColor = $(".color.selected").attr("data-color");
        curText = "white";
    }

    // Tombol Clear
    $("#clear").click(function () {
        $(".color").removeClass('selected');
        $("#drawing-table tbody td").removeAttr('style').removeClass(["rek", "rke", "rko", "ras"]);
        $("#vas, #vko, #vke, #vek").val("");
    });

    // Event menggambar atau menghapus
    $("#drawing-table tbody")
        .delegate("td:not(.disabled)", "mousedown", function () {
            mouseDownState = true;
            var $el = $(this);
            if (eraseState) {
                $el.removeAttr("style");
            } else {
                $el.css({
                    "background": curColor,
                    "color": curText
                });
            }
        })
        .delegate("td", "mouseenter", function () {
            if (mouseDownState) {
                var $el = $(this);
                if (eraseState) {
                    $el.removeAttr("style");
                } else {
                    $el.css({
                        "background": curColor,
                        "color": curText
                    });
                }
            }
        });

    // Reset mouse state saat mouse dilepas
    $("html").bind("mouseup", function () {
        mouseDownState = false;
    });

    // Tombol ALT untuk menghapus
    $(document)
        .keydown(function (event) {
            if (event.keyCode == 18) { // ALT
                eraseState = true;
                $(".selected").addClass("previous");
                $(".color").removeClass("selected");
                $(".eraser").addClass("selected");
            }
        })
        .keyup(function (event) {
            if (event.keyCode == 18) { // ALT
                eraseState = false;
                $(".color").removeClass("selected");
                $(".previous").addClass("selected").removeClass("previous");
                $("." + curColor).addClass("selected");
            }
        });

    // Pilih warna atau penghapus
    $("#paitocolor").delegate(".color", "click", function () {
        var $el = $(this);
        var pulledVal = $el.attr("data-color");

        if (pulledVal === 'eraser') {
            eraseState = true;
        } else {
            eraseState = false;
            curColor = pulledVal;
            curText = "white";
        }

        $(".color").removeClass("selected");
        $el.addClass("selected");
    });

    // Sticky float menu
    $("#floatmenu").css('width', $("#floatmenu").width() + 10);
    var mcolpos = $("#floatmenu").offset().top;
    var mcolposlef = $("#floatmenu").offset().left;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= mcolpos) {
            $("#floatmenu").addClass('fixed').css({ 'left': mcolposlef });
        } else {
            $("#floatmenu").removeClass('fixed').css({ 'left': 'unset' });
        }
    });

    // Fungsi pencocokan nilai dropdown dengan sel
    function bindSelectToClass(selectId, classSelector, classToAdd) {
        $(selectId).change(function () {
            $(classSelector).each(function () {
                var selectedVal = $.trim($(selectId + " option:selected").val());
                var cellText = $(this).text();

                if (selectedVal.length && selectedVal === cellText) {
                    $(this).addClass(classToAdd);
                }
            });
        });
    }

    // Panggil fungsi untuk masing-masing dropdown
    bindSelectToClass('#vas', '.asu:nth-last-child(5n+5)', 'ras');
    bindSelectToClass('#vko', '.asu:nth-last-child(5n+4)', 'rko');
    bindSelectToClass('#vke', '.asu:nth-last-child(5n+3)', 'rke');
    bindSelectToClass('#vek', '.asu:nth-last-child(5n+2)', 'rek');
    bindSelectToClass('#vd', '.asux', 'rd');
});
