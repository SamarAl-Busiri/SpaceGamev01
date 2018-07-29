module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        private _space:objects.Space;
        private _fuel:objects.Fuel;
        private _rocks:objects.Rock[];
        private _rockNum:number;
        private _scoreBoard: managers.ScoreBoard;
        
        
        
        public fantasySound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildRocks():void {
            for (let count = 0; count < this._rockNum; count++) {
                this._rocks.push(new objects.Rock());
                
            }
        }

        // public methods
        public Start():void {
            this.fantasySound = createjs.Sound.play("fantasy");
            this.fantasySound.loop = -1;
            this.fantasySound.volume = 0.5;

           
            this._plane = new objects.Plane();
            this._space = new objects.Space();
            this._fuel = new objects.Fuel();
            
            

            // creates an empty array of type Cloud
            this._rocks = new Array<objects.Rock>();
            this._rockNum = 3;

            this._buildRocks();

            // create the scoreboard UI for the Scene
            this._scoreBoard = new managers.ScoreBoard();
            managers.Game.scoreBoard = this._scoreBoard;

           
            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._space.Update();
            this._fuel.Update();
           

            managers.Collision.check(this._plane, this._fuel);

            this._rocks.forEach(Rock => {
                Rock.Update();
                managers.Collision.check(this._plane, Rock);
                
            });
            // if lives fall below zero switch scenes to the game over scene
            if(this._scoreBoard.Lives <= 0) {
                this.fantasySound.stop();
                managers.Game.CurrentState = config.Scene.OVER;
                
                
            }

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            
            // adding the space to the scene
            this.addChild(this._space);

            // adding the fuel to the scene
            this.addChild(this._fuel);

            // adding the plane to the scene
            this.addChild(this._plane);

            // adding the Rock to the scene
            for (const Rock of this._rocks) {
                this.addChild(Rock);

            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            }
        }
    }
}