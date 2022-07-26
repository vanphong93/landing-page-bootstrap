/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class light.
Dựa vào class light, ta viết css dành riêng cho light theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class light để css dark hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class light thì toggle sẽ thêm class light vào body. Ngược lại, nếu thẻ body đang có class light thì toogle sẽ xóa class light đi.
  document.getElementById("myBody").classList.toggle("light");
};



//Swipe carousel

$(document).ready(function () {
  $(".carousel .carousel-inner").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      this.parent().carousel('next');
    },
    swipeRight: function () {
      this.parent().carousel('prev');
    },
    threshold: 0,
    tap: function (event, target) {
      window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    excludedElements: "label, button, input, select, textarea, .noSwipe"
  });

  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
    return false;
  });

});

//open menu and close menu

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
var breakpoint = window.matchMedia("(max-width: 992px)")
// Call listener function at run time
windowResize(breakpoint);
// Attach listener function on state changes
breakpoint.addEventListener("change", () => {
  console.log(breakpoint)
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



