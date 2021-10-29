const edit = {
    doc: `<!DOCTYPE html>\n<html lang="zh-cn">\n\n<head>\n    <meta charset="utf-8">\n    <title>Document</title>\n</head>\n\n<body>\n    \n</body>\n\n</html>`,
    path: "https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict/",
    theme: "ace/theme/clouds",
    inject: `<script>\n// Code injected by tiy.xecades.xyz\nconsole.output = (type, msg) => parent.window.handleConsole(type, msg);\nconsole.log    = msg => console.output("log", msg);\nconsole.warn   = msg => console.output("warn", msg);\nconsole.error  = msg => console.output("error", msg);\nconsole.debug  = msg => console.output("log", msg);\nconsole.info   = msg => console.output("info", msg);\n\nwindow.onerror = (msg, url, row, col) => {\n    if (url == "") console.error(\`\${msg}  in line \${row}:\${col}\`);\n    else           console.error(\`in \${url}<br>\${msg}  in line \${row}:\${col}\`);\n    return true;\n}\n\nfunction __handleCommand(cmd) {\n    eval(\`try{console.output("return",\${cmd})}catch(e){console.error(e)}\`);\n}\n</script>`,
    cmdinsert: `<div class="item command"><span class="icon">❯❯</span><input id="commandLine" class="text" onkeydown="commandLineKeydown(this)"></input></div>`
};

const col    = ["#409eff", "#e6a23c"];
const colHov = ["#66b1ff", "#ebb563"];
const colAct = ["#3a8ee6", "#cf9236"];
const ls     = {fontSize: "FontSize", isWarp: "AutoWarp", theme: "Theme", doc: "edit", msg: "msg"};
const types  = {log: "❮❮", commanded: "❯❯", return: "❮·", warn: '<i class="fa fa-exclamation-triangle"></i>', error: '<i class="fa fa-times-circle"></i>', info: '<i class="fa fa-info-circle"></i>'};

var editor, themeList, lastCmd = "", cmd = "", isFileView = false, isMsgView = false;

const $get    = (key)            => localStorage.getItem(key) || null;
const $set    = (key, val)       => localStorage.setItem(key, val) || val;
const $del    = (key)            => localStorage.removeItem(key) || null;
const $var    = (key)            => decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
const isCtrl  = ()               => window.event.ctrlKey || window.event.metaKey;
const title   = (title)          => Title(title + " | 简易 HTML 在线编辑器");
const count   = (str, skipspace) => (str) ? (skipspace ? (str.match(/[^\s]/g) || "").length : str.length) : 0;
const getFile = (file, call)     => Ajax(`files/${file}.html`, call);
const setDoc  = (doc)            => editor.session.setValue(doc) || true;
const chgCSS  = (prop, val)      => document.documentElement.style.setProperty(prop, val);
const getSel  = ()               => (document.selection) ? document.selection.createRange().text : document.getSelection();

const editorChg    = ()     => {!isFileView && !isMsgView && $set(ls.doc, editor.getValue()); setColor(1); updateStatus();};
const editorSelect = ()     => {updateStatus();};
const openSelf     = ()     => {isMsgView && $set(ls.msg, editor.getValue()); window.open(window.location.href, "_blank");};
const chgWarp      = ()     => {editor.setOption("wrap", autoWarp.checked ? "free" : "none"); $set(ls.isWarp, autoWarp.checked);};
const chgFontSize  = ()     => {editor.setFontSize(+fontSize.value); $set(ls.fontSize, +fontSize.value);};
const setColor     = (type) => {chgCSS("--launch-color", col[type]); chgCSS("--launch-hov-color", colHov[type]); chgCSS("--launch-act-color", colAct[type]);};
const fileLoaded   = (doc)  => {setDoc(doc); (doc == edit.doc) && editor.gotoLine(10, 4, true); run(); return true;};

function format() {
    editor.setValue(html_beautify(editor.getValue()));
    editor.clearSelection();
    editor.focus();
}

function handleConsole(type, msg) {
    cmd += `<div class="item ${type}"><span class="icon">${types[type]}</span><span class="text">${msg}</span></div>`;
    command.innerHTML = cmd + edit.cmdinsert;
    command.scrollTo({top: command.scrollHeight, behavior: "smooth"});
    return true;
}

function commandLineKeydown(o) {
    var keyCode = window.event.keyCode || window.event.which || window.event.charCode;  

    if (keyCode == 13 && commandLine.value && !isCtrl()) {
        window.event.preventDefault();
        lastCmd = commandLine.value;
        handleConsole("commanded", lastCmd);
        codeFrame.window.__handleCommand(lastCmd);
        commandLine.value = "";
        commandLine.focus();
    }
    if (keyCode == 38 && !isCtrl()) commandLine.value = lastCmd;

    command.scrollTo({top: command.scrollHeight, behavior: "smooth"});
    o.style.height = o.scrollTop + o.scrollHeight + "px";
}

function run() {
    setColor(0);
    
    cmd = ""; command.innerHTML = edit.cmdinsert;

    frame.remove();
    frame = document.createElement("iframe");
    frame.id = "frame";
    frame.name = "codeFrame";
    frame.setAttribute("frameborder", "0");
    document.querySelector(".right").prepend(frame);

    var doc = document ? frame.contentWindow.document : frame.contentDocument;

    doc.open();
    doc.write(edit.inject + editor.getValue());
    doc.close();

    title(doc.title);

    editor.focus();
}

function initEditor(fontSize, isWarp, theme, doc) {
    editor = ace.edit("code");
    ace.config.set("basePath", edit.path);
    ace.require("ace/ext/language_tools");
    themeList = ace.require("ace/ext/themelist");

    editor.setTheme(theme);
    editor.setFontSize(fontSize);
    editor.setOption("wrap", isWarp ? "free" : "none");

    editor.session.setMode("ace/mode/html");
    editor.setReadOnly(false);
    editor.setShowPrintMargin(false);
    editor.setOptions({enableBasicAutocompletion: true, enableSnippets: true, enableLiveAutocompletion: true});

    $var("file") ? getFile($var("file"), doc => doc && (isFileView = true) && fileLoaded(doc)) : fileLoaded(doc);
}

function updateStatus() {
    var sel = editor.getSelectedText();
    var tot = editor.getValue();
    document.querySelector("#status").innerHTML = `${count(sel, false)} / ${count(tot, false)} | ${count(sel, true)} / ${count(tot, true)}`;
}

function keydown(e) {
    if (e.which == 120 && !isCtrl()) run();
    if (e.which == 115 && !isCtrl()) format();
    if (e.which == 83  &&  isCtrl()) window.event.preventDefault();
}

function cmdmouseup() {
    if (getSel() == "") {
        commandLine.focus();
        command.scrollTo({top: command.scrollHeight, behavior: "smooth"});
    }
}

function openDialog() {
    dialogBG.style["transition"] = dialog.style["transition"] = "opacity .2s";
    dialogBG.style["zIndex"] = dialog.style["zIndex"] = "2020";
    dialogBG.style["opacity"] = dialog.style["opacity"] = "1";

    setTimeout(() => {
        dialogBG.style["transition"] = dialog.style["transition"] = "";
    }, 200);
}

function closeDialog() {
    dialogBG.style["transition"] = dialog.style["transition"] = "opacity .2s";
    dialogBG.style["opacity"] = dialog.style["opacity"] = "0";
    
    setTimeout(() => {
        dialogBG.style["transition"] = dialog.style["transition"] = "";
        dialogBG.style["zIndex"] = dialog.style["zIndex"] = "";
    }, 200);
}

function message(e) {
    if (e.source != window.parent) return;
    var data = decodeURIComponent(escape(atob(e.data)));
    data && (isMsgView = true) && fileLoaded(data);
    console.clear();
}

function loaded() {
    loading.style["opacity"] = 0;
    setTimeout(() => { loading.remove() }, 300);
    if (isMsgView) return;
    console.clear();
    console.log(`
    ┌─简易 HTML 在线编辑器────────────────────────────────────┐
    │                                                        │
    │                HTML Online Launcher                    │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ Github                  https://github.com/Xecades/TIY │
    │ Website                           https://xecades.xyz/ │
    │ hexo-tag-tiy   https://github.com/Xecades/hexo-tag-tiy │
    │                                                        │
    ├────────────────────────────────────────────────────────┤
    │                                                        │
    │ MIT LICENSE                                            │
    │ Copyright © 2020 - 2021 Xecades                        │
    │                                                        │
    └────────────────────────────────────────────────────────┘
    `);
}

function setEditorFn() {
    editor.session.on('change', editorChg);
    editor.selection.on('changeSelection', editorSelect);

    launch.onclick     = run;
    ext.onclick        = openSelf;
    beautify.onclick   = format;
    setting.onclick    = openDialog;
    document.onkeydown = keydown;
    command.onmouseup  = cmdmouseup;
    dialogBG.onclick   = closeDialog;
    closer.onclick     = closeDialog;
    autoWarp.onchange  = chgWarp;
    fontSize.onchange  = chgFontSize;
    window.onmessage   = message;

    updateStatus();
    command.innerHTML  = edit.cmdinsert;
}

(() => {
    !$get(ls.fontSize) && $set(ls.fontSize, 17);
    !$get(ls.isWarp)   && $set(ls.isWarp,   false);
    !$get(ls.theme)    && $set(ls.theme,    edit.theme);
    !$get(ls.doc)      && $set(ls.doc,      edit.doc);
    
    initEditor(+$get(ls.fontSize), eval($get(ls.isWarp)), $get(ls.theme), $get(ls.doc));
    autoWarp.checked = eval($get(ls.isWarp)); fontSize.value = $get(ls.fontSize);
    setEditorFn();

    $get(ls.msg) && (isMsgView = true) && fileLoaded($get(ls.msg)) && handleConsole("info", "本页面将在刷新后消失。如果要保存代码，请手动复制或点击“在新窗口打开”。") && $del(ls.msg);

    window.msg && message(window.msg);
})();

window.onload = loaded;