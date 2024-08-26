function changeTheme() {
  if (themeIcon.classList.contains("fa-sun")) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

function setDarkTheme() {
  var themeButton = document.getElementById("themeButton");
  var themeIcon = document.getElementById("themeIcon");
  var navElement = document.querySelector("nav");
  var footerElement = document.querySelector("footer");

  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");

  themeButton.innerHTML =
    'Cambiar tema <i class="fa-solid fa-moon" id="themeIcon"></i>';

  navElement.classList.remove("background-light");
  navElement.classList.add("background-dark");
  navElement.classList.add("navbar-dark");

  footerElement.classList.remove("background-light");
  footerElement.classList.add("background-dark");

  localStorage.setItem("theme", "dark");
}

function setLightTheme() {
  var themeButton = document.getElementById("themeButton");
  var themeIcon = document.getElementById("themeIcon");
  var navElement = document.querySelector("nav");
  var footerElement = document.querySelector("footer");

  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");

  themeButton.innerHTML =
    'Cambiar tema <i class="fa-solid fa-sun" id="themeIcon"></i>';

  navElement.classList.remove("background-dark");
  navElement.classList.add("background-light");
  navElement.classList.remove("navbar-dark");

  footerElement.classList.remove("background-dark");
  footerElement.classList.add("background-light");

  localStorage.setItem("theme", "light");
}
