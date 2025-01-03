
function scrollToSection(section) {
  const sectionElement = document.getElementById(section);
  window.scrollTo({
    top: sectionElement.offsetTop - 50,
    behavior: "smooth"
  });
}
