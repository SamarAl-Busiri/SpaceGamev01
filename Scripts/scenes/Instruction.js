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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._InstructionLabel = new objects.Label("Use your mouse to move the PLANE", "30px", "Consolas", "#000000", 320, 100, true);
            this._InstructionLabel1 = new objects.Label("Try to catch the FUEL", "30px", "Consolas", "#000000", 320, 140, true);
            this._InstructionLabel2 = new objects.Label("and avoid the ROCKS, Good Luck!", "30px", "Consolas", "#000000", 320, 180, true);
            this._startButton = new objects.Button("StartButton", 320, 280, true);
            this._ExitButton = new objects.Button("ExitButton", 320, 400, true);
            this.Main();
        };
        Instruction.prototype.Update = function () {
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Starting - START SCENE");
            this.addChild(this._InstructionLabel);
            this.addChild(this._InstructionLabel1);
            this.addChild(this._InstructionLabel2);
            this.addChild(this._startButton);
            this.addChild(this._ExitButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._ExitButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instruction.js.map