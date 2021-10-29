document.body.innerHTML += `<div class="left fl">
<div class="button no-select">
    <div class="group">
        <div class="item" id="ext" title="新建文件"><i class="fas fa-file-plus"></i></div>
        <div class="item" id="beautify" title="[F4] 格式化代码"><i class="fas fa-brush"></i></div>
        <div class="item" id="setting" title="设置"><i class="fa fa-cog"></i></div>
    </div>
    <div id="launch" title="[F9] 运行代码"><i class="fa fa-code"></i></div>
</div>
<pre id="code"></pre>
<div id="status"></div>
</div>
<div class="right fr">
<iframe frameborder="0" id="frame"></iframe>
<div class="console">
    <div class="title no-select">控制台</div>
    <div id="command"></div>
</div>
</div>
<div id="dialogBG"></div>
<div id="dialog" class="clearfix">
<div id="closer" class="fr">×</div>
<div class="title fl">设置</div>
<div class="content fl">
    <div class="item">
        <span class="description">自动折行</span>
        <input id="autoWarp" type="checkbox" class="chooseBtn">
        <label for="autoWarp" class="choose-label"></label>
    </div>
    <div class="item">
        <span class="description">字体大小</span>
        <input id="fontSize" type="number" min="11" max="30" step="1" value="17">
    </div>
    <p>简易 HTML 代码运行工具</p>
    <p>如需书写新内容请清除所有内容后刷新</p>
    <p>版权所有 © 2020 - 2021 <a href="https://xecades.xyz/" target="_blank" rel="noopener noreferrer">Xecades</a>
    </p>
</div>
</div>`;