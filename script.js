const topPos = window.pageYOffset;
var pageSize = window.pageSize;

document.onscroll = function() {
  var newScrollPos = window.pageYOffset;
  if (newScrollPos > topPos) {
      hideNavBar();
  } else {
    showNavBar();
  }
}

window.addEventListener('resize', adjust);



function hideNavBar() {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
    return;
}

function showNavBar() {
    document.getElementsByTagName("nav")[0].style.top = "0px";
    return;
}

function adjust() {
}