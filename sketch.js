  var boy, boyImg;{
    var path, pathImg;
    var rightBoundary, leftBoundary;
    
    
      //imagens pré-carregadas
      function preload (){
    
      pathImg = loadImage("path.png");
    
      boyImg = loadAnimation ("Runner-1.png","Runner-2.png");
      }
    }
    
    
    function setup(){
      createCanvas(400,400);
      //crie sprite aqui
    
      
      
      boy.creatSprite(180,340,30,30);
      boy.addImage("jakerunning",boyImg);
      boy.scale = 0.08;
      
      path = creatSprite(200,200);
      path.addImage(pathImg);
      path.scale=1.2;
      //path.velocityY = 1;
    
      leftBoundary = createSprite(0,0,100,800);
      leftBoundary.visible = false;       
    
    
      rightBoundary = creatSprite(410,0,100,800);
      rightBoundary.visible = false;
    }
    
    function draw() {
      background(0);
    
    
    
    path.velocityY = 4;
    
    
    boy.x = World.mouseX;
    
    
    edges = createEdgesSprites();
    
    
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    
    if(path.y > 400){
    path.y = height/2;
    
    drawSprites();
    
    }
    
    }
    