var mycanvas = document.getElementById('Mycanvas');
var context = mycanvas.getContext('2d');
var scoreshow = document.getElementById('score');

// khởi tạo đối tượng của game
var birdimg = new Image();
var background = new Image();
var ongtren = new Image();
var ongduoi = new Image();

birdimg.src = "images/bird_sing.png";
background.src = "images/46888871-624a3900-ce7f-11e8-808e-99fd90c8a3f4.png";
ongtren.src = "images/tube1.png";
ongduoi.src = "images/tube2.png";



var score = 0;
var khoangcachgiua2ong = 140;
var khoangcachdeongnoiduoi;


var bird = {
    x:background.width/5,
    y:background.height/2
}

var ong=[];
ong[0] = {
    x:mycanvas.width,
    y:0
}

function run(){
    context.drawImage(background,0,0);
    context.drawImage(birdimg,bird.x,bird.y);
    for(var i=0;i<ong.length;i++){
        khoangcachdeongnoiduoi = ongtren.height + khoangcachgiua2ong;
        context.drawImage(ongtren,ong[i].x,ong[i].y);
        context.drawImage(ongduoi,ong[i].x,ong[i].y + khoangcachdeongnoiduoi);
        ong[i].x -=5;

        // theem ong khi di chuyen 
        if(ong[i].x == mycanvas.width/2){
            ong.push({
                x:mycanvas.width,
                y:Math.floor(Math.random()*ongtren.height) - ongtren.height
            })
           
        }
        
        if(ong[i].x == 0)ong.splice(0,1);
        if(ong[i].x == bird.x )score++; 
        if(bird.y+birdimg.height==mycanvas.height||
            bird.x+birdimg.width>= ong[i].x && bird.x <= ong[i].x +ongtren.width
            && (bird.y<=ong[i].y+ongtren.height||
            bird.y +birdimg.height>= ong[i].y+ khoangcachdeongnoiduoi)    
            ){
                return scoreshow.innerHTML = "Bajn da thua";
            }else{
               
            } 
                           
       
    }

    bird.y += 3 ;
    requestAnimationFrame(run);
}

scoreshow.innerHTML = "score: "+ score;

document.addEventListener("keydown",function(){
    bird.y -=60;
   
}) 
window.onclick = function(){
    bird.y -=60;
}
run();
