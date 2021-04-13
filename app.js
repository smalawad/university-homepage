const modeEvent = document.querySelector(".wtz-darkmode");

modeEvent.addEventListener("click", mode);

function mode(event) {
    
    var element = document.body;
    element.classList.toggle("wtz-lightdark__mode");
}