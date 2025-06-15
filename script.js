const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

const headerItemsToHide = [
  document.querySelector('.logo-img'),
  document.querySelector('.logo'),
  document.querySelector('.bio')
];

const isMobile = window.innerWidth < 768;

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-tab");

    // Normal navegação por abas
    tabs.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(targetId).classList.add("active");

  });
});
