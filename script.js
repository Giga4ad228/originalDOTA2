
    hero = {
        ima: "?",
        health: "?",
        armor: "?",
        damage: "?",
        mana: "?",
        money: "?",
        gps: "Таверна",
    },
    magazOnBot = document.getElementById("magazOnBot"),
    Salve = document.getElementById("Salve"),
    Msl = document.getElementById("Msl"),
    midas = document.getElementById("midas"),
    backB = document.getElementById("backB"),
    ima = document.getElementById("ima"),
    health = document.getElementById("health"),
    armor = document.getElementById("armor"),
    damage = document.getElementById("damage"),
    mana = document.getElementById("mana"),
    money = document.getElementById("money"),
    gps = document.getElementById("gps"),
    pudje = document.getElementById("pudje"),
    axe = document.getElementById("axe"),
    meduza = document.getElementById("meduza"),
    aganim = document.getElementById("aganim"),
    tinker = document.getElementById("tinker"),
    toTopMagaz = document.getElementById("toTopMagaz"),
    inCity = document.getElementById("inCity"),
    inTop = document.getElementById("inTop"),
    inAllPick = document.getElementById("inAllPick"),
    tp = document.getElementById("tp"),
    // toTavern = document.getElementById("toTavern"),
    backT = document.getElementById("backT"),
    t = document.getElementById("t"),
    Blink = document.getElementById("Blink"),
    mid = document.getElementById("mid"),
    toBot = document.getElementById("toBot"),
    toLine = document.getElementById("toLine"),
    push = document.getElementById("push"),
    gang = document.getElementById("gang"),
    magazOnTop = document.getElementById("magazOnTop"),
    bg = document.querySelector("bg"),
    onMid = document.getElementById("onMid"),
    magazOnMid = document.getElementById("magazOnMid"),
    push = document.getElementById("push"),
    backM = document.getElementById("backM"),
    radic = document.getElementById("radic"),
    bash = document.getElementById("bash"),
    mom = document.getElementById("mom"),
    magazOnMidle = document.getElementById("magazOnMidle"),
    feed = document.getElementById("feed"),
    sf = document.getElementById("sf"),
    backAllPick = document.getElementById("backAllPick"),
    backToOtherLine = document.getElementById("backToOtherLine"),
    finalBatle = document.getElementById("finalBatle"),
    Farm = document.getElementById("Farm"),
    toLocalMagaz = document.getElementById("toLocalMagaz"),
    bot = document.getElementById("bot"),
    bg_message = document.querySelector(".bg_message"),
    lastAction = document.querySelector(".box_item_status");
    lastAction.textContent = ("Это дота 2, выбери героя")

console.log(hero);

function update() {
    ima.textContent = hero.ima;
    health.textContent = hero.health;
    armor.textContent = hero.armor;
    damage.textContent = hero.damage;
    mana.textContent = hero.mana;
    money.textContent = hero.money;
    gps.textContent = hero.gps;


    if (hero.gps == "Таверна") {
        inCity.style.display = "block";
        inTop.style.display = "none";
        inAllPick.style.display = "none";
        magazOnTop.style.display = "none";
        onMid.style.display = "none";
        magazOnMidle.style.display = "none";
        bot.style.display = "none";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/pic-bg.jpg)";
    }

    if (hero.gps == "Топ") {
        // inCity.style.display = "none";
        inTop.style.display = "block";
        magazOnTop.style.display = "none";
        inAllPick.style.display = "none";
        onMid.style.display = "none";
        magazOnMidle.style.display = "none";
        bot.style.display = "none";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/top.jpg)";
    }
    else if (hero.gps == "All Pick") {
        inCity.style.display = "none";
        inTop.style.display = "none";
        inAllPick.style.display = "block";
        magazOnTop.style.display = "none";
        onMid.style.display = "none";
        bot.style.display = "none";
        magazOnMidle.style.display = "none";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/map.jpg)";
    }

    else if (hero.gps == "Лавка на топе") {
        inCity.style.display = "none";
        inTop.style.display = "none";
        inAllPick.style.display = "none";
        magazOnTop.style.display = "block";
        onMid.style.display = "none";
        bot.style.display = "none";
        magazOnMidle.style.display = "none";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/radiant.jpg)";
    }

    else if (hero.gps == "Мид") {
        inCity.style.display = "none";
        inTop.style.display = "none";
        inAllPick.style.display = "none";
        magazOnTop.style.display = "none";
        onMid.style.display = "block";
        bot.style.display = "none";
        magazOnMidle.style.display = "none";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/mid.jpg)";
    } 

    else if (hero.gps == "Лавка на миду") {
        inCity.style.display = "none";
        inTop.style.display = "none";
        inAllPick.style.display = "none";
        magazOnTop.style.display = "none";
        onMid.style.display = "none";
        bot.style.display = "none";
        magazOnMidle.style.display = "block";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/dog.jpg)";
    }

    else if (hero.gps == "Бот") {
        inCity.style.display = "none";
        inTop.style.display = "none";
        inAllPick.style.display = "none";
        magazOnTop.style.display = "none";
        onMid.style.display = "none";
        bot.style.display = "block";
        magazOnMidle.style.display = "none";
        magazOnBot.style.display = "none";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/bot.jpg)";
    } 
    
    else if (hero.gps == "Лавка на боту") {
        inCity.style.display = "none";
        inTop.style.display = "none";
        inAllPick.style.display = "none";
        magazOnTop.style.display = "none";
        onMid.style.display = "none";
        bot.style.display = "none";
        magazOnMidle.style.display = "none";
        magazOnBot.style.display = "block";
        document.querySelector(".box_item_gps").style.backgroundImage = "url(img/mag.jpg)";
    }
};
update();
pudje.addEventListener("click", function () {
    ima.textContent = ("Пудж");
    hero.ima = "Пудж";
    hero.health = 100;
    hero.armor = 50;
    hero.damage = 50;
    hero.mana = 50;
    hero.money = 1000;
    lastAction.textContent = (hero.ima + " выбран");
    hero.gps = "All Pick";
    update();
})

meduza.addEventListener("click", function () {
    hero.ima = "Медуза";
    hero.health = 50;
    hero.armor = 200;
    hero.damage = 50;
    hero.mana = 50;
    hero.money = 1000;
    lastAction.textContent = (hero.ima + " выбрана");
    hero.gps = "All Pick";
    update();
})

axe.addEventListener("click", function () {
    hero.ima = "Акс";
    hero.health = 50;
    hero.armor = 50;
    hero.damage = 100;
    hero.mana = 50;
    hero.money = 1000000000000;
    lastAction.textContent = (hero.ima + " выбран");
    hero.gps = "All Pick";
    update();
})

tinker.addEventListener("click", function () {
    hero.ima = "Тинкер";
    hero.health = 50;
    hero.armor = 50;
    hero.damage = 50;
    hero.mana = 200;
    hero.money = 1000;
    lastAction.textContent = (hero.ima + " выбран");
    hero.gps = "All Pick";
    update();
})


t.addEventListener("click", function () {
    hero.gps = "Топ";
    lastAction.textContent = (hero.ima + " идёт на топ");
    update();
})

toBot.addEventListener("click", function () {
    hero.gps = "Бот";
    lastAction.textContent = (hero.ima + " идёт на бот");
    update();
})

backB.addEventListener("click", function () {
    hero.gps = "Бот";
    lastAction.textContent = (hero.ima + " идёт на бот");
    update();
})

backToOtherLine.addEventListener("click", function () {
    hero.gps = "All Pick";
    lastAction.textContent = (hero.ima + " сбежал с бота");
    update();
})

toLocalMagaz.addEventListener("click", function () {
    hero.gps = "Лавка на боту";
    lastAction.textContent = (hero.ima + ", привет, я Коллапс и выкину тебе шмотки за норм цену, а то сломаю, я агент Габена");
    update();
})


backT.addEventListener("click", function() {
    hero.gps = "Топ";
    lastAction.textContent = (hero.ima + " идёт на топ");
    update();
})

toLine.addEventListener("click", function () {
    hero.gps = "All Pick";
    lastAction.textContent = (hero.ima + " сбежал с топа");
    update();
})

mid.addEventListener("click", function () {
    hero.gps = "Мид";
    lastAction.textContent = (hero.ima + "  идёт на мид");
    update();
})

// toTavern.addEventListener("click", function () {
//     hero.gps = "Таверна";
//     lastAction.textContent = (hero.ima + " возвращается к пику");
//     update();
// })

toTopMagaz.addEventListener("click", function() {
    hero.gps = "Лавка на топе";
    lastAction.textContent = (hero.ima + " , покупай что хочешь по выгодным ценам. Я продаю предметы с пасивынм эффектами");
    update();
})

backAllPick.addEventListener("click", function() {
    hero.gps = "All Pick";
    lastAction.textContent = (hero.ima + " сбежал с мида");
    update();
})

magazOnMid.addEventListener("click", function() {
    hero.gps = "Лавка на миду";
    lastAction.textContent = (hero.ima + ", я курьер приехал к тебе, но я агент габена и бесплатно ничего не отдам");
    update();
})

backM.addEventListener("click", function() {
    hero.gps = "Мид";
    lastAction.textContent = (hero.ima + ", возвращается на мид");
    update();
})

let b = 0


Blink.addEventListener("click", function() {
    if (hero.money >= 2250) {
        b = 1 ;
        hero.money-=2250;
        lastAction.textContent = ("Блинк куплен");
        Blink.disabled = "true";
        gang.textContent = ("Гангануть на мид с шансом 70%")
        update();
    }

    else {
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "Топ";
        update();
    }
    
})

let m = 0
mom.addEventListener("click", function() {
    if (hero.money >= 1900) {
        m = 1 ;
        hero.money-=1900;
        lastAction.textContent = ("Момчик куплен");
        mom.disabled = "true";
        update();
    }

    else {
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "Мид";
        update();
    }
})

Salve.addEventListener("click", function() {
    if (hero.money >= 100) {
        hero.health = 50;
        if (hero.ima == "Пудж") {
            hero.health = 100;
        }   
    
        if (a >= 1) {
            hero.health = hero.health + 87*a;
        }
        hero.money-=100;

        hero.armor = 50
         if (hero.ima == "Медуза") {
            hero.armor = 200;
        }

        hero.mana = 50;

         if (hero.ima == "Тинкер") {
            hero.mana = 200;
        }

        lastAction.textContent = ("Всё востановлено")
        update();
    }
   
    else if (hero.money < 100) {
        lastAction.textContent = ("Ушёл от сюда, НИЩИЙ!")
        hero.gps = "Бот";
    }
}
)

let ml = 0
Msl.addEventListener("click", function() {
    if (hero.money >= 2815) {
        lastAction.textContent = ("Мэджик слэйер куплен");
        Msl.disabled = "true";
        ml = 1;
        update();
    }
   
    else if (hero.money < 2815) {
        lastAction.textContent = ("Ушёл от сюда, НИЩИЙ!");
        hero.gps = "Бот";
    }
})

bash.addEventListener("click", function () {
    if (hero.money >= 2875) {
        hero.money-=2875;
        hero.damage+=30;
        lastAction.textContent = ("Башик куплен");
        update();
    }

    else {
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "Мид";
        update();
    }
    update();
})

let ra = 0

radic.addEventListener("click", function () {
    if (hero.money >= 4700) {
        hero.money-=4700;
        ra = 1;
        lastAction.textContent = ("Радик куплен");
        radic.disabled = "true";
        update();
    }

    else if (hero.money < 4700){
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "Мид";
        update();
    }
    update();
})


let count = 0;

feed.addEventListener("click", function() {
    count+=1;
    hero.money-=300;
   lastAction.textContent = (hero.ima + " начинает фидить, минус 300 золотых, уже нафидил " + count + " раз");
   if (count >= 10) {
    lastAction.textContent = (hero.ima + " начинает фидить, минус 300 золотых, уже нафидил " + count + " раз, прям как Андрей");
   }

   if (count >= 100) {
    lastAction.textContent = (hero.ima + " начинает фидить, минус 300 золотых, уже нафидил " + count + " раз, прям как Илья");
   }

   if (count >= 1000) {
    lastAction.textContent = (hero.ima + " начинает фидить, минус 300 золотых, уже нафидил " + count + " раз, прям как Джузик");
   }

   if (count > 1010) {
       window.location.href = "https://www.youtube.com/watch?v=1O6KHXFIPUs"
   }
   update();
})



gang.addEventListener("click", function () {


    let shans = Math.floor(Math.random(0, 100) * 100);
    let fall =  Math.floor(Math.random(0, 100) * 100);

    if (b == 1) {
        shans = 70;
    }
    if (shans < fall) {
        lastAction.textContent = ("Ганг не вышел, минус 200 золота и 25 здоровья");
        hero.health-=25;
        hero.money-=200;
        update();
    }

    if (shans >= fall) {
        lastAction.textContent = ("Ганг вышел плюс 250 золота");
        hero.money+=200;
        update();
    }

    if (hero.health <= 0) {
        lastAction.textContent = (" ВОТ ЭТО ТЫ ЛОХ! ДУМАЛ КЛАССНО ГАНГАНЁШЬ? УМЕР. МИНУС 300 ЗОЛОТА.ВОСТАНОВЛЕНА ПОЛОВИНА ХП");
        hero.health = 25;
        if (hero.ima == "Пудж") {
            hero.health = 50;
        }   

        if (a >= 1) {
            hero.health = hero.health + 87*a;
        }
        hero.money-=300;
        hero.gps = "All Pick";
    }

    update();
})


let p = 0

tp.addEventListener("click", function() {
    if (hero.money >= 1000) {
        p = 1;
        hero.money-=1000;
        lastAction.textContent = ("Тп куплен");
        tp.disabled = "true";
        push.textContent = ("Запушить тавер(У него 1500 хп и 50 урона)")
        update();
    }

    else {
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "Топ";
        update();
    }
})
let a = 0

aganim.addEventListener("click", function () {
    if (hero.money >= 4200) {
        a+=1;
        hero.money-=4200;
        lastAction.textContent = ("Аганим куплен");
        update();
    }

    if (a >= 1) {
        hero.health+=175;
        update();
    }

    else if (hero.money < 4200) {
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "Топ";
        update();
    }
    update();
})

let s = 0
sf.addEventListener("click", function () {
    shadow = {
        health: 1000,
        damage: 100,
    }
    while (hero.health > 0 && shadow.health > 0){
        
        lastAction.textContent =("Здоровье Дурачьё " + shadow.health + " а урон " + shadow.damage);
        if (hero.armor > 0) {
            shadow.health-=hero.damage;
            hero.armor-=shadow.damage;
            hero.mana-=25;
            lastAction.textContent =("Здоровье Дурачьё " + shadow.health + " а урон " + shadow.damage);
            if (m == 1) {
                hero.health+=30;
            }

            if (ml == 1) {
                hero.mana += 10;
            }

            if (ra == 1) {
                lukc = 30;
                fallen =  Math.floor(Math.random(0, 100) * 100);
                if (lukc >= fallen) {
                    hero.health+=shadow.damage;
                }
            update();
        }}
    
        else if (hero.armor <= 0 ){
        hero.armor = 0;
        shadow.health-=hero.damage;
        hero.health-=shadow.damage;
        hero.mana-=25;
        lastAction.textContent =("Здоровье Дурачьё " + shadow.health + " а урон " + shadow.damage);
        if (m == 1) {
            hero.health+=30;
        }

        
        if (ml == 1) {
            hero.mana += 10;
        }

        if (ra == 1) {
            lukc = 30;
            fallen =  Math.floor(Math.random(0, 100) * 100);
            if (lukc >= fallen) {
                hero.health+=shadow.damage;
            }
        update();}
        update();
 
        } 

        if (hero.mana == 0) {
            hero.health-=10;
            hero.mana = 50;
            if (hero.ima == "Тинкер") {
                hero.mana = 200;
                update();
            }
            update();
        }
    }

     if (shadow.health <= 0) {
        lastAction.textContent =("Ты убил Дурачьё! Плюс 10000 золота");
        hero.money = hero.money + 10000;
        s = 1;
        update();
    }  

    if (hero.health <= 0) {
        lastAction.textContent = ("Здоровье Дурачьё  " + shadow.health + " а урон " + shadow.damage + " ВОТ ЭТО ТЫ ЛОХ! ДУМАЛ УБИТЬ ВЕЛИКОГО ДУРАЧЬЁ? МИНУС 300 ЗОЛОТА. ВОСТАНОВЛЕНА ПОЛОВИНА ХП");
        hero.health = 25;
        if (hero.ima == "Пудж") {
            hero.health = 50;
        }   

        if (a >= 1) {
            hero.health += 87*a;
        }
        hero.money-=300;
        hero.gps = "All Pick";     
    }
    update();
})

let i = 0

push.addEventListener("click", function () {
    tower = {
        health: 2000,
        damage: 50,
    }
    
    if (p == 1) {
        tower.health = 1500;
    }
    while (hero.health > 0 && tower.health > 0){
        
        lastAction.textContent =("Здоровье Тавера " + tower.health + " а урон " + tower.damage);
        if (hero.armor > 0) {
            tower.health-=hero.damage;
            hero.armor-=tower.damage;
            hero.mana-=25;
            lastAction.textContent =("Здоровье Тавера " + tower.health + " а урон " + tower.damage);
            if (m == 1) {
                hero.health+=30;
            }

            
            if (ml == 1) {
                hero.mana += 10;
            }

            if (ra == 1) {
                lukc = 30;
                fallen =  Math.floor(Math.random(0, 100) * 100);
                if (lukc >= fallen) {
                    hero.health+=tower.damage;
                }}
            update();
        }
    
        else if (hero.armor <= 0 ){
            if (m == 1) {
                hero.health+=30;
            }

            if (ml == 1) {
                hero.mana += 10;
            }

            if (ra == 1) {
                lukc = 30;
                fallen =  Math.floor(Math.random(0, 100) * 100);
                if (lukc >= fallen) {
                    hero.health+=tower.damage;
                }}
        hero.armor = 0;
        tower.health-=hero.damage;
        hero.health-=tower.damage;
        hero.mana-=25;
        lastAction.textContent =("Здоровье Тавера" + tower.health + " а урон " + tower.damage);
 
        } 

        if (hero.mana == 0) {
            hero.health-=10;
            hero.mana = 50;
            if (hero.ima == "Тинкер") {
                hero.mana = 200;
            }
            update();
        }

    }

     if (tower.health <= 0) {
        lastAction.textContent =("Ты снёс тавер! Плюс 10000 золота");
        hero.money = hero.money + 10000;
        i = 1;
        update();
    }  

    if (hero.health <= 0) {
        lastAction.textContent = ("Здоровье Тавера " + tower.health + " а урон " + tower.damage + " ВОТ ЭТО ТЫ ЛОХ! ДУМАЛ ЗАПУШИШЬ ТАВЕР? МИНУС 300 ЗОЛОТА. ВОСТАНОВЛЕНА ПОЛОВИНА ХП");
        hero.health = 25;
        if (hero.ima == "Пудж") {
            hero.health = 50;
        }   

        if (a >=1) {
            hero.health = hero.health + 87*a;
        }
        hero.money-=300;
        hero.gps = "All Pick";     
    }

        // ОТ ЧЕГО ВЗЯТА ИДЕЯ
    // if (hero.health <= 0) {
    //     lastAction.textContent =("Тебя победил тупой ящер. Ты был тяжело ранен. Тебя нашли и отвезли в город, где тебя немного вылечили. Тупой ящер забрал у тебя 100 златых");
    //     hero.money = hero.money - 100;
    //     hero.gps = "Город";
    //     hero.health = 50;
    //     update();
    // }  

    update();
})

finalBatle.addEventListener("click", function () {
    if (i==1) {
        lastAction.textContent = ("Убей сначала дурачьё, а уже потом уничтожай трон");
    }

    if (s == 1) {
        lastAction.textContent = ("Снеси сначала тавер, а уже потом иди сюда");
    }

    if (i==1 && s == 1) {
        throne = {
            health: 10000,
            damage: 100,
        }
        
        if (p == 1) {
            throne.health = 1500;
        }
        while (hero.health > 0 && throne.health > 0){
            
            lastAction.textContent =("Здоровье трона " + throne.health + " а урон " + throne.damage);
            if (hero.armor > 0) {
                throne.health-=hero.damage;
                hero.armor-=throne.damage;
                hero.mana-=25;
                lastAction.textContent =("Здоровье трона " + throne.health + " а урон " + throne.damage);
                if (m == 1) {
                    hero.health+=30;
                }

                
            if (ml == 1) {
                hero.mana += 10;
            }

            if (ra == 1) {
                lukc = 30;
                fallen =  Math.floor(Math.random(0, 100) * 100);
                if (lukc >= fallen) {
                    hero.health+=throne.damage;
                }
            update();}
                update();
            }
        
            else if (hero.armor <= 0 ){
                if (m == 1) {
                    hero.health+=30;
                }

                
            if (ml == 1) {
                hero.mana += 10;
            }

            if (ra == 1) {
                lukc = 30;
                fallen =  Math.floor(Math.random(0, 100) * 100);
                if (lukc >= fallen) {
                    hero.health+=throne.damage;
                }
            update();}

            hero.armor = 0;
            throne.health-=hero.damage;
            hero.health-=throne.damage;
            hero.mana-=25;
            lastAction.textContent =("Здоровье Тавера" + throne.health + " а урон " + throne.damage);
            update();
     
            } 
    
            if (hero.mana == 0) {
                hero.health-=10;
                hero.mana = 50;
                if (hero.ima = "Тинкер") {
                    hero.mana = 200;
                    update();
                }
                update();
            }
    
        }
    
         if (throne.health <= 0) {
            lastAction.textContent =("Ты снёс Трон! Дота 2 пройдена за " + hero.ima + ". Спасибо за потраченое время на эту игру! Воспринимай все обзывательства без негатива");
            hero.money = hero.money + 10000;
            update();
        }  
    
        if (hero.health <= 0) {
            lastAction.textContent = ("Здоровье Трона " + throne.health + " а урон " + throne.damage + " ВОТ ЭТО ТЫ ЛОХ! ДУМАЛ ЗАКОНЧИТЬ ИГРУ ТАК БЫСТРО? МИНУС 300 ЗОЛОТА. ВОСТАНОВЛЕНА ПОЛОВИНА ХП");
            hero.health = 25;
            if (hero.ima == "Пудж") {
                hero.health = 50;
            }   
    
            if (a >=1) {
                hero.health = hero.health + 87*a;
            }
            hero.money-=300;
            hero.gps = "All Pick";     
        }
        update();
    }

    else {
        lastAction.textContent = ("Убеёте Дурачьё и снесите тавер, а потом идите сюда")
        update();
    }


    
})

let mi = 0

midas.addEventListener("click", function () {
    if (hero.money >= 2220) {
        mi = 1;
        hero.money-=2220;
        lastAction.textContent = ("Мидас куплен");
        Farm.textContent = (" Пофармить крипов (26 золота за одного)");
        midas.disabled = "true";
        update();
    }

    else if (hero.money < 2220) {
        lastAction.textContent = ("УШЁЛ ОТ СЮДА, НИЩИЙ");
        hero.gps = "бот";
        update();
    }
    update();
})

    // ПЕРВЫЙ КОД БОЯ
    // while (hero.health > 0 && tower.health > 0) {
        
    //     lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //     tower.health-=hero.damage;
    //     hero.mana-=25;
    //     lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //     if (hero.mana == 0) {
    //         hero.health-=10;
    //         hero.mana = 50;
    //         lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //         update();
    //         if (hero.ima == "Тинкер") {
    //             hero.mana = 200;
    //             lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //               update();
    //         }
    //     }
    //     if (hero.armor > 0) {
    //         hero.armor-=tower.damage;
    //         lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //         update();
    //     }
    //     if (hero.armor == 0 & hero.ima == "Медуза") {
    //         hero.health -= 20;
    //         lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //         update();
    //     }

    //     if (hero.armor < 0) {
    //         hero.health -= tower.damage;
    //         lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //         update();
    //     }
    // }
 

    //     if (hero.health <= 0) {
    //         lastAction.textContent = ("ВОТ ЭТО ТЫ ЛОХ!ОТ ТОВЕРА УМЕР! МИНУС 350 ЗОЛОТА");
    //         hero.money-=350;
    //         hero.health = 50;    
    //         update();
    //     }

    //     if (tower.health == 0) {
    //         lastAction.textContent = ("Первый товер снесён, плюс 1к монет");
    //         i+=1;
    //         hero.money+=1000;
    //         update();
    //     }

    //     lastAction.textContent =("Здоровье и урон тавера: " + tower.health +" и "+ tower.damage);
    //     update();

   

    let colFarm = 0

    Farm.addEventListener("click", function() {
        colFarm+=1;
        lastAction.textContent = (colFarm + " крип убит. Плюс 10 золота");
        hero.money+=10;
        if (mi == 1) {
            lastAction.textContent = (colFarm + " крип убит. Плюс 26 золота");
            hero.money+=26;
            update();
        }
        update();
    })

// .addEventListener("click", function () {
//     healthOfProtivnic = Math.floor(Math.random(0, 100) * 100);
//     lastAction.textContent =("Сила твоего соперника " + healthOfProtivnic);
//     if (hero.damage > healthOfProtivnic) {
//         lastAction.textContent =("Твой damage больше соперника получай 100 златых")
//         hero.money = hero.money + 100;
//         update();
//     }

//     if (hero.damage < healthOfProtivnic) {
//         lastAction.textContent =("Твой damage меньше соперника минус 100 златых и минус 10 здоровья")
//         hero.money = hero.money - 100;
//         hero.health = hero.health - 10;
//         update();
//     }

//     if (hero.damage == healthOfProtivnic) {
//         lastAction.textContent =("Твой damage такой же как у  соперника. Удивительно! Но ты и не в минусе, и не в плюсе")
//         hero.money = hero.money - 100;
//         hero.health = hero.health - 10;
//         update();
//     }

//     else if (hero.health <= 0) {
//         lastAction.textContent =("Тебя обнаружили без сознания избитым! Украдены 250 златых! Из таверны выгнали тоже");
//         hero.gps = "Город";
//         hero.money-=250;
//         update()
//     }
// })

// .addEventListener("click", function () {
//     vipen = prompt("Приветсвуем вас в нашем магазине, чтобы купить оружие впишите его цифру. 1) Алебарда бомжа 1000 златых 45 силы, 2) Топор Виталия сына Алексея 3000 златых 60 силы, 3) Парные мечи великого богатыря Михаила 5000 златых 75 силы, 4)Дубинка неизвестного 7500 златых 85 силы, 5) МЕЧ ГАТСА 10000 златых 100силы")
//     if (hero.money >= 1000 & vipen == 1) {
//         hero.money = hero.money - 1000;
//         hero.damage = 45;
//         lastAction.textContent =("Твоя сила увеличина")
//         update();
//     }

//     else if (hero.money >= 3000 & vipen == 2) {
//         hero.money = hero.money - 3000;
//         hero.damage = 60;
//         lastAction.textContent =("Твоя сила увеличина")
//         update();
//     }

//     else if (hero.money >= 5000 & vipen == 3) {
//         hero.money = hero.money - 5000;
//         hero.damage = 75;
//         lastAction.textContent =("Твоя сила увеличина")
//         update();
//     }   
    
//     else if (hero.money >= 7500 & vipen == 4) {
//         hero.money = hero.money - 7500;
//         hero.damage = 85;
//         lastAction.textContent =("Твоя сила увеличина")
//         update();
//     }  

//     else if (hero.money >= 10000 & vipen == 5) {
//         hero.money = hero.money - 10000;
//         hero.damage = 100;
//         lastAction.textContent =("Твоя сила увеличина")
//         lastAction.textContent =("Поздравляем! Моя короткая тупая игра закончена! Самый сильный меч получен здесь больше нечего делать")
//         update();
//     }  

//     else if (hero.money < 1000){
//         lastAction.textContent =("Ушёл от сюда, нищий")
//     }
// })



// .addEventListener("click", function () {
//     isher = {
//         health: Math.floor(Math.random(2, 100) * 100),
//         damage: Math.floor(Math.random(2, 100) * 100),
//     }
    
//     while (hero.health > 0 && isher.health > 0){
        
//         lastAction.textContent =("Здоровье ящера " + isher.health + " а урон " + isher.damage);
//         if (hero.armor >= isher.damage) {
//             hero.armor-=isher.damage;
//             lastAction.textContent =("Здоровье ящера " + isher.health + " а урон " + isher.damage);
//             update();

//         }
        
         

//         else if (hero.armor < isher.damage){
//             let allHealthHero = hero.health + hero.armor;
//         allHealthHero-=isher.damage;
//         hero.health = allHealthHero;
//         isher.health-=hero.damage;
//         lastAction.textContent =("Здоровье ящера " + isher.health + " а урон " + isher.damage);
//         update();
 
//         } 
//     }

//      if (isher.health <= 0) {
//         lastAction.textContent =("Ты победил тупого ящера. Получай 250 златых");
//         hero.money = hero.money + 250;
//         update();
//     }  

//     if (hero.health <= 0) {
//         lastAction.textContent =("Тебя победил тупой ящер. Ты был тяжело ранен. Тебя нашли и отвезли в город, где тебя немного вылечили. Тупой ящер забрал у тебя 100 златых");
//         hero.money = hero.money - 100;
//         hero.gps = "Город";
//         hero.health = 50;
//         update();
//     }  

//     update();
    
// })





// .addEventListener("click", function () {
//     if (hero.health < 100) {
//         lastAction.textContent =("Церковь меняет твою богохульную силу на здоровье");
//         hero.health = 100;
//         hero.damage-=5;
//     }

//     else if (hero.health == 100) {
//         lastAction.textContent =("Твоё здоровье на максимуме! Церковь чуть не обманула тебя! Она хотела променять твою силу на здоровье!")
//     }

//     update();
// })

