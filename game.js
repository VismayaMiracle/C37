class Game{
    constructor(){
        
    }
    
    getstate(){

        var getstateRef=database.ref("gameState")  
        getstateRef.on("value",function(data){                   
          
            gameState=data.val()

        })
    }
    update(state){
        database.ref("/").update({      // '/' means referring to the main database 

            gameState:state
        })  


    }

   async start(){          //async=wait

        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value")

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val()
                player.getCount()
            }

          
            form=new Form()
            form.display()
        }
    }
play(){
     
form.hide()
textSize(32)
text("Game Start",120,100)
Player.getPlayerinfo()

if(allplayers!=undefined){
      var display_pos=130
      for(var i in allplayers){

        if(i=="player"+player.index){
            fill("purple")
        }
        else{
            fill("blue")
        }
      display_pos+=20
      textSize(10)
      text(allplayers[i].name+":"+allplayers[i].distance,200,display_pos)

      }
}
if(keyIsDown(UP_ARROW)&& player.index!=null){
player.distance+=2
player.update()
}

}
  
}