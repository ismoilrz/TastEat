let translationsData = {};
let menuData = {};

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
const currentLangText = document.getElementById("current-lang");

langBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("hidden");
});

document.addEventListener("click", () => {
    langMenu?.classList.add("hidden");
});

function renderList(items, currentLang) {
    if (!items) return "";
    return items.map((item) => `
        <div class="flex items-center justify-between gap-4" data-id="${item.id}">
            <img src="${item.img}" alt="" />
            <div class="flex flex-col gap-1 shrink-0">
                <h4 class="CormorantInfant text-[#292E36] text-[30px]">${item.title[currentLang]}</h4>
                <p class="text-[20px] text-[#555] JosefinSans">${item.des[currentLang]}</p>
            </div>
            <div class="flex-1 border-b-2 border-[#AAAAAA] h-[70px] mb-2"></div>
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
    localStorage.setItem("selected_lang", lang);
    langMenu?.classList.add("hidden");
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

const PopularDishes = [
    {
        id: 1,
        src: "../assets/popular1.jpg",
        title: "Chicken Manjoori",
        price: "$15",
        des: "Dish relished by all age groups as a starter dish at parties.",
    },
    {
        id: 2,
        src: "../assets/popular2.jpg",
        title: "Hotdog",
        price: "$10",
        des: "Grilled sausage served in the slit of a partially sliced bun.",
    },
    {
        id: 3,
        src: "../assets/popular3.jpg",
        title: "Fresh Salmon",
        price: "$5",
        des: "Beat the health blues with our Super Immune Blue Juice Recipe.",
    },
    {
        id: 4,
        src: "../assets/popular4.jpg",
        title: "Veg Burger",
        price: "$10",
        des: "Burgers may be made from ingredients like beans.",
    },
]

const popularDishes = document.getElementById('popularDishes');

popularDishes.innerHTML = PopularDishes.map((item) => (
    `
        <div class="w-1/4" key="${item.id}">
            <img class="w-full" src="${item.src}" alt="${item.title}" />
            <div class="flex justify-between border-b borer-[#DCDCDC] py-[10px]">
                <h4 class="text-[30px] text-[#292E36] CormorantInfant font-bold">${item.title}</h4>
                <b class="text-[30px] text-[#292E36] CormorantInfant font-bold">${item.price}</b>
            </div>
            <p class="text-[20px] text-[#555] JosefinSans pt-[15px]">${item.des}</p>
        </div>
    `
)).join("")