var cnv;
var lImg,rImg,uImg,dImg;
var batteryCharge = 0;
var gameState = "PLAY";

function preload(){
  lImg = loadImage("assests/left.jpg");
  rImg = loadImage("assests/right.jpg");
  uImg = loadImage("assests/up.jpg");
  dImg = loadImage("assests/down.jpg");

  pacManLeft = loadAnimation("assests/pacLeft1.png","assests/pacLeft2.png","assests/pacLeft3.png");
  pacManRight = loadAnimation("assests/pacRight1.png","assests/pacRight2.png","assests/pacRight3.png");
  pacManUp = loadAnimation("assests/pacUp1.png","assests/pacUp2.png","assests/pacUp3.png");
  pacManDown = loadAnimation("assests/pacDown1.png","assests/pacDown2.png","assests/pacDown3.png");
  pacManStop = loadAnimation("assests/pacLeft1.png");
}

function setup() {
  cnv = createCanvas(windowWidth-100,windowHeight-100);
  //Centering the canvas
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  //Create border
  leftBorder = createSprite(20,240,5,height-200);
  leftBorder.shapeColor = "yellow";

  rightBorder = createSprite(width-20,240,5,height-200);
  rightBorder.shapeColor = "yellow";

  topBorder = createSprite(width/2,50,width-40,5);
  topBorder.shapeColor = "yellow";
 
  bottomBorder = createSprite(width/2,height-160,width-40,5);
  bottomBorder.shapeColor = "yellow";

  //Arrow keys 
  leftArrow = createSprite(width-250,height-80,30,30);
  leftArrow.addImage("L", lImg);
  leftArrow.scale = 0.25;

  rightArrow = createSprite(width-100,height-80,30,30);
  rightArrow.addImage("r", rImg);
  rightArrow.scale = 0.3;

  upArrow = createSprite(width-170,height-110,30,30);
  upArrow.addImage("u",uImg);
  upArrow.scale = 0.3;

  downArrow = createSprite(width-170,height-40,30,30);
  downArrow.addImage("d", dImg);
  downArrow.scale = 0.25;

  //Maze
  line1 = createSprite(95,100,150,10);
  line1.shapeColor = "white";
  line2 = createSprite(170,110,10,50);
  line2.shapeColor = "white";
  line3 = createSprite(295,120,100,10);
  line3.shapeColor = "white";
  line4 = createSprite(290,90,10,60);
  line4.shapeColor = "white";
  line5 = createSprite(400,190,10,200);
  line5.shapeColor = "white"; 
  line6 = createSprite(450,170,100,10);
  line6.shapeColor = "white";
  line7 = createSprite(50,200,10,130);
  line7.shapeColor = "white"; 
  line8 = createSprite(100,200,110,10);
  line8.shapeColor = "white"; 
  line9 = createSprite(150,260,10,120);
  line9.shapeColor = "white"; 
  line10 = createSprite(80,340,10,90);
  line10.shapeColor = "white"; 
  line11 = createSprite(160,320,100,10);
  line11.shapeColor = "white";
  line12 = createSprite(300,240,10,100);
  line12.shapeColor = "white";
  line13 = createSprite(350,350,120,10);
  line13.shapeColor = "white";
  line14 = createSprite(570,300,10,130);
  line14.shapeColor = "white";
  line15 = createSprite(520,300,110,10);
  line15.shapeColor = "white";
  line16 = createSprite(550,70,130,10);
  line16.shapeColor = "white";
  line17 = createSprite(570,120,10,100);
  line17.shapeColor = "white";
  line18 = createSprite(350,360,10,35);
  line18.shapeColor = "white";
  line19 = createSprite(750,200,200,10);
  line19.shapeColor = "white"; 
  line20 = createSprite(760,200,10,200);
  line20.shapeColor = "white";
  line21 = createSprite(900,100,10,100);
  line21.shapeColor = "white";
  line22 = createSprite(700,370,100,10);
  line22.shapeColor = "white";
  line23 = createSprite(700,200,100,10); 
  line23.shapeColor = "white"; 
  line24 = createSprite(900,300,150,10);
  line24.shapeColor = "white"; 
  line25 = createSprite(1050,200,10,200);
  line25.shapeColor = "white";
  line26 = createSprite(1100,370,100,10);
  line26.shapeColor = "white";

  //Green boxes which will charge PACMan
  charge1 = createSprite(100,150,30,30);
  charge1.shapeColor = "green";
  charge3 = createSprite(120,350,30,30);
  charge3.shapeColor = "green";
  charge4 = createSprite(200,200,30,30);
  charge4.shapeColor = "green";
  charge5 = createSprite(200,350,30,30);
  charge5.shapeColor = "green";
  charge6 = createSprite(350,250,30,30);
  charge6.shapeColor = "green";
  charge7 = createSprite(500,130,30,30);
  charge7.shapeColor = "green";
  charge8 = createSprite(500,230,30,30);
  charge8.shapeColor = "green";
  charge9 = createSprite(480,330,30,30);
  charge9.shapeColor = "green";
  charge10 = createSprite(600,300,30,30);
  charge10.shapeColor = "green";
  charge11 = createSprite(700,250,30,30);
  charge11.shapeColor = "green";
  charge12 = createSprite(700,150,30,30);
  charge12.shapeColor = "green";
  charge13 = createSprite(900,200,30,30);
  charge13.shapeColor = "green";
  charge14 = createSprite(900,350,30,30);
  charge14.shapeColor = "green";
  charge15 = createSprite(1000,250,30,30);
  charge15.shapeColor = "green";
  charge16 = createSprite(950,100,30,30);
  charge16.shapeColor = "green";
  charge17 = createSprite(1100,200,30,30);
  charge17.shapeColor = "green";

  //Pacman
  pacMan = createSprite(200,100,20,20);
 // pacMan.debug = true;
  pacMan.scale = 0.7;
  pacMan.setCollider("circle",0,0,30);
  pacMan.addAnimation("pacLeft",pacManLeft);
  pacMan.addAnimation("pacRight",pacManRight);
  pacMan.addAnimation("pacUp",pacManUp);
  pacMan.addAnimation("pacDown",pacManDown);
  //pacMan.addAnimation("pacStop",pacManStop);
}

function draw() {
  background(0);  

  if(gameState === "PLAY"){
    move();

    //Bounce Off pacMan

    pacMan.bounceOff(line1);
    pacMan.bounceOff(line2);
    pacMan.bounceOff(line3);
    pacMan.bounceOff(line4);
    pacMan.bounceOff(line5);
    pacMan.bounceOff(line6);
    pacMan.bounceOff(line7);
    pacMan.bounceOff(line8);
    pacMan.bounceOff(line9);
    pacMan.bounceOff(line10);
    pacMan.bounceOff(line11);
    pacMan.bounceOff(line12);
    pacMan.bounceOff(line13);
    pacMan.bounceOff(line14);
    pacMan.bounceOff(line15);
    pacMan.bounceOff(line16);
    pacMan.bounceOff(line17);
    pacMan.bounceOff(line18);
    pacMan.bounceOff(line19);
    pacMan.bounceOff(line20);
    pacMan.bounceOff(line21);
    pacMan.bounceOff(line22);
    pacMan.bounceOff(line23);
    pacMan.bounceOff(line24);
    pacMan.bounceOff(line25);
    pacMan.bounceOff(line26);

    pacMan.bounceOff(leftBorder);
    pacMan.bounceOff(rightBorder);
    pacMan.bounceOff(topBorder);
    pacMan.bounceOff(bottomBorder);

    score();
    if(batteryCharge === 16){
      gameState = "END";
    }
  }
  else if(gameState === "END"){
    textSize(100);
    fill(Math.round(random(20,200)));
    text("YOU WON!!",300,300);
    //pacMan.changeAnimation("pacStop",pacManStop);
    pacMan.setVelocity(0,0);
  }
  drawSprites();
  //Game Title
  textSize(24);
  fill(255);
  text("MONSTER MAZE", width/2-70,40);

  //Rules
  push();
  text("Eat all the green squares to charge your monster!", 300,height-130);
  text("Use the arrow keys to move the monster or press the arrows on the screen",30,height-100);
  textSize(50);
  fill("lightblue");
  text("CHARGE:" + batteryCharge,350,height-50);
  pop();

 // text(mouseX + "," +mouseY,mouseX,mouseY);
}

function move(){
  if (keyDown("UP_ARROW") || mousePressedOver(upArrow)) {
      pacMan.changeAnimation("pacUp",pacManUp);
      pacMan.setSpeedAndDirection(4, -90);
  }
  if (keyDown("DOWN_ARROW") || mousePressedOver(downArrow)) {
    pacMan.changeAnimation("pacDown",pacManDown);
    pacMan.setSpeedAndDirection(4, 90);
  }
  if (keyDown("LEFT_ARROW") || mousePressedOver(leftArrow)) {
    pacMan.changeAnimation("pacLeft",pacManLeft);
    pacMan.setSpeedAndDirection(4, 180);
  }
  if (keyDown("RIGHT_ARROW") || mousePressedOver(rightArrow)) {
    pacMan.changeAnimation("pacRight",pacManRight);
    pacMan.setSpeedAndDirection(4, 0);
  }
}

function score(){
  if(pacMan.collide(charge1)){
    batteryCharge = batteryCharge + 1;
    charge1.destroy();
  }

  if(pacMan.collide(charge3)){
    charge3.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge4)){
    charge4.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge5)){
    charge5.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge6)){
    charge6.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge7)){
    charge7.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge8)){
    charge8.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge9)){
    charge9.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge10)){
    charge10.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge11)){
    charge11.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge12)){
    charge12.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge13)){
    charge13.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge14)){
    charge14.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge15)){
    charge15.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge16)){
    charge16.destroy();
    batteryCharge = batteryCharge + 1;
  }

  if(pacMan.collide(charge17)){
    charge17.destroy();
    batteryCharge = batteryCharge + 1;
  }
}
