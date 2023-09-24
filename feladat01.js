let tipp = veletlenSzam();

function veletlenSzam() {
    return Math.floor(Math.random()*100)+1;
}

function ellenorzes() {
    const felhasznalo = document.getElementById("felhasznalo").value;

    if (felhasznalo == tipp) {
        alert("Gratulálok, eltaláltad a számot!");
    }else if (felhasznalo < tipp) {
        alert("A gondolt szám nagyobb!");
    }else {
        alert("A gondolt szam kisebb!")
    }
}

function szamgeneralas() {
    tipp=veletlenSzam();
    document.getElementById("felhasznalo").value = "";
    document.getElementById("viszejelzes").textContent = "Új szám generálva. Adj meg egy új tippet!"
}

