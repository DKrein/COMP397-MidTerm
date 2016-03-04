/*
Author: Douglas Krein
Last Modified by: Douglas Krein
Last Modified: 04-03-2016
File description: 
- Control the play scene where you roll the dice

Revision:
1 - added 2 images for the dice
2 - added button and event handler 
3 - added function to find a random number and display the image
4 - added the labels
*/


// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        
        private _rollButton: objects.Button;
        private _dice1: createjs.Bitmap;
        private _dice2: createjs.Bitmap;
        private _labelDice1: objects.Label;
        private _labelDice2: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Add Play Label
            this._playLabel = new objects.Label(
                "PLAY THE DICE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y-160);
            this.addChild(this._playLabel);
            
            
            // add Bet10Button to the scene
            this._rollButton = new objects.Button(
                "RollButton", 
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this); 
            
            this._dice1 = new createjs.Bitmap(assets.getResult("Blank"));
            this._dice1.x = config.Screen.CENTER_X-250;
            this._dice1.y = config.Screen.CENTER_Y-100;
            this.addChild(this._dice1);
            
            this._dice2 = new createjs.Bitmap(assets.getResult("Blank"));
            this._dice2.x = config.Screen.CENTER_X+50;
            this._dice2.y = config.Screen.CENTER_Y-100;
            this.addChild(this._dice2);
            
            this._labelDice1 = new objects.Label(
                "label1","20px Consolas", 
                "#000000", 
                config.Screen.CENTER_X-150,config.Screen.CENTER_Y+120);
            this.addChild(this._labelDice1);
            
            this._labelDice2 = new objects.Label(
                "label2","20px Consolas", 
                "#000000", 
                config.Screen.CENTER_X+150,config.Screen.CENTER_Y+120);
            this.addChild(this._labelDice2);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent): void {
            
            //I am not proud of this, but lets try to finish first
            var randDice1 = Math.floor((Math.random() * 6) + 1);
            var randDice2 = Math.floor((Math.random() * 6) + 1);
           
           this._labelDice1.text = randDice1.toString();
           this._labelDice2.text = randDice2.toString();
           
           this._dice1.image = assets.getResult(randDice1.toString());
           this._dice2.image = assets.getResult(randDice2.toString());
        }
    }
}