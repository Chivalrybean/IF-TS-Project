//"Welcome to this project - Placeholder text so file won't be empty and not upload.";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var room = /** @class */ (function () {
    function room(name, background, inventory, exits) {
        this.name = name;
        this.background = background;
        this.inventory = inventory;
        this.exits = exits;
        this.active = false;
    }
    return room;
}());
var person = /** @class */ (function () {
    function person(name, inventory, statuses) {
        this.name = name;
        this.inventory = inventory;
        this.statuses = statuses;
    }
    return person;
}());
var thingy = /** @class */ (function () {
    function thingy(name) {
        this.name = name;
    }
    return thingy;
}());
var trinket = /** @class */ (function (_super) {
    __extends(trinket, _super);
    function trinket(name, description) {
        var _this = _super.call(this, name) || this;
        _this.description = description;
        return _this;
    }
    return trinket;
}(thingy));
var device = /** @class */ (function (_super) {
    __extends(device, _super);
    function device(name, description, action) {
        var _this = _super.call(this, name) || this;
        _this.description = description;
        _this.action = action;
        return _this;
    }
    return device;
}(thingy));
//# sourceMappingURL=sailShip.js.map