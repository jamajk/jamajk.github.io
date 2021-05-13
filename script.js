const topPos = window.pageYOffset;
var pageSize = window.pageSize;
const image = document.getElementById("banner");

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
  document.getElementById("logo").style.position = "fixed";
  document.getElementById("logo").style.top = "20px";
  document.getElementById("logo").style.borderBottom = "3px solid snow";
  // document.getElementById("logo").style.padding = "0";
  return;
}

function showNavBar() {
  document.getElementsByTagName("nav")[0].style.top = "0px";
  document.getElementById("logo").style.position = "static";
  document.getElementById("logo").style.border = "none";
  return;
}