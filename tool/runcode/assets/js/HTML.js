function loadJS(url) {
    return new Promise((resolve) => {
        var script = document.createElement("script");
        script.src = url;
        script.onload = resolve;
        document.getElementsByTagName("head")[0].appendChild(script);
    });
}

function loadCSS(url) {
    return new Promise((resolve) => {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        link.onload = resolve;
        document.getElementsByTagName("head")[0].appendChild(link);
    });
}

function Ajax(url, call) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) call(this.response);
        else call(null);
    };

    request.send();
}

function Title(title) {
    if (title) document.getElementsByTagName("title")[0].innerHTML = title;
    return document.getElementsByTagName("title")[0].innerHTML;
}

function toggleBorder() {
    !window.TOG &&
        document.body.appendChild(
            (window.TOG = document.createElement("style"))
        );
    (window.CHK = !window.CHK)
        ? (TOG.innerHTML = `*{box-shadow: 0 0 0 1px cyan}`)
        : (TOG.innerHTML = "");
}
