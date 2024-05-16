
let nameAnswer = prompt("Привет, путник. Это древняя русь, а ты русс. У тебя цель найти меч Гатса для уничтожения ящеров. Назови своё имя:"),
    hero = {
        name: nameAnswer,
        health: 100,
        armor: 100,
        power: 35,
        status: "Русс",
        money: 1000,
        gps: "Город",
    },
    name = document.getElementById("name"),
    health = document.getElementById("health"),
    armor = document.getElementById("armor"),
    power = document.getElementById("power"),
    status = document.getElementById("status"),
    money = document.getElementById("money"),
    gps = document.getElementById("gps"),
    hospital = document.getElementById("hospital"),
    shop = document.getElementById("shop"),
    tavern = document.getElementById("tavern"),
    travel = document.getElementById("travel"),
    fight = document.getElementById("fight"),
    inCity = document.getElementById("inCity"),
    outside = document.getElementById("outside"),
    inTavern = document.getElementById("inTavern"),
    toCity = document.getElementById("toCity"),
    getDrunk = document.getElementById("getDrunk"),
    sleep = document.getElementById("sleep"),
    game = document.getElementById("game"),
    tavernToCity = document.getElementById("tavernToCity"),
    frend = document.getElementById("frend"),
    ribalca = document.getElementById("ribalca"),
    bg = document.querySelector(".bg"),
    bg_message = document.querySelector(".bg_message"),
    lastAction = document.querySelector(".box_item_status");

console.log(hero);

function update() {
    name.textContent = hero.name;
    health.textContent = hero.health;
    armor.textContent = hero.armor;
    power.textContent = hero.power;
    status.textContent = hero.status;
    money.textContent = hero.money;
    gps.textContent = hero.gps;

    if (hero.gps == "Город") {
        inCity.style.display = "block";
        outside.style.display = "none";
        inTavern.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/city.png)";
    }
    else if (hero.gps == "Лес") {
        inCity.style.display = "none";
        outside.style.display = "block";
        inTavern.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/forest.png)";
    }
    else if (hero.gps == "Таверна") {
        inCity.style.display = "none";
        outside.style.display = "none";
        inTavern.style.display = "block";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/tavern.png)";
    };
};
update();
travel.addEventListener("click", function () {
    hero.gps = "Лес";
    lastAction.textContent = (hero.name + " идёт бить ящеров в лесу");
    update();
})

tavernToCity.addEventListener("click", function () {
    hero.gps = "Город";
    lastAction.textContent = (hero.name + " возвращается в город");
    update();
})

toCity.addEventListener("click", function () {
    hero.gps = "Город";
    lastAction.textContent = (hero.name + " возвращается в город");
    update();
})

tavern.addEventListener("click", function () {
    hero.gps = "Таверна";
    lastAction.textContent = (hero.name + " идёт в таверну отдохнуть");
    update();
})


ribalca.addEventListener("click", function () {
    pribal = Math.floor(Math.random(0, 100) * 100);
    if (pribal >= 0 & pribal <= 10) {
        alert("Рыба была ужастной и из-за этого вы получили всего-лишь  " + pribal + " златых");
    }

    else if (pribal >= 10 & pribal <= 50) {
        alert("Рыба была самой обычной и из-за этого вы получили самые обычные " + pribal + " златых");
    }

    else if (pribal >= 50 & pribal <= 75) {
        alert("Рыба была высшего сорта, поэтому получайте свои законные " + pribal + " златых");
    }

    else if (pribal >= 75 & pribal <= 100) {
        alert("Это что мегаладон или откуда такие большие " + pribal + " златых");
    }

    if (hero.health <= 0) {
        alert("Та долго рыбачил и потерял сознание, Олег вызвал помощь из города. Тебя немного вылечили. За лечение ты заплатил 100 златых");
        hero.money = hero.money - 100;
        hero.gps = "Город";
        hero.health = 50;
        update();
    }  

    hero.money = hero.money + pribal;
    hero.health = hero.health - 10;
    update();
})


game.addEventListener("click", function () {
    healthOfProtivnic = Math.floor(Math.random(0, 100) * 100);
    alert("Сила твоего соперника " + healthOfProtivnic);
    if (hero.power > healthOfProtivnic) {
        alert("Твой POWER больше соперника получай 100 златых")
        hero.money = hero.money + 100;
        update();
    }

    if (hero.power < healthOfProtivnic) {
        alert("Твой POWER меньше соперника минус 100 златых и минус 10 здоровья")
        hero.money = hero.money - 100;
        hero.health = hero.health - 10;
        update();
    }

    if (hero.power == healthOfProtivnic) {
        alert("Твой POWER такой же как у  соперника. Удивительно! Но ты и не в минусе, и не в плюсе")
        hero.money = hero.money - 100;
        hero.health = hero.health - 10;
        update();
    }

    else if (hero.health <= 0) {
        alert("Тебя обнаружили без сознания избитым! Украдены 250 златых! Из таверны выгнали тоже");
        hero.gps = "Город";
        hero.money-=250;
        update()
    }
})

shop.addEventListener("click", function () {
    vipen = prompt("Приветсвуем вас в нашем магазине, чтобы купить оружие впишите его цифру. 1) Алебарда бомжа 1000 златых 45 силы, 2) Топор Виталия сына Алексея 3000 златых 60 силы, 3) Парные мечи великого богатыря Михаила 5000 златых 75 силы, 4)Дубинка неизвестного 7500 златых 85 силы, 5) МЕЧ ГАТСА 10000 златых 100силы")
    if (hero.money >= 1000 & vipen == 1) {
        hero.money = hero.money - 1000;
        hero.power = 45;
        alert("Твоя сила увеличина")
        update();
    }

    else if (hero.money >= 3000 & vipen == 2) {
        hero.money = hero.money - 3000;
        hero.power = 60;
        alert("Твоя сила увеличина")
        update();
    }

    else if (hero.money >= 5000 & vipen == 3) {
        hero.money = hero.money - 5000;
        hero.power = 75;
        alert("Твоя сила увеличина")
        update();
    }   
    
    else if (hero.money >= 7500 & vipen == 4) {
        hero.money = hero.money - 7500;
        hero.power = 85;
        alert("Твоя сила увеличина")
        update();
    }  

    else if (hero.money >= 10000 & vipen == 5) {
        hero.money = hero.money - 10000;
        hero.power = 100;
        alert("Твоя сила увеличина")
        alert("Поздравляем! Моя короткая тупая игра закончена! Самый сильный меч получен здесь больше нечего делать")
        update();
    }  

    else if (hero.money < 1000){
        alert("Ушёл от сюда, нищий")
    }
})

getDrink.addEventListener("click", function () {
    if (hero.money < 50){
        alert("Ушёл от сюда, нищий")
    }


    else if (hero.money >= 50 & hero.health < 100) {
        alert("Здоровье востановлено")
        hero.money = hero.money - 50;
        hero.health = 100;
        update();
    }

    else if (hero.health == 100){
        alert("У тебя здоровье и так на максимум!")
    }
})

fight.addEventListener("click", function () {
    isher = {
        health: Math.floor(Math.random(2, 100) * 100),
        damage: Math.floor(Math.random(2, 100) * 100),
    }
    
    while (hero.health > 0 && isher.health > 0){
        
        alert("Здоровье ящера " + isher.health + " а урон " + isher.damage);
        if (hero.armor >= isher.damage) {
            hero.armor-=isher.damage;
            alert("Здоровье ящера " + isher.health + " а урон " + isher.damage);
            update();

        }

        
         

        else if (hero.armor < isher.damage){
            let allHealthHero = hero.health + hero.armor;
        allHealthHero-=isher.damage;
        hero.health = allHealthHero;
        isher.health-=hero.power;
        alert("Здоровье ящера " + isher.health + " а урон " + isher.damage);
        update();
 
        } 
    }

     if (isher.health <= 0) {
        alert("Ты победил тупого ящера. Получай 250 златых");
        hero.money = hero.money + 250;
        update();
    }  

    if (hero.health <= 0) {
        alert("Тебя победил тупой ящер. Ты был тяжело ранен. Тебя нашли и отвезли в город, где тебя немного вылечили. Тупой ящер забрал у тебя 100 златых");
        hero.money = hero.money - 100;
        hero.gps = "Город";
        hero.health = 50;
        update();
    }  

    update();
    
})

frend.addEventListener("click", function () {
    if (hero.health > 0) {
        alert("Такие дружеские посиделки укрепляют силу");
        hero.health-=50;
        hero.power+=5;
    }

    if (hero.health < 0) {
        alert("Вас нашли пьяным. Такое жёстко корается на Русси. Штраф 250 златых");
        hero.health = 0;
        hero.money-= 250;
    }

    update();
})

hospital.addEventListener("click", function () {
    if (hero.health < 100) {
        alert("Церковь меняет твою богохульную силу на здоровье");
        hero.health = 100;
        hero.power-=5;
    }

    else if (hero.health == 100) {
        alert("Твоё здоровье на максимуме! Церковь чуть не обманула тебя! Она хотела променять твою силу на здоровье!")
    }

    update();
})

sleep.addEventListener("click", function () {
    if (hero.armor < 100) {
        alert("Твоя броня востановлена");
        hero.money-=50;
        hero.armor = 100;
    }

    if (hero.armor === 100) {
        alert("Зачем спать? Броня на максимуме")
    }
})