const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

const headerItemsToHide = [
  document.querySelector('.logo-img'),
  document.querySelector('.logo'),
  document.querySelector('.bio')
];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    const targetId = tab.getAttribute("data-tab");
    document.getElementById(targetId).classList.add("active");

    if (targetId === "agendamento") {
      headerItemsToHide.forEach(item => item.classList.add('header-item-hidden'));
    } else {
      headerItemsToHide.forEach(item => item.classList.remove('header-item-hidden'));
    }
  });
});
