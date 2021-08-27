class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.greeting = createElement('h3');
  }
  hide(){
this.input.hide();
this.button.hide();
this.title.hide();
this.greeting.hide();

  }
  display(){
    
    this.title.position(130, 0);
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.name=name;
      player.update();
      player.updateCount(playerCount);
  
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });

  }
}
