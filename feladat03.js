function udvozles() {
    const most = new Date();
    const ora = most.getHours();
    let udvozlet;
    
    if (ora < 6) {
        udvozlet ="Jó éjt";
    }else if (ora < 12) {
        udvozlet ="Jó reggelt";
    }else if (ora < 18) {
        udvozlet ="Jó napot!";
    }else {
        udvozlet ="Jó estét!";
    }
    alert(udvozlet);
}    