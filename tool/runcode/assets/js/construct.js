(async () => {
    await loadCSS("assets/css/loading.css");
    await loadCSS("assets/css/style.css");
    await loadCSS("assets/css/reset.css");

    await loadCSS("https://cdn.jsdelivr.net/gh/volantis-x/cdn-fontawesome-pro@master/css/all.min.css");

    await loadJS("https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ace.min.js");
    await loadJS("https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ext-language_tools.js");
    await loadJS("https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/ext-themelist.js");

    await loadJS("assets/js/beautify.min.js");
    await loadJS("assets/js/beautify-css.min.js");
    await loadJS("assets/js/beautify-html.min.js");

    await loadJS("assets/js/content.js");
    await loadJS("assets/js/script.js");
})();