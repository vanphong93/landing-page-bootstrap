var $window = $(window);
var $videoWrap = $(".sticky-video-wrap");
var $video = $(".sticky-video");
var videoHeight = $video.outerHeight();

// START video close button
$("#close-sticky-video").on("click", function () {
  $("#sticky-video").removeClass("visible");
  $(".sticky-video-iframe").each(function () {
    this.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  });
});
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
