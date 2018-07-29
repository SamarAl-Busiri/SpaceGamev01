module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _InstructionButton: objects.Button;
        private _ExitButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._welcomeLabel = new objects.Label("Space Game", "60px", "Consolas", "#000000", 320, 180, true);
            this._startButton = new objects.Button("StartButton", 320, 280, true);
            this._InstructionButton = new objects.Button("InstructionButton", 320, 340, true );
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
            console.log(`Starting - START SCENE`);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._InstructionButton);
            this.addChild(this._ExitButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._InstructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);

            this._ExitButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}