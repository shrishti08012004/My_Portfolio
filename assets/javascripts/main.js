$(document).ready(function () {
  // Navigation click
  $("#main-nav a").click(function () {
    $("section").removeClass("show");
    var target = $(this).attr("href");
    $(target).addClass("show");
  });

  // Typed effect
  $(".type-effect").typed({
    strings: ["Full Stack Developer", "Data Scientist", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});
