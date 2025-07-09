$(document).ready(function () {
  $("#btnSubmit").click(function () {
    $(".asu").css("background", ""); //passing value as null.
    $(".asux").css("background", ""); //passing value as null.
    $("td").css("background", ""); //passing value as null.
  });
});

$(function () {
  var eraseState, mouseDownState, curColor;
  if ($(".color.selected").length > 0) {
    curColor = $(".color.selected").attr("data-color");
  }
  $("#clear").click(function () {
    rows = $("#gridSize").val().split(",")[0];
    cols = $("#gridSize").val().split(",")[1];
    buildGrid(rows, cols);
  });
  $("#drawing-table tbody")
    .delegate("td", "mousedown", function () {
      mouseDownState = true;
      $el = $(this);
      if (eraseState) {
        $el.removeAttr("style");
      } else {
        $el.css("background", curColor);
      }
    })
    .delegate("td", "mouseenter", function () {
      if (mouseDownState) {
        $el = $(this);
        if (eraseState) {
          $el.removeAttr("style");
        } else {
          $el.css("background", curColor);
        }
      }
    });
  $("html").bind("mouseup", function () {
    mouseDownState = false;
  });
  $(document)
    .keydown(function (event) {
      if (event.keyCode == 18) {
        eraseState = true;
        $(".selected").addClass("previous");
        $(".color").removeClass("selected");
        $(".eraser").addClass("selected");
      }
    })
    .keyup(function (event) {
      if (event.keyCode == 18) {
        eraseState = false;
        $(".color").removeClass("selected");
        $(".previous").addClass("selected").removeClass("previous");
        $("." + curColor).addClass("selected");
      }
    });
  $("#color-selector").delegate(".color", "click", function () {
    $el = $(this);
    var pulledVal = $el.attr("data-color");
    if (pulledVal == "eraser") {
      eraseState = true;
    } else {
      eraseState = false;
      curColor = pulledVal;
    }
    $(".color").removeClass("selected");
    $(this).addClass("selected");
  });
  $("#tracing-image-form").submit(function () {
    var url = $("#fileLocation").val();
    $("<div />", { id: "tracing-image" }).appendTo("#table-wrap");
    $("#drawing-table").css("opacity", 0.5);
    $("#toggle-tracing-mode").show();
    $("#tracing-image-form").remove();
    tracingMode = true;
    return false;
  });
  $("#toggle-tracing-mode").click(function () {
    if (tracingMode) {
      $("#tracing-image").css("visibility", "hidden");
      $(this).html("Toggle Tracing Mode On");
      $("#drawing-table").css("opacity", 1);
      tracingMode = false;
    } else {
      $("#tracing-image").css("visibility", "visible");
      $(this).html("Toggle Tracing Mode Off");
      $("#drawing-table").css("opacity", 0.5);
      tracingMode = true;
    }
  });
  $("#get-html-button").click(function () {
    $("#the-html").val(
      "<table style='width: 100%; border-collapse: collapse;'>" +
        $("#drawing-table").html() +
        "</table>"
    );
  });
});

$(document).ready(function () {
  $("#rb").click(function () {
    $("span").removeClass("highlight");
    $("td").removeClass(
      "e1 e2 e3 e4 e5 e6 e7 e8 e9 e0 k1 k2 k3 k4 k5 k6 k7 k8 k9 k0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c0 a1 a2 a3 a4 a5 a6 a7 a8 a9 a0"
    );
  });
});

function myFunction() {
  document.getElementById("myForm").reset();
}

$(function () {
  $("#ekorc").keyup(function () {
    $(".asu:nth-child(5n+4)").each(function () {
      if ($.trim($("#ekorc").val()).length) {
        var r = $(this).text();
        var t = $("#ekorc").val();
        if (r == t) {
          $(this).addClass("e" + $(this).text());
        }
      } else {
        $(this).removeClass("e" + $(this).text());
      }
    });
  });

  $("#kepalac").keyup(function () {
    $(".asu:nth-child(5n+3)").each(function () {
      if ($.trim($("#kepalac").val()).length) {
        var r = $(this).text();
        var t = $("#kepalac").val();
        if (r == t) {
          $(this).addClass("k" + $(this).text());
        }
      } else {
        $(this).removeClass("k" + $(this).text());
      }
    });
  });

  $("#kopc").keyup(function () {
    $(".asu:nth-child(5n+2)").each(function () {
      if ($.trim($("#kopc").val()).length) {
        var r = $(this).text();
        var t = $("#kopc").val();
        if (r == t) {
          $(this).addClass("c" + $(this).text());
        }
      } else {
        $(this).removeClass("c" + $(this).text());
      }
    });
  });

  $("#asc").keyup(function () {
    $(".asu:nth-child(5n+1)").each(function () {
      if ($.trim($("#asc").val()).length) {
        var r = $(this).text();
        var t = $("#asc").val();
        if (r == t) {
          $(this).addClass("a" + $(this).text());
        }
      } else {
        $(this).removeClass("a" + $(this).text());
      }
    });
  });
});

jQuery(function ($) {
  $("#colormenu")
    .css("width", $("#colormenu").width() + 10)
    .css("height", "30px");
  var mcolpos = $("#colormenu").position().top;
  var mcolposlef = $("#colormenu").position().left;
  $(window).load(function () {
    if ($(this).scrollTop() >= mcolpos) {
      $("#colormenu").addClass("fixed").css({ left: mcolposlef });
    } else {
      $("#colormenu").removeClass("fixed").css({ left: "unset" });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= mcolpos) {
      $("#colormenu").addClass("fixed").css({ left: mcolposlef });
    } else {
      $("#colormenu").removeClass("fixed").css({ left: "unset" });
    }
  });
  $("#paitopsr").change(function () {
    var newgoto = $(this).find("option:selected").data("goto");
    if (newgoto != "") {
      window.location.href = newgoto;
    }
  });
});
