let target = new Date("September 18, 2024 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let countdown = target - now;

    let hari = Math.floor(countdown / (1000 * 60 * 60 * 24));
    let jam = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((countdown % (1000 * 60)) / (1000));

    document.getElementById('hari').innerHTML = hari;
    document.getElementById('jam').innerHTML = jam;
    document.getElementById('menit').innerHTML = menit;
    document.getElementById('detik').innerHTML = detik;
}, 1000)