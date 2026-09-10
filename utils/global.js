// // 1. Barcha tarjimalar obyekti
// const translations = {
//     EN: {
//         call: "Call - 123 456 789",
//         reservation: "Reservation",
//         home: "Home",
//         about: "About Us",
//         menu: "Our Menu",
//         pages: "Pages",
//         blog: "Blog",
//         contact: "Contact Us",
//         welcome: "Welcome to Restaurant",
//         welcomedec: "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.",
//         locateUs: "Locate Us",
//         locateUsdec: "Riverside 25, San Diego, California",
//         openhours: "Open Hours",
//         openhoursdec: "Mon To Fri 9:00 AM - 9:00 PM",
//         deliciousStory: "Delicious Story",
//         palanFor: "Plan for this restaurant to deliver healthy food.",
//         happly: "Happily in the fourth year by fulfill the motto.",
//     },
//     UZ: {
//         call: "Aloqa - 123 456 789",
//         reservation: "Bron qilish",
//         home: "Bosh sahifa",
//         about: "Biz haqimizda",
//         menu: "Menyu",
//         pages: "Sahifalar",
//         blog: "Blog",
//         contact: "Bog'lanish",
//         welcome: "Restoranga xush kelibsiz",
//         welcomedec: "Odamlar, taomlar va ajoyib joylar do'stlar va oila a'zolari bilan birga vaqt o'tkazish uchun eng zo'r joydir.",
//         locateUs: "Bizni toping",
//         locateUsdec: "Riverside 25, San-Diego, Kaliforniya",
//         openhours: "Ish vaqti",
//         openhoursdec: "Dushanbadan jumagacha soat 9:00 dan 21:00 gacha",
//         deliciousStory: "Mazali hikoya",
//         palanFor: "Ushbu restoran uchun sog'lom taomlarni yetkazib berishni rejalashtiring.",
//         happly: "To'rtinchi yilda shiorni bajarish orqali baxtli bo'ling.",
//     },
//     RU: {
//         call: "Звонок - 123 456 789",
//         reservation: "Бронирование",
//         home: "Главная",
//         about: "О нас",
//         menu: "Меню",
//         pages: "Страницы",
//         blog: "Блог",
//         contact: "Контакты",
//         welcome: "Добро пожаловать в ресторан!",
//         welcomedec: "Люди, еда и отличное расположение делают это место идеальным для того, чтобы собраться с друзьями и семьей и прекрасно провести время.",
//         locateUs: "Найдите нас",
//         locateUsdec: "25 Риверсайд, Сан-Диего, Калифорния",
//         openhours: "Часы работы",
//         openhoursdec: "Пн-Пт 9:00 - 21:00",
//         deliciousStory: "Вкусная история",
//         palanFor: "В соответствии с планом этот ресторан будет доставлять здоровую пищу.",
//         happly: "С радостью на четвертом году мы исполнили свой девиз.",
//     }
// };

// const langBtn = document.getElementById("lang-btn");
// const langMenu = document.getElementById("lang-menu");
// const currentLangText = document.getElementById("current-lang");

// langBtn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     langMenu.classList.toggle("hidden");
// });

// document.addEventListener("click", () => {
//     langMenu.classList.add("hidden");
// });

// function setLanguage(lang) {
//     document.querySelectorAll("[data-i18n]").forEach(el => {
//         const key = el.getAttribute("data-i18n");
//         if (translations[lang][key]) {
//             el.textContent = translations[lang][key];
//         }
//     });

//     currentLangText.textContent = lang;
//     localStorage.setItem("selected_lang", lang);
//     langMenu.classList.add("hidden");
// }

// const savedLang = localStorage.getItem("selected_lang") || "EN";
// setLanguage(savedLang);

// // ////////////////////////////////////////////////////////////////////////////////////

// const Starters = [
//     {
//         id: 1,
//         img: "./assets/starters1.png",
//         title: "Raw Scallops from Erquy",
//         des: "Shuck the scallop to that used for oysters",
//         price: "$40"
//     },
//     {
//         id: 2,
//         img: "./assets/starters2.png",
//         title: "Spring Roll",
//         des: "Add oil to a hot pan spring onion whites",
//         price: "$20"
//     },
//     {
//         id: 3,
//         img: "./assets/starters3.png",
//         title: "French Onion Soup",
//         des: "Wheat flour, apple cider vinegar, bread",
//         price: "$25"
//     },
//     {
//         id: 4,
//         img: "./assets/starters4.png",
//         title: "Tomato Bruschetta",
//         des: "Bread, olive oil, garlic, black pepper",
//         price: "$30"
//     },
// ]

// const MainDish = [
//      {
//         id: 1,
//         img: "./assets/dish1.png",
//         title: "Grilled Salmon with Dill Sauce",
//         des: "Brown sugar, salmon fillet, Dijon mustard",
//         price: "$40"
//     },
//     {
//         id: 2,
//         img: "./assets/dish2.png",
//         title: "Roast Beef with Vegetable",
//         des: "Green beans, rib eye, olive oil, beef",
//         price: "$20"
//     },
//     {
//         id: 3,
//         img: "./assets/dish3.png",
//         title: "Marrkesh Vegetetarian Curruy",
//         des: "Sweet potato, eggplant, garbanzo bean",
//         price: "$25"
//     },
//     {
//         id: 4,
//         img: "./assets/dish4.png",
//         title: "Spicy Vegan Potato Curry",
//         des: "Coconut milk, beans, potatoes, curry powder",
//         price: "$35"
//     },
// ]

// const Dessert = [
//      {
//         id: 1,
//         img: "./assets/dess1.png",
//         title: "Apple Pie with Cream",
//         des: "Whipping cream, egg white, cinnamon",
//         price: "$15"
//     },
//     {
//         id: 2,
//         img: "./assets/dess2.png",
//         title: "Lemon Meringue Pie",
//         des: "Frozen pie crust, meringue, lemon",
//         price: "$30"
//     },
// ]


// const starters = document.getElementById('starters');
// const mainDish = document.getElementById('mainDish');
// const dessert = document.getElementById('dessert');

// starters.innerHTML = Starters.map((item) => `
//     <div class="flex items-center justify-between gap-4" data-id="${item.id}">
//         <img src="${item.img}" alt="Img" />
        
//         <div class="flex flex-col gap-1 shrink-0">
//             <h4 class="CormorantInfant text-[#292E36] text-[30px]">${item.title}</h4>
//             <p class="text-[20px] text-[#555] JosefinSans">${item.des}</p>
//         </div>

//         <div class="flex-1 border-b-2 border-[#AAAAAA] h-[70px] mb-2"></div>

//         <h3 class="text-[30px] text-[#292E36] CormorantInfant shrink-0">${item.price}</h3>
//     </div>
// `).join('');

// mainDish.innerHTML = MainDish.map((item) => `
//     <div class="flex items-center justify-between gap-4" data-id="${item.id}">
//         <img src="${item.img}" alt="Img" />
        
//         <div class="flex flex-col gap-1 shrink-0">
//             <h4 class="CormorantInfant text-[#292E36] text-[30px]">${item.title}</h4>
//             <p class="text-[20px] text-[#555] JosefinSans">${item.des}</p>
//         </div>

//         <div class="flex-1 border-b-2 border-[#AAAAAA] h-[70px] mb-2"></div>

//         <h3 class="text-[30px] text-[#292E36] CormorantInfant shrink-0">${item.price}</h3>
//     </div>
// `).join('');

// dessert.innerHTML = Dessert.map((item) => `
//      <div class="flex items-center justify-between gap-4" data-id="${item.id}">
//         <img src="${item.img}" alt="Img" />
        
//         <div class="flex flex-col gap-1 shrink-0">
//             <h4 class="CormorantInfant text-[#292E36] text-[30px]">${item.title}</h4>
//             <p class="text-[20px] text-[#555] JosefinSans">${item.des}</p>
//         </div>

//         <div class="flex-1 border-b-2 border-[#AAAAAA] h-[70px] mb-2"></div>

//         <h3 class="text-[30px] text-[#292E36] CormorantInfant shrink-0">${item.price}</h3>
//     </div>
// `).join('')

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

// Reusable card template generator
function renderList(items, currentLang) {
    if (!items) return "";
    return items.map((item) => `
        <div class="flex items-center justify-between gap-4" data-id="${item.id}">
            <img src="${item.img}" alt="${item.title[currentLang] || ''}" />
            <div class="flex flex-col gap-1 shrink-0">
                <h4 class="CormorantInfant text-[#292E36] text-[30px]">${item.title[currentLang]}</h4>
                <p class="text-[20px] text-[#555] JosefinSans">${item.des[currentLang]}</p>
            </div>
            <div class="flex-1 border-b-2 border-[#AAAAAA] h-[70px] mb-2"></div>
            <h3 class="text-[30px] text-[#292E36] CormorantInfant shrink-0">${item.price}</h3>
        </div>
    `).join("");
}

// Render dynamic elements
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

// Core switch language function
function setLanguage(lang) {
    // 1. Static text update
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translationsData[lang] && translationsData[lang][key]) {
            el.textContent = translationsData[lang][key];
        }
    });

    // 2. Dynamic menu items update
    renderMenuSection(lang);

    // 3. UI and State update
    if (currentLangText) currentLangText.textContent = lang;
    localStorage.setItem("selected_lang", lang);
    langMenu?.classList.add("hidden");
}

// Initial Data Fetcher
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

// Boot application
initApp();