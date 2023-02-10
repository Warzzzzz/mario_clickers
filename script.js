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


let bonusact1 = ['img/bonus_1.png'];
let bonusact2 = ['img/bonus_2.png'];
let bonusact3 = ['img/bonus_3.png'];
let bonusact4 = ['img/bonus_4.png'];
let bonusact5 = ['img/bonus_5.png'];
let bonusact6 = ['img/bonus_6.png'];
let bonusact7 = ['img/bonus_7.png'];


let bonusDisplay = '';

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
    document.getElementById('clicksTT').innerHTML = "Nombre de clics totaux : " + clicksTT 

    if (clicksPI >= 25) {
            pieces +=9;
            clicksPI -=25;
            document.getElementById('pieces').innerHTML = "Nombre de piece obtenues: " + pieces;
    }

    if (pieces >=10) {
        audio1.play();
        etoiles +=500;
        pieces -=10

         
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
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
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact1+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_2.png";
        

    } 

    
}

function bonus2() {
    if( cptB2!=0){
       
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<10) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=10  && cptB1!=0 && cptB2==0) { 
        bonusClick +=1;
        etoiles -=10;
        cptB2 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_3.png";
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact2+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
    } 
  

}

function bonus3() {
    if(cptB3!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<25) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=25 && cptB1==1 && cptB2==1 && cptB3==0) { 
        bonusClick +=1;
        etoiles -=25;
        cptB3 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_4.png";
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact3+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
    } 
  
}
function bonus4() {
    if(cptB4!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles <50) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=50  && cptB1==1 && cptB2==1 && cptB3==1 && cptB4==0) { 
        bonusClick +=1;
        etoiles -=50;
        cptB4 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_5.png";
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact4+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
    } 

  
}
function bonus5() {
    if(cptB5!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<100) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=100  && cptB1==1 && cptB2==1 && cptB3==1 && cptB4==1 && cptB5==0) { 
        bonusClick +=1;
        etoiles -=100;
        cptB5 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_6.png";
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact5+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
    } 
   
    
}
function bonus6() {
    if(cptB6!=0){
        alert("Tu as déjà utilisé ce bonus !");
    }
    if(etoiles<175) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=175 && cptB1==1 && cptB2==1 && cptB3==1 && cptB4==1  && cptB5==1 && cptB6==0) { 
        bonusClick +=1;
        etoiles -=175;
        cptB6 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_7.png";
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact6+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
    } 
 
   
}
function bonus7() {
    if(cptB7!=0){
        alert("Tu as déjà utilisé ce bonus !");
    } 
    if(etoiles<250) {
        alert("Tu n'as pas assez d'etoiles !");
    }
    if (etoiles >=250 && cptB1==1 && cptB2==1 && cptB3==1 && cptB4==1  && cptB5==1 && cptB6==1 && cptB7==0) { 
        bonusClick +=1;
        etoiles -=250;
        cptB7 +=1;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
        document.getElementById('main-image').src = "img/mario_8.png";
        bonusDisplay = bonusDisplay + '<img id="bonus" src="'+bonusact7+'" alt="" style="height: 20px"></img>';
        document.getElementById('bonusImages').innerHTML = bonusDisplay;
    } 
 



}

