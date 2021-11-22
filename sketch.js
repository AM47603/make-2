var go,go1,come;
var gameState=0;
var story2=1;
var playerName
var storyImage;
var enter=2;
var go2,go3,go4;
var play=3;
var player1,playerImage,player2,player2Image;
var arena;
function preload(){
 storyImage=loadImage("images/story.png")
 arena=loadImage("images/arena.png")
playerImage=loadImage("images/samurai2.png")
player2Image=loadImage("images/samurai.png")
}
function setup() {
createCanvas(windowWidth,windowHeight)
go=createButton("Play")
go.position(windowWidth/2.49,windowHeight/1.2);
come=createInput("Name")
come.position(windowWidth/2.53,windowHeight/1.4)
go1=createButton("OK")
go1.position(windowWidth/2.4,windowHeight/1.6);
go2=createButton("Start") 
go2.position(windowWidth/2.4,windowHeight/1.6);
come.style('width', '200px');
come.style('height', '20px');
come.style('background', 'lavender');
go.style('width', '200px');
go.style('height', '40px');
go.style('background', 'lightpink');
go1.style('width', '200px');
go1.style('height', '40px');
go1.style('background', 'lightpink');
go2.style('width', '200px');
go2.style('height', '40px');
go2.style('background', 'lightpink');
player1=createSprite(windowWidth/3.5,windowHeight/1.5,50,50)
 player1.addImage(playerImage);
 player2=createSprite(windowWidth/1.5,windowHeight/1.5,50,50)
 player2.addImage(player2Image)
 player1.visible=false;
 player2.visible=false;

//playerName = this.input.value();

}

function draw() {
  background(0);  
  //playerName = this.input.value();
 if(gameState==0){
  background(storyImage)
  textSize(60)
  fill("red")
  
  text("WELCOME TO SHADOW FIGHT WORLD",windowWidth/22,windowHeight/7)
  textSize(30)
  text("NOW YOU ARE NOT AN NORMAL PERSON NOW,",windowWidth/38,windowHeight/4)
  text("YOUR ARE AN WARRIOR WHO TRYS TO",windowWidth/2,windowHeight/3)
  text("SAVE HIS FAMILY AND VILLAGE FROM",windowWidth/34,windowHeight/2.58)
  text("KNIGHTS WHO ATTACKED THEIR TOWN.",windowWidth/1.99,windowHeight/2.22)
  text("BUT HE COULD NOT SAVE THEM.",windowWidth/27,windowHeight/1.9)
  text("NOW IT'S REVENGE TIME!",windowWidth/2,windowHeight/1.75)
  text("NOW ENTER YOUR NAME TO START",windowWidth/32,windowHeight/1.52)
  this.go.mousePressed(() => {
    gameState=story2;
});
this.go1.hide();
this.go2.hide();

 }
 if(gameState==1){
  background(storyImage)
  textSize(60)
  fill("red")
  if(this.come.value()!="Name"){
  text("Welcome Warrior "+come.value(),windowWidth/3.8,windowHeight/2)
  this.go2.show();
  this.go2.mousePressed(() => {
    gameState=play;
    this.go2.hide();
});   
  }
  else{ 
    text("Please Enter Your Name",windowWidth/3.8,windowHeight/2)
    this.go1.show();

    this.go1.mousePressed(() => {
      gameState=enter;
    
  });
  }
  this.go.hide();
  this.come.hide();
  
 }
if(gameState==2){
  background(storyImage)
  textSize(60)
  fill("red")
  
  text("WELCOME TO SHADOW FIGHT WORLD",windowWidth/22,windowHeight/7)
  textSize(30)
  text("NOW YOU ARE NOT AN NORMAL PERSON NOW,",windowWidth/38,windowHeight/4)
  text("YOUR ARE AN WARRIOR WHO TRYS TO",windowWidth/2,windowHeight/3)
  text("SAVE HIS FAMILY AND VILLAGE FROM",windowWidth/34,windowHeight/2.58)
  text("KNIGHTS WHO ATTACKED THEIR TOWN.",windowWidth/1.99,windowHeight/2.22)
  text("BUT HE COULD NOT SAVE THEM.",windowWidth/27,windowHeight/1.9)
  text("NOW IT'S REVENGE TIME!",windowWidth/2,windowHeight/1.75)
  text("NOW ENTER YOUR NAME TO START",windowWidth/32,windowHeight/1.52)
  this.go.mousePressed(() => {
    gameState=story2;
});
this.go1.hide();
this.go2.hide();
this.go.show();
this.come.show();

}
if(gameState==3){
  background(arena) 
  go4=createButton("Play")
go4.position(windowWidth/2.49,windowHeight/1.2);
go4.style('width', '200px');
go4.style('height', '40px');
go4.style('background', 'lightpink');
  this.go4.mousePressed(() => {
    player1.visible=true;
 player2.visible=true;
});
 
  
}
  drawSprites(); 

}
function hide(){
  this.go.hide();
  this.go1.hide();
  this.go2.hide();
  this.come.hide();
  player1.hide();
}
function show(){
 
  this.go.show();
  this.player1.show();
  this.go1.show();
  this.go2.show();
  this.come.show();
}