let pieces = 0;
let etoiles = 0;
let clicks = 0;
let clicksTT = 0;
let bonusClick = 0;

function clics() {
    clicks +=1 + bonusClick;
    clicksTT +=1 + bonusClick;
    
    document.getElementById('clicks').innerHTML = "Nombre de clics : " + clicks ;

    if (clicksTT >= 25) {
            pieces +=1;
            clicksTT -=25;
            document.getElementById('pieces').innerHTML = "Nombre de piece obtenues: " + pieces;
    }

    if (pieces >=10) {
        etoiles +=1;
        pieces -=10

         
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    }

    if (clicksTT >= 25) {
        pieces +=1;
        clicksTT -=25;
        document.getElementById('pieces').innerHTML = "Nombre de piece obtenues: " + pieces;
    }
}

function bonus1() {
    if (etoiles >=3) { 
        bonusClick +=1;
        etoiles -=3;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}

function bonus2() {
    if (etoiles >=10) { 
        bonusClick +=1;
        etoiles -=10;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}

function bonus3() {
    if (etoiles >=25) { 
        bonusClick +=1;
        etoiles -=25;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}
function bonus4() {
    if (etoiles >=50) { 
        bonusClick +=1;
        etoiles -=50;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}
function bonus5() {
    if (etoiles >=100) { 
        bonusClick +=1;
        etoiles -=100;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}
function bonus6() {
    if (etoiles >=175) { 
        bonusClick +=1;
        etoiles -=175;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}
function bonus7() {
    if (etoiles >=250) { 
        bonusClick +=1;
        etoiles -=250;
        document.getElementById('etoiles').innerHTML = "Nombre d'etoiles obtenues: " + etoiles;
    } else {
        alert("Tu n'as pas assez d'etoiles !");
    }
}