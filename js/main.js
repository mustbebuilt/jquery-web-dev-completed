$(document).ready(function () {
  // show/hide extra text
  $("#showMore").on("click", function () {
    $("#moreContent").slideToggle("fast", function () {
      if ($(this).is(":hidden")) {
        $("#showMore").text("Show Details");
      } else {
        $("#showMore").text("Hide Details");
      }
    });
  });
  // burger menu
  $(".burger").on("click", function () {
    $("nav").slideToggle("fast");
  });
  // light slider
  $("#lightSlider").lightSlider({
    item: 1,
    slideMargin: 0,
    loop: true,
  });
});
