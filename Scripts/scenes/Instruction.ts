module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _InstructionLabel: objects.Label;
        private _InstructionLabel1: objects.Label;
        private _InstructionLabel2: objects.Label;
        private _startButton: objects.Button;
        private _ExitButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            
            this._InstructionLabel = new objects.Label("Use your mouse to move the PLANE", "30px", "Consolas", "#000000", 320, 100, true);
            this._InstructionLabel1 = new objects.Label("Try to catch the FUEL", "30px", "Consolas", "#000000", 320, 140, true);
            this._InstructionLabel2 = new objects.Label("and avoid the ROCKS, Good Luck!", "30px", "Consolas", "#000000", 320, 180, true);
            this._startButton = new objects.Button("StartButton", 320, 280, true);
            this._ExitButton = new objects.Button("ExitButton", 320, 400, true );

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - INSTRUCTION SCENE`);
            this.addChild(this._InstructionLabel);
            this.addChild(this._InstructionLabel1);
            this.addChild(this._InstructionLabel2);
            this.addChild(this._startButton);
            this.addChild(this._ExitButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._ExitButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.END;
            }, this);
        }
    }
}