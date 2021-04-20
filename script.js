var topPos = window.pageYOffset;

document.onscroll = function() {
  var newScrollPos = window.pageYOffset;
  if (newScrollPos > topPos) {
      hideNavBar();
  } else {
    showNavBar();
  }
}

function hideNavBar() {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
    return;
}

function showNavBar() {
    document.getElementsByTagName("nav")[0].style.top = "0px";
    return;
}