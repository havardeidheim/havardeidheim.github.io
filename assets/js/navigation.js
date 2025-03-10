function addNaviagation() {
  let header = document.querySelector(".header");
  let navigation = document.querySelector(".navigation");
  let openNavigationButton = document.querySelector(".button-open-navigation");
  let closeNavigationButton = document.querySelector(
    ".button-close-navigation"
  );

  openNavigationButton.addEventListener("click", () => {
    navigation.classList.add("open");
    header.classList.add("navigation-open");
    openNavigationButton.classList.add("hidden");
    closeNavigationButton.classList.remove("hidden");
  });

  closeNavigationButton.addEventListener("click", () => {
    navigation.classList.remove("open");
    header.classList.remove("navigation-open");
    openNavigationButton.classList.remove("hidden");
    closeNavigationButton.classList.add("hidden");
  });
}

addNaviagation();
