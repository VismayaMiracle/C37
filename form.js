class Form{
    constructor(){
        
       this.input=createInput("Name")
       this.button= createButton("play")
      this.greeting=createElement("h3")
    
    }
    display()
    {
        var title= createElement("h2")
        title.html("Car Racing Game!")
        title.position(130,0)

    
       this.input.position(130,160)
        this.button.position(250,200)
       this.button.mousePressed(()=>{        //=> means refer to the form or main object

           this.input.hide()
           this.button.hide()

            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount;
            player.update(name)
            player.updateCount(playerCount)

           
           this.greeting.html("Guten Tag!"+ player.name)
           this.greeting.position(130,160)
            
        })
    }

    hide(){             //hide=called when the gameState changes to hide the form

        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }



}