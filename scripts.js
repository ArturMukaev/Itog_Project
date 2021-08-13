
// Стартовый массив с товарами
let initMas = [{
    title: "Теннисная ракетка Wilson Junior",
    description: "Ракетка для игры в большой теннис Wilson Junior",
    cost: 4000,
    category: "tennis",
    art: "R100",
    src: "./images/racket.jpg",
    alt: "Теннисная ракетка"
}, {
    title: "Футбольный мяч Brazuca",
    description: "Официальный футбольный мяч Чемпионата Мира 2014 года в Бразилии",
    cost: 6000,
    category: "football",
    art: "F101",
    src: "./images/ball.jpg",
    alt: "Футбольный мяч"
}, {
    title: "Баскетбольный мяч",
    description: "Баскетбольный мяч Demix средний размер для игры в баскетбол",
    cost: 1000,
    category: "basketball",
    art: "B102",
    src: "./images/basketball.jpg",
    alt: "Баскетбольный мяч"
}, {
    title: "Ролик для пресса",
    description: "Ролик для пресса подходит для занятий дома",
    cost: 2000,
    category: "home",
    art: "H103",
    src: "./images/rolik.jpg",
    alt: "Ролик для пресса"
},{
    title: "Коврик",
    description: "Коврик подходит для занятий спортом дома",
    cost: 900,
    category: "home",
    art: "K104",
    src: "./images/Carpet.jpg",
    alt: "Коврик для занятий спортом"
},{
    title: "Напульсник NIKE",
    description: "Напульсник NIKE для игры в теннис",
    cost: 1200,
    category: "tennis",
    art: "N105",
    src: "./images/napuls.jpg",
    alt: "Напульсник NIKE красного цвета"
},{
    title: "Бутсы Adidas Inferno",
    description: "Бутсы Adidas Inferno подходят для игры на любой траве",
    cost: 8000,
    category: "football",
    art: "F106",
    src: "./images/trainers.jpg",
    alt: "Бутсы Adidas Inferno"
},{
    title: "Кроссовки Air Jordan",
    description: "Кроссовки Air Jordan 1 retro подходят для игры в баскетбол",
    cost: 5400,
    category: "basketball",
    art: "B107",
    src: "./images/jordan.jpg",
    alt: "Баскетбольные кроссовки"
},{
    title: "Майка Air Jordan",
    description: "Майка Air Jordan подходит для игры в баскетбол",
    cost: 3200,
    category: "basketball",
    art: "B108",
    src: "./images/jordan1.jpg",
    alt: "Баскетбольная майка"
},{
    title: "Юбка Nike",
    description: "Юбка Nike подходит для игры в теннис",
    cost: 2100,
    category: "tennis",
    art: "N109",
    src: "./images/skirt.jpg",
    alt: "Юбка NIKE"   
},{
    title: "Футболка Nike",
    description: "Футболка Nike подходит для игры в теннис",
    cost: 3100,
    category: "tennis",
    art: "N110",
    src: "./images/shirt.jpg",
    alt: "Футболка NIKE"   
},{
    title: "Тренажер Степпер",
    description: "Степпер подходит для занятий спортом дома",
    cost: 9000,
    category: "home",
    art: "K111",
    src: "./images/step.jpg",
    alt: "Степпер для занятий спортом"
}]



// Функция, срабатывающая при загрузке страницы
function startLoading() {
    //Получаем кнопки в навигации
    let tennis = document.getElementById("tennis");
    let football = document.getElementById("football");
    let basketball = document.getElementById("basketball");
    let home = document.getElementById("home");
    let basket_img = document.getElementById("basket_img");
    let all = document.getElementById("all");
    let search = document.getElementById("search");

    //Скрываем корзину в зависимости от нажатия кнопки
    basket_img.addEventListener("click", function () {
        document.getElementById("basket").classList.toggle("hidden");
    });

    //Функция для показа товаров по категориям
    function sort() {
        let mas = document.getElementsByClassName("product");
        let i;
        for (i = 0; i < mas.length; i++) {
            if (mas[i].getAttribute("category") !== this.id) {
                if (this.id === "all") {
                    mas[i].classList.remove("hidden");
                } else {
                    mas[i].classList.add("hidden");
                }
            }
            else {
                mas[i].classList.remove("hidden");
            }
        }
    }
    tennis.addEventListener("click", sort);
    football.addEventListener("click", sort);
    home.addEventListener("click", sort);
    basketball.addEventListener("click", sort);
    all.addEventListener("click", sort);


    //Функция для фильтрации товаров по названию
    search.addEventListener("input", function () {
        let pattern1 = new RegExp(this.value, "gi");
        let mas = document.getElementsByClassName("product");
        let i;
        for (i = 0; i < mas.length; i++) {
            if (pattern1.test(mas[i].getAttribute("title"))) {
                // оставляем подходящий продукт на экране
                mas[i].classList.remove("hidden");
            } else {
                // скрываем (не соотв.)
                mas[i].classList.add("hidden");
            }
        }
    });

    //Заполняем страницу карточками с товарами
    let card;
    let card_row;
    let card_col1;
    let img;
    let card_col2;
    let card_body;
    let card_title;
    let card_text1;
    let card_text2;
    let card_text3;
    let button;
    for (let key in initMas) {
        card = document.createElement("div");
        card.className = "product";
        card.id = "card_" + String(initMas[key].art);
        card.setAttribute("title", initMas[key].title);
        card.setAttribute("category", String(initMas[key].category));
        card.setAttribute("price", initMas[key].cost);
        card.setAttribute("art", initMas[key].art);
        card_row = document.createElement("div");
        card_row.className = "row";
        card.append(card_row);
        card_col1 = document.createElement("div");
        card_col1.className = "col-md-4";
        card_row.append(card_col1);
        card_col2 = document.createElement("div");
        card_col2.className = "col-md-8";
        card_row.append(card_col2);
        img = document.createElement("img");
        img.className = "img-fluid rounded-start";
        img.src = initMas[key].src;
        img.alt = initMas[key].alt;
        card_col1.append(img);
        card_body = document.createElement("div");
        card_body.className = "card-body";
        card_col2.append(card_body);
        card_title = document.createElement("h2");
        card_title.className = "card-title";
        card_title.innerHTML = initMas[key].title;
        card_body.append(card_title);
        card_text1 = document.createElement("p");
        card_text1.className = "card-text";
        card_text1.innerHTML = "<b>Описание: </b>" + String(initMas[key].description);
        card_body.append(card_text1);
        card_text2 = document.createElement("p");
        card_text2.className = "card-text";
        card_text2.innerHTML = "<b>Цена: </b>" + String(initMas[key].cost) + "р";
        card_body.append(card_text2);
        card_text3 = document.createElement("p");
        card_text3.className = "card-text";
        card_text3.innerHTML = "<b>Артикул: </b>" + String(initMas[key].art);
        card_body.append(card_text3);
        button = document.createElement("button");
        button.id = String(initMas[key].art);
        button.className = "add";
        button.innerHTML = "Добавить";
        card_body.append(button);
        document.getElementsByTagName("main")[0].append(card);


        //Функция для добавления товара в корзину
        button.addEventListener("click", function () {
            let our_elem = document.getElementById("card_" + this.id);
            let obj = {
                title: our_elem.getAttribute("title"),
                art: our_elem.getAttribute("art"),
                price: our_elem.getAttribute("price"),
                colvo: 1
            }
            // Если в корзине такой объект есть
            if (localStorage[String(obj.art)]) {
                let my_obj = JSON.parse(localStorage.getItem(String(obj.art)));
                localStorage.setItem(String(obj.art), JSON.stringify({ ...my_obj, colvo: my_obj.colvo + 1 }));
                let td2 = document.getElementById("td2_" + String(obj.art));
                td2.innerHTML = String(my_obj.colvo + 1);
                let td3 = document.getElementById("td3_" + String(obj.art));
                td3.innerHTML = String((my_obj.colvo + 1) * my_obj.price);
                let itog_col = document.getElementById("itog2");
                let init = Number(itog_col.innerHTML);
                itog_col.innerHTML = String(init + 1);
                let itog_price = document.getElementById("itog3");
                let init2 = Number(itog_price.innerHTML);
                itog_price.innerHTML = String(init2 + Number(my_obj.price));
                // Если в корзине нет такого объекта
            } else {
                // Добавляем строку с товаром
                let basket = document.getElementById("table");
                localStorage.setItem(String(obj.art), JSON.stringify(obj));
                let tr = document.createElement("tr");
                tr.id = "tr_" + String(obj.art);
                let td1 = document.createElement("td");
                td1.innerHTML = String(obj.title);
                let td2 = document.createElement("td");
                td2.innerHTML = String(obj.colvo);
                td2.id = "td2_" + String(obj.art);
                let td3 = document.createElement("td");
                td3.innerHTML = String(obj.colvo * obj.price);
                td3.id = "td3_" + String(obj.art);
                let td4 = document.createElement("td");
                let button = document.createElement("button");
                button.setAttribute("key", obj.art);
                button.innerHTML = "-";
                button.addEventListener("click", minus);
                td4.append(button);
                tr.append(td1, td2, td3, td4);
                basket.append(tr);


                // Добавляем итоговую строку
                let itog_col = document.getElementById("itog2");
                let init = Number(itog_col.innerHTML);
                let itog_price = document.getElementById("itog3");
                let init2 = Number(itog_price.innerHTML);
                document.getElementById("itog").remove();


                let tr1 = document.createElement("tr");
                tr1.id = "itog";
                td11 = document.createElement("td");
                td11.innerHTML = "<b>Итого</b>";
                td22 = document.createElement("td");
                td22.innerHTML = String(init + 1);
                td22.id = "itog2";
                td33 = document.createElement("td");
                td33.innerHTML = String(init2 + Number(obj.price));
                td33.id = "itog3";
                td44 = document.createElement("td");
                td44.innerHTML = " ";
                tr1.append(td11, td22, td33, td44);
                basket.append(tr1);

            }
        })
    }
}


// Функция для убавления товара из корзины
function minus() {
    let my_key = String(this.getAttribute("key"));
    let my_obj = JSON.parse(localStorage.getItem(my_key));
    if (my_obj.colvo === 1) {
        localStorage.removeItem(String(this.getAttribute("key")));
        let tr = document.getElementById("tr_" + my_key);
        tr.remove();
    } else {
        localStorage.setItem(my_key, JSON.stringify({ ...my_obj, colvo: my_obj.colvo - 1 }));
        let td2 = document.getElementById("td2_" + my_key);
        td2.innerHTML = String(my_obj.colvo - 1);
        let td3 = document.getElementById("td3_" + my_key);
        td3.innerHTML = String((my_obj.colvo - 1) * my_obj.price);
    }
    let itog_col = document.getElementById("itog2");
    let init = Number(itog_col.innerHTML);
    itog_col.innerHTML = String(init - 1);
    let itog_price = document.getElementById("itog3");
    let init2 = Number(itog_price.innerHTML);
    itog_price.innerHTML = String(init2 - Number(my_obj.price));
}


//Функция для заполнения корзины при загрузке
function fillBasket() {
    let basket = document.getElementById("table");
    let tr;
    let td1;
    let td2;
    let td3;
    let td4;
    let i;
    let key;
    let item;
    let button;
    let itog_col = 0;
    let itog_price = 0;
    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        item = JSON.parse(localStorage.getItem(key));
        tr = document.createElement("tr");
        tr.id = "tr_" + String(key);
        td1 = document.createElement("td");
        td1.innerHTML = String(item.title);
        td2 = document.createElement("td");
        itog_col = itog_col + Number(item.colvo);
        itog_price = itog_price + Number(item.colvo * item.price);
        td2.innerHTML = String(item.colvo);
        td2.id = "td2_" + String(key);
        td3 = document.createElement("td");
        td3.innerHTML = String(item.colvo * item.price);
        td3.id = "td3_" + String(key);
        td4 = document.createElement("td");
        button = document.createElement("button");
        button.setAttribute("key", key);
        button.innerHTML = "-";
        button.addEventListener("click", minus);
        td4.append(button);
        tr.append(td1, td2, td3, td4);
        basket.append(tr);
    }
    // Создаем итоговую строку
    tr = document.createElement("tr");
    tr.id = "itog";
    td1 = document.createElement("td");
    td1.innerHTML = "<b>Итого</b>";
    td2 = document.createElement("td");
    td2.innerHTML = String(itog_col);
    td2.id = "itog2";
    td3 = document.createElement("td");
    td3.innerHTML = String(itog_price);
    td3.id = "itog3";
    td4 = document.createElement("td");
    td4.innerHTML = " ";
    tr.append(td1, td2, td3, td4);
    basket.append(tr);
}




window.addEventListener("load", fillBasket);

window.addEventListener("load", startLoading);