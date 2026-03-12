  // Look for .hamburger
  let menuenlaces = document.querySelector("#menuenlaces");
  let hamburger = document.querySelector("#hamburger");
  // On click
  hamburger.addEventListener("click", () => {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menuenlaces.classList.toggle("menuenlaces_JS");
    menuenlaces.style.transition = "0.5s"
    // Do something else, like open/close menu
  });