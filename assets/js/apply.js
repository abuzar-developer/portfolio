
$(document).ready(function() {
  var current_fs, next_fs, previous_fs;
  var animating = false;

  $(".next").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    current_fs.animate({ opacity: 0 }, 400, function() {
      current_fs.hide();
      next_fs.css({ opacity: 0, display: "block" }).animate({ opacity: 1 }, 400);
      animating = false;
    });
  });

  $(".previous").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    current_fs.animate({ opacity: 0 }, 400, function() {
      current_fs.hide();
      previous_fs.css({ opacity: 0, display: "block" }).animate({ opacity: 1 }, 400);
      animating = false;
    });
  });

  $(".submit").click(function() {
    // Handle form submission here
    // For now, prevent the default form submission behavior
    return false;
  });
});
