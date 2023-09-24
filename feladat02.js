function szamolas() {
    const a= parseFloat(document.getElementById("a").value); 
    const b= parseFloat(document.getElementById("b").value);
    const c= parseFloat(document.getElementById("c").value);


    if (a+b <= c || a+c <= b || b+c <= a) {
        document.getElementById("eredmeny").textContent = "A megadott oldalhosszúságok nem adnak háromszöget!";
        return;
    };

    //console.log(a, b, c);
    const kerulet = a+b+c;
    const felkerulet = kerulet/2;
    //console.log(kerulet);
    //console.log(felkerulet);
    
    //Héron-képlet a terület kiszámításához
    const terulet = Math.sqrt(felkerulet* (felkerulet-a) * (felkerulet-b) * (felkerulet-c));
    //console.log(terulet)
    document.getElementById("eredmeny").textContent = `Terület:${terulet.toFixed(2)}, Kerület:${kerulet.toFixed(2)}`;
}
