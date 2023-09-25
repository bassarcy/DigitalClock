const date = new Date();

function adjustHours(date) {
    if(date.getHours() > 12) {
        return date.getHours() - 12;
    } else if(date.getHours() == 0) {
        return date.getHours() + 12;
    } else {
        return date.getHours();
    };
};

function adjustMinutes(date) {
    if(date.getMinutes() < 10) {
        return `0${date.getMinutes()}`;
    } else {
        return date.getMinutes();
    };
};

function setMeridian(date) {
    if(date.getHours() < 12 || date.getHours() == 24) {
        return "am";
    } else {
        return "pm";
    };
};

function tellTime() {
    document.getElementById("time").textContent = `${adjustHours(date)}:${adjustMinutes(date)} ${setMeridian(date)}`
};

console.log(adjustHours(date));
console.log(adjustMinutes(date));

tellTime();