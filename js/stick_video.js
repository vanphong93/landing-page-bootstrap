var $window = $(window);
var $videoWrap = $(".sticky-video-wrap");
var $video = $(".sticky-video");
var videoHeight = $video.outerHeight();

// START video close button
document.getElementById("close-sticky-video").onclick = function () {
  document.getElementById("sticky-video").classList.remove("visible");
};
// END video close button

// START video sticky scroll
$window.on("scroll", function () {
  var windowScrollBottom = $window.scrollTop() + $window.height();
  var videoMiddle = videoHeight / 2 + $videoWrap.offset().top;

  if (windowScrollBottom <= videoMiddle) {
    $videoWrap.height(videoHeight);
    $video.addClass("stuck");
  } else {
    $videoWrap.height("auto");
    $videoWrap.addClass("visible");
    $video.removeClass("stuck");
  }
});
// END video sticky scroll
