let hamburgerIsOpen = false;
const openHamburger = () => {
  let hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );
  if (!hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
};
