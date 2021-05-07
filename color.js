const remote = require('@electron/remote')

function onload() {
    document.getElementById("sys-min").addEventListener("click", function(e) {
        var window2 = remote.getCurrentWindow();
        window2.minimize();
    });

    document.getElementById("sys-close").addEventListener("click", function(e) {
        var window2 = remote.getCurrentWindow();
        window2.close();
    });

    document.getElementById("main").addEventListener("change", function() {
        document.querySelectorAll(".big,.small span,.react span,.react2 span").forEach(e => { e.innerText = this.value.replace(";", "\n") })
    })
    document.getElementById("color").addEventListener("change", function() {
        document.getElementById("color-changer").innerHTML = `.big,.small span,.react span,.react2 span{color:${this.value};}`
    })
}

window.addEventListener("load", onload)