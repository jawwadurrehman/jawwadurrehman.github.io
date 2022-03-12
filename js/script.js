document.getElementById("mobile-nav-toggle-btn").onclick = (e) => {
  e.preventDefault();
  document.querySelector("#mobile-nav ul").classList.toggle("vis-none");
};
const projectBoxes = document.getElementById("project-boxes");
var scrollInterval;
var maxScrollLeft = projectBoxes.scrollWidth - projectBoxes.clientWidth;
console.log(maxScrollLeft);
projectBoxes.onmouseenter = (e) => {
  if (scrollInterval != "") {
    if (projectBoxes.scrollLeft != maxScrollLeft) {
      scrollInterval = setInterval(() => {
        projectBoxes.scrollLeft += 1;
      }, 10);
    } else {
      scrollInterval = setInterval(() => {
        projectBoxes.scrollLeft -= 1;
      }, 10);
    }
  }
};
projectBoxes.onmouseleave = (e) => {
  clearInterval(scrollInterval);
};
