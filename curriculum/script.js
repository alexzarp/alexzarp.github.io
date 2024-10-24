function age(id) {
  var birth = new Date(2000, 9, 17);
  var today = new Date();
  var age = today.getFullYear() - birth.getFullYear();
  var m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  document.getElementById(id).textContent = age;
}

function exp(id) {
  var birth = new Date(2019, 0, 1);
  var today = new Date();
  var exp = today.getFullYear() - birth.getFullYear();
  document.getElementById(id).textContent = exp;
}

window.addEventListener("scroll", function () {
  var button = document.getElementById("print");
  var footer = document.getElementById("down");
  var footerHeight = footer.offsetHeight;
  var pageHeight = document.body.scrollHeight;
  var scrollPosition =
    window.scrollY || window.scrollY || document.documentElement.scrollTop;
  var windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowWidth < 600) {
    if (scrollPosition + windowHeight >= pageHeight - footerHeight) {
      var offset = scrollPosition + windowHeight - (pageHeight - footerHeight);
      button.style.bottom = 0.5 - offset + "rem";
    } else {
      button.style.bottom = ".5rem";
    }
  } else {
    button.style.bottom = ".5rem";
  }
});
