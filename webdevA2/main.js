/*jshint esversion: 6 */ 
const goup = document.querySelector("#upbtn");
/**@type {HTMLDivElement} */
const titleblk = document.querySelector("#titleblock");
const menublk = document.querySelector("#menubtn");
const dropdown = document.querySelectorAll("#dropdown button");
const hbline = document.querySelectorAll(".hamburg");

const gameimg = document.querySelector("#office");
const resetbtn = document.querySelector("#reset");
const closebtn = document.querySelector("#close");

const scareaudio = new Audio("audio/fnaf_jumpscare_1.mp3");

var atktimer = 0;
var titleanim = 0;
var sectrota = -180;
var btnrota = 0;
var onpage = false;
var dead = false;


document.querySelector(`.text0`).classList.add("selecttxt");



menublk.addEventListener("click",function(){
    btnrota += 90;
    sectrota += 180;
    menublk.style.transform = `scale(1.1) rotate(${btnrota}deg)`;
    for (let i =0; i < dropdown.length; i++){
        //dropdown[i].classList.toggle("openmenu");
        
        dropdown[i].classList.toggle("open");
    }
});

menublk.addEventListener("mouseover",function(){

    menublk.style.transform = `scale(1.1) rotate(${btnrota}deg)`;
    for (let i =0; i < hbline.length; i++){
        hbline[i].classList.add("hov");
    }
});

menublk.addEventListener("mouseout",function(){
    menublk.style.transform = `scale(1.0) rotate(${btnrota}deg)`;
    for (let i =0; i < hbline.length; i++){
        
        hbline[i].classList.remove("hov");
    }
});

for (let i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener("mouseover",function(){
        dropdown[i].classList.add("hov");
    });
    dropdown[i].addEventListener("mouseout",function(){
        dropdown[i].classList.remove("hov");
    });
    dropdown[i].addEventListener("click", function(){
        resetgame();
        for (let f = 0; f < dropdown.length; f++){
            for (let e = 0; e < document.querySelectorAll(`.text${f}`).length; e++){
                document.querySelectorAll(`.text${f}`)[e].classList.remove("selecttxt");
            }
        }
        for (let e = 0; e < document.querySelectorAll(`.text${i}`).length; e++){
            document.querySelectorAll(`.text${i}`)[e].classList.add("selecttxt");
        }
        if (i == 2){
            onpage = true;
        }
        else{
            onpage = false;
        }
        
    });
}




window.addEventListener("scroll",function(){
    if(window.scrollY >= 10){
        
        goup.classList.add("scrolleddown");
 
    }
    else{
        goup.classList.remove("scrolleddown");
    }
});

goup.addEventListener("click",function(){
    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'});
});

goup.addEventListener("mouseover",function(){
    menumation();
    goup.classList.add("hovered");
    
});
goup.addEventListener("mouseout",function(){
    goup.classList.remove("hovered");
});

titleblk.addEventListener("mouseover",function(){
    titleblk.classList.add("menuhov");
    //menumation();
});
titleblk.addEventListener("mouseout",function(){
    titleblk.classList.remove("menuhov");
});



function menumation(){
    titleanim += 1;
    if (titleblk.classList.contains("menuhov")){
        
        if (titleanim < 8){
            titleblk.style.backgroundImage = 'url("images/mouth0' + String(titleanim) + '.jpeg")';
        }
        else{
            titleblk.style.backgroundImage = 'url("images/mouth08.jpeg")';
        }
        if (titleanim > 12){
            titleanim = 0;
        }

    }
    else{
        titleanim = 0;
        titleblk.style.backgroundImage = 'url("images/alien.jpg")';

    }

}
function setattack(){
    atktimer--;
    if (onpage == true){
        let attackchance = Math.floor(Math.random() * 6);
        console.log(attackchance);
        if (attackchance == 1 && dead == false){
            gameimg.src = "images/threatscrn.jpg";
            atktimer = 5;
        }
        if (atktimer == 1){
            gameimg.src = "images/deathscreen.jpg";
            scareaudio.play();
            dead = true;
        }
    }
}



closebtn.addEventListener("click", function(){
    if (dead == false){
        atktimer = 0;
        gameimg.src = "images/office.webp";
    }
    
});

resetbtn.addEventListener("click", resetgame);
function resetgame(){
    dead = false;
    gameimg.src = "images/office.webp";
    atktimer = 0;
}

setInterval(menumation, 100);
setInterval(setattack, 300);