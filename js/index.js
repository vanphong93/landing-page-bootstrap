// START STICKY NAVIGATION TOP
var $stickyNav = $("#sticky-top-nav");
$window.on("scroll", function () {
  var windowScrollTop = $window.scrollTop();
  var stickyNavTop = $stickyNav.offset().top;
  if (windowScrollTop == stickyNavTop) {
    $stickyNav.addClass("stuck");
  } else {
    $stickyNav.removeClass("stuck");
  }
});
// END STICKY NAVIGATION TOP

// START LIGHT/DARK SWITCH
document.getElementById("switchButton").onclick = function () {
  document.getElementById("myBody").classList.toggle("light");
};
// END LIGHT/DARK SWITCH

//START SWIPE CAROUSEL
$(document).ready(function () {
  // $(".carousel").carousel({
  //   interval: false,
  //   pause: true,
  // });

  $(".carousel .carousel-inner").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      this.parent().carousel("next");
    },
    swipeRight: function () {
      this.parent().carousel("prev");
    },
    threshold: 0,
    tap: function (event, target) {
      window.location = $(this).find(".carousel-item.active a").attr("href");
    },
    excludedElements: "label, button, input, select, textarea, .noSwipe",
  });

  $(".carousel .carousel-inner").on("dragstart", "a", function () {
    return false;
  });
});
//END SWIPE CAROUSEL

//START OPEN AND CLOSE MENU
var navBar = document.getElementById("navbarSupportedContent");
var openBar = document.getElementById("open");
var closeBar = document.getElementById("closer");
function windowResize(breakpoint) {
  // If media query matches
  if (breakpoint.matches) {
    navBar.classList.add("changeBar");
    openBar.classList.remove("none");
    closeBar.classList.add("none");
  } else {
    navBar.classList.remove("changeBar");
    openBar.classList.add("none");
    closeBar.classList.add("none");
  }
}
var breakpoint = window.matchMedia("(max-width: 991.98px)");
// Call listener function at run time
windowResize(breakpoint);
// Attach listener function on state changes
breakpoint.addEventListener("change", () => {
  console.log(breakpoint);
  windowResize(breakpoint);
});

openBar.addEventListener("click", function () {
  navBar.classList.remove("changeBar");
  closeBar.classList.remove("none");
  openBar.classList.add("none");
});
closeBar.addEventListener("click", function () {
  navBar.classList.add("changeBar");
  openBar.classList.remove("none");
  closeBar.classList.add("none");
});
//END OPEN AND CLOSE MENU
