//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;

    let Manifest = [
        {id: "StartButton", src:"/Assets/images/StartButton.png"},
        {id: "InstructionButton", src:"/Assets/images/InstructionButton.png"},
        {id: "ExitButton", src:"/Assets/images/ExitButton.png"},
        {id: "restartButton", src:"/Assets/images/restartButton.png"},
        {id: "plane", src:"/Assets/images/plane.png"},
        {id: "space", src:"/Assets/images/space.jpg"},
        {id: "Fuel", src:"/Assets/images/Fuel.png"},
        {id: "Rock", src:"/Assets/images/rock.png"},
        {id: "life", src:"/Assets/audio/life.wav"},
        {id: "explosion", src:"/Assets/audio/explosion.mp3"},
        {id: "fantasy", src:"/Assets/audio/fantasy.ogg"}
    ]


    function Init():void {
        console.log(`%c Assets Loading...`,"font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start():void {
        console.log(`%c Game Initializing...`,"font-weight:bold; font-size:20px; color: red;");
         canvas = document.getElementsByTagName("canvas")[0];
        
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage; // create a reference to the stage class

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;

        // This is where all the magic happens
        Main();
    }

    function Update():void {
        if(CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();
    }

    function Main():void {
        console.log(`%c Switching Scenes...`,"font-style:italic; font-size:16px; color:blue;");

        if(CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
    
        switch(CurrentState) {
            case config.Scene.START:
            CurrentScene = new scenes.Start();
            break;

            case config.Scene.PLAY:
            CurrentScene = new scenes.Play();
            break;

            case config.Scene.INSTRUCTION:
            CurrentScene = new scenes.Instruction();
            break;
            
            case config.Scene.OVER:
            CurrentScene = new scenes.Over();
            break;

            case config.Scene.END:
            CurrentScene = new scenes.End();
            break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();