var database;
var canvas;
var gameState=0;
var playerCount;
var form,player,game;
var allplayers


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game()
  game.getstate()
  game.start()  

 
}

function draw(){
  background("white");
  
   if(playerCount===4){
     game.update(1)
   }
    
   if(gameState===1){
     game.play()
   }
  
}

