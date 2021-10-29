window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalScoreManager() {
  var localSupported = !!window.localStorage;

  this.bestScore = "bestScore";
  this.over = "over";
  this.score = "score";
  this.gridCells = "gridCells";
  this.storage = localSupported ? window.localStorage : window.fakeStorage;
}

LocalScoreManager.prototype.get = function () {
  var bestScore = this.storage.getItem(this.bestScore);
  return parseInt(bestScore) || 0;
};

LocalScoreManager.prototype.set = function (score) {
  this.storage.setItem(this.bestScore, score);
};

LocalScoreManager.prototype.getOver = function () {
  var over = this.storage.getItem(this.over);
  if (over) {
    return over == 'true';
  }
  return false;
};

LocalScoreManager.prototype.setOver = function (over) {
  this.storage.setItem(this.over, over);
};

LocalScoreManager.prototype.getScore = function () {
  var score = this.storage.getItem(this.score);
  return parseInt(score) || 0;
};

LocalScoreManager.prototype.setScore = function (score) {
  this.storage.setItem(this.score, score);
};

LocalScoreManager.prototype.getGridCells = function () {
  var gridCells = this.storage.getItem(this.gridCells);
  if (!gridCells) {
    return [];
  }
  gridCells = JSON.parse(gridCells);
  for (var x = 0; x < gridCells.length; x++) {
    for (var y = 0; y < gridCells[x].length; y++) {
      var tile = gridCells[x][y];
      if (tile) {
        gridCells[x][y] = new Tile({ x: tile.x, y: tile.y }, tile.value);
      }
    }
  }
  return gridCells;
};

LocalScoreManager.prototype.setGridCells = function (cells) {
  cells = JSON.stringify(cells);
  this.storage.setItem(this.gridCells, cells);
};

