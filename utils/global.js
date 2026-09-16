let translationsData = {};
let menuData = {};

const flagMap = {
    EN: "fi-us",
    UZ: "fi-uz",
    RU: "fi-ru"
};

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
const currentLangText = document.getElementById("current-lang");
const currentFlag = document.getElementById("current-flag");

langBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle("hidden");
});

document.addEventListener("click", () => {
    langMenu?.classList.add("hidden");
});

function renderList(items, currentLang) {
    if (!items) return "";
    return items.map((item) => `
        <div data-aos="fade-left" class="flex items-center justify-between gap-4" data-id="${item.id}">
            <img src="${item.img}" alt="" />
            <div class="flex flex-col gap-1 shrink-0">
                <h4 class="CormorantInfant text-[#292E36] text-[30px]">${item.title[currentLang]}</h4>
                <p class="text-[20px] text-[#555] JosefinSans">${item.des[currentLang]}</p>
            </div>
            <div class="flex-1 border-b-2 border-dashed border-[#AAAAAA] h-[70px] mb-2"></div>
            <h3 class="text-[30px] text-[#292E36] CormorantInfant shrink-0">${item.price}</h3>
        </div>
    `).join("");
}

function renderMenuSection(lang) {
    const startersContainer = document.getElementById('starters');
    const mainDishContainer = document.getElementById('mainDish');
    const dessertContainer = document.getElementById('dessert');

    if (startersContainer && menuData.starters) {
        startersContainer.innerHTML = renderList(menuData.starters, lang);
    }
    if (mainDishContainer && menuData.mainDish) {
        mainDishContainer.innerHTML = renderList(menuData.mainDish, lang);
    }
    if (dessertContainer && menuData.dessert) {
        dessertContainer.innerHTML = renderList(menuData.dessert, lang);
    }
}

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translationsData[lang] && translationsData[lang][key]) {
            el.textContent = translationsData[lang][key];
        }
    });

    renderMenuSection(lang);

    if (currentLangText) currentLangText.textContent = lang;
    if (currentFlag && flagMap[lang]) {
        currentFlag.className = `fi ${flagMap[lang]}`;
    }

    localStorage.setItem("selected_lang", lang);
    langMenu?.classList.add("hidden");
}

const PopularDishes = [
    {
        id: 1,
        src: "../assets/popular1.jpg",
        titleKey: "dish1Title",
        price: "$15",
        desKey: "dish1Des",
    },
    {
        id: 2,
        src: "../assets/popular2.jpg",
        titleKey: "dish2Title",
        price: "$10",
        desKey: "dish2Des",
    },
    {
        id: 3,
        src: "../assets/popular3.jpg",
        titleKey: "dish3Title",
        price: "$5",
        desKey: "dish3Des",
    },
    {
        id: 4,
        src: "../assets/popular4.jpg",
        titleKey: "dish4Title",
        price: "$10",
        desKey: "dish4Des",
    },
];

const popularDishesContainer = document.getElementById('popularDishes');
if (popularDishesContainer) {
    popularDishesContainer.innerHTML = PopularDishes.map((item) => `
        <div class="w-1/4 max-xl:w-[30%]" key="${item.id}">
            <img class="w-full" src="${item.src}" alt="" />
            <div class="flex justify-between border-b border-[#DCDCDC] py-[10px]">
                <h4 data-i18n="${item.titleKey}" class="text-[30px] text-[#292E36] CormorantInfant font-bold"></h4>
                <b class="text-[30px] text-[#292E36] CormorantInfant font-bold">${item.price}</b>
            </div>
            <p data-i18n="${item.desKey}" class="text-[20px] text-[#555] JosefinSans pt-[15px]"></p>
        </div>
    `).join("");
}

async function initApp() {
    try {
        const [transRes, menuRes] = await Promise.all([
            fetch('./data/translations.json'),
            fetch('./data/menu.json')
        ]);

        translationsData = await transRes.json();
        menuData = await menuRes.json();

        const savedLang = localStorage.getItem("selected_lang") || "EN";
        setLanguage(savedLang);
    } catch (error) {
        console.error("Data loading error:", error);
    }
}

initApp();


const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

function setDefaultActive() {
    const currentHash = window.location.hash; 
    
    if (currentHash) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    } else {
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[0]?.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', setDefaultActive);