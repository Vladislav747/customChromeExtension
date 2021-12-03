// Notes functionality JS (with guidance from https://eqdn.tech/html5-note-app-tutorial/)

window.onload = function() {
    display_saved_note();
}

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return true;
    }
    else {
        alert("Web storage unsupported!");
        return false;
    }
}

function display_saved_note() {
    if(check_web_storage_support() === true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "";
    }
    document.getElementById('area').value = result;
}

function save() {
    if(check_web_storage_support() === true) {
        const area = document.getElementById("area");
        if(area.value !== '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}

window.addEventListener('load', function load(){
    const createButton = document.getElementById('save');
    createButton.addEventListener('click', function() { save(); });
});

// -------------------------------------------------------
// Date & Time JS
function updateClock() {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day_num = date.getDate();
    const day_text = days[date.getDay()];

    document.getElementById("date").innerHTML = day_text + ", " + month + " " + day_num + ", " + year;

    const hour_24hrs = date.getHours();
    let hour = (hour_24hrs % 12);
    if (hour === 0) { hour = 12; }
    const amORpm = (hour_24hrs / 12 < 1 ? "AM" : "PM");
    let minute = date.getMinutes();
    if (minute < 10) { minute = "0" + minute; }

    document.getElementById("time").innerHTML = "<b>"+hour + ":" + minute + " " + amORpm+"</b>";

    setTimeout(updateClock, 1000);
}
updateClock();