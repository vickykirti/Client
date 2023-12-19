const clock = document.getElementById("timer");

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);