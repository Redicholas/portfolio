import "./style.css";

const html = document.documentElement;
const darkLightBtn: HTMLButtonElement | null = document.querySelector("#darkLight");
const portfolioItemsDiv: HTMLDivElement | null = document.querySelector("#portfolioItems");
const cvThumbnail: HTMLImageElement | null = document.querySelector("#cvThumbnail");
const closeCvModalBtn: HTMLButtonElement | null = document.querySelector("#closeCvModalBtn");
const cvModal: HTMLDivElement | null = document.querySelector("#cvModal");

const portfolioItems = [
  {
    title: "Pizzaleria",
    description: "HTML | Sass | TypeScript | Vite",
    imageUrl: "/img/pizzaleria.png",
    imgAlt: "image of our pizza website",
    link: "https://github.com/Medieinstitutet/fed22d-grafiska-verktyg-korsbarstomaterna",
  },
  {
    title: "Doer",
    description: "HTML | Tailwind CSS | TypeScript | Vite",
    imageUrl: "/img/Doer.png",
    imgAlt: "image of my todo list app",
    link: "https://redicholas.github.io/Doer/",
  },
  {
    title: "KaffeHörnet",
    description: "HTML | Sass | JavaScript | Vite",
    imageUrl: "./img/kaffeHornet.png",
    imgAlt: "image of our coffee corner website",
    link: "https://redicholas.github.io/KaffeHornet/",
  },
  // {
  //   title: 'To the Moon',
  //   description: 'HTML | CSS',
  //   imageUrl: '../img/to-the-moon.png',
  //   imgAlt: 'image of my space ventures website',
  //   link: 'https://github.com/Redicholas/space-ventures',
  // },
];

function toggleDarkLight() {
  if (html != null) {
    html.classList.toggle("dark");
  }
}

function showCvModal() {
  if (cvModal != null) {
    cvModal.classList.replace("hidden", "flex");
  }
}

function closeCvModal() {
  if (cvModal != null) {
    cvModal.classList.replace("flex", "hidden");
  }
}

function showPortfolioItems() {
  portfolioItems.forEach((portfolioItem) => {
    const { title, description, imageUrl, imgAlt, link } = portfolioItem;
    if (portfolioItemsDiv != null) {
      portfolioItemsDiv.innerHTML += `
      <a
        href="${link}"
        loading="lazy"
        title="${title}"
        target="_blank"
        class=""
        >
        <div class="rounded-xl max-w-md mb-10 mx-auto p-4 border dark:border-transparentWhite
        border-transparentBlack -z-10 fade-in transition-all duration-300
         hover:bg-transparentBlack dark:hover:bg-transparentWhite dark:bg-greyblack bg-yellowbeige
          ">
          <h3 class="text-center mb-2 text-2xl h-16">${title}</h3>
            <img src="${imageUrl}" alt="${imgAlt}" 
            class="rounded-xl m-auto mb-4 w-full max-w-xs border border-transparentBlack relative"
            height="100" width="100">
            <p class="text-center text-sm">${description}</p>
        </div>
      </a>
      `;
    }
  });
}

const hidden = document.querySelectorAll(".fade-in");
const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hide");
    }
  });
});

hidden.forEach((element) => {
  Observer.observe(element);
});

showPortfolioItems();
darkLightBtn?.addEventListener("click", toggleDarkLight);
cvThumbnail?.addEventListener("click", showCvModal);
closeCvModalBtn?.addEventListener("click", closeCvModal);
