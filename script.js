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

    // Redireciona diretamente para o site de agendamento se for mobile
    if (isMobile && targetId === "agendamento") {
      window.open("https://sites.appbarber.com.br/barbeariaaraujo-ryjr", "_blank");
      return;
    }

    // Normal navegação por abas
    tabs.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(targetId).classList.add("active");

    if (targetId === "agendamento") {
      headerItemsToHide.forEach(item => item.classList.add('header-item-hidden'));
    } else {
      headerItemsToHide.forEach(item => item.classList.remove('header-item-hidden'));
    }
  });
});
