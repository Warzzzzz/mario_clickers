let pieces = 0;
let etoiles = 0;
let clicks = 0;
let clicksTT = 0;
let clicksPI = 0;
let bonusClick = 0;
let cptB1= 0;
let cptB2= 0;
let cptB3= 0;
let cptB4= 0;
let cptB5= 0;
let cptB6= 0;
let cptB7= 0;
let timer = 0; 

let audio1 = new Audio('piecemus1.mp3');
let image1 = ['img/mario_2.png'];
let img = document.querySelector("main");

function test(){
    timer +=1;
    document.getElementById('temps').innerText = 'Time : ' + timer;
    setTimeout("test()",1000);
}


function clics() {
    if(clicksTT===0){test()};
    clicks +=1 + bonusClick;
    clicksPI +=1 + bonusClick;
    clicksTT +=1;
    document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks ;
    document.getElementById('clicksTT').innerHTML = "Nombre de clics totaux : " + clicksTT ;

    if (clicksPI >= 25) {
            pieces +=1;
            clicksPI -=25;
            document.getElementById('pieces').innerHTML = "Nombre de piece obtenues: " + pieces;
    }

    if (pieces >=9) {
        audio1.play();
        etoiles +=1;
        pieces -=9

         
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    }

    if (clicksPI >= 25) {
        pieces +=1;
        clicksPI -=25;
        document.getElementById('pieces').innerHTML = "Nombre de piece obtenues: " + pieces;
    }
}



function bonus1() {
    if(cptB1!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<3) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=3  && cptB1==0) { 
        bonusClick +=1;
        etoiles -=3;
        cptB1 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_2.png";
    } 

    
}

function bonus2() {
    if(cptB2!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<10) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=10  && cptB2==0) { 
        bonusClick +=1;
        etoiles -=10;
        cptB2 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_3.png";
    } 
  

}

function bonus3() {
    if(cptB3!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<25) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=25  && cptB3==0) { 
        bonusClick +=1;
        etoiles -=25;
        cptB3 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_4.png";
    } 
  
}
function bonus4() {
    if(cptB4!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles <50) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=50  && cptB4==0) { 
        bonusClick +=1;
        etoiles -=50;
        cptB4 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_5.png";
    } 

  
}
function bonus5() {
    if(cptB5!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<100) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=100  && cptB5==0) { 
        bonusClick +=1;
        etoiles -=100;
        cptB5 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_6.png";
    } 
   
    
}
function bonus6() {
    if(cptB6!=0){
        alert("Tu as déjà utilisé ce bonus !");
    }
    if(etoiles<175) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=175  && cptB6==0) { 
        bonusClick +=1;
        etoiles -=175;
        cptB6 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_7.png";
    } 
 
   
}
function bonus7() {
    if(cptB7!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<250) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=250 && cptB7==0) { 
        bonusClick +=1;
        etoiles -=250;
        cptB7 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_8.png";
    } 
 
}

