window.setTimeout(function () {

    const buttons = document.querySelectorAll("youtube-selectors");
    buttons.forEach(function (btn) {
        const div = document.createElement("div");
        div.innerHTML = "#"
        btn.addEventListener("click", function () {

        }, false)
    })

    console.log("extension works")
}, 5000)