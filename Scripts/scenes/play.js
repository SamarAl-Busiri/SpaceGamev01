var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildRocks = function () {
            for (var count = 0; count < this._rockNum; count++) {
                this._rocks.push(new objects.Rock());
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.fantasySound = createjs.Sound.play("fantasy");
            this.fantasySound.loop = -1;
            this.fantasySound.volume = 0.5;
            this._plane = new objects.Plane();
            this._space = new objects.Space();
            this._fuel = new objects.Fuel();
            // creates an empty array of type Cloud
            this._rocks = new Array();
            this._rockNum = 3;
            this._buildRocks();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._plane.Update();
            this._space.Update();
            this._fuel.Update();
            managers.Collision.check(this._plane, this._fuel);
            this._rocks.forEach(function (Rock) {
                Rock.Update();
                managers.Collision.check(_this._plane, Rock);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the space to the scene
            this.addChild(this._space);
            // adding the fuel to the scene
            this.addChild(this._fuel);
            // adding the plane to the scene
            this.addChild(this._plane);
            // adding the Rock to the scene
            for (var _i = 0, _a = this._rocks; _i < _a.length; _i++) {
                var Rock = _a[_i];
                this.addChild(Rock);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map