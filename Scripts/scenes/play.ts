module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        private _space:objects.Space;
        private _island:objects.Island;
        private _rocks:objects.Rock[];
        private _rockNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildRocks():void {
            for (let count = 0; count < this._rockNum; count++) {
                this._rocks.push(new objects.Rock());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._plane = new objects.Plane();
            this._space = new objects.Space();
            this._island = new objects.Island();

            // creates an empty array of type Cloud
            this._rocks = new Array<objects.Rock>();
            this._rockNum = 3;

            this._buildRocks();
           
            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._space.Update();
            this._island.Update();

            managers.Collision.check(this._plane, this._island);

            this._rocks.forEach(Rock => {
                Rock.Update();
                managers.Collision.check(this._plane, Rock);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._space);

            // adding the island to the scene
            this.addChild(this._island);

            // adding the plane to the scene
            this.addChild(this._plane);

            // adding the Rock to the scene
            for (const Rock of this._rocks) {
                this.addChild(Rock);
            }
        }
    }
}