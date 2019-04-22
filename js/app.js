var sun = new Image();
var earth = new Image();
var venus = new Image();
var mercury = new Image();
var moon = new Image();

function initialize(){

    sun.src = './img/maxresdefault.jpg';
    earth.src = './img/earth4.png';
    venus.src = './img/venus.png';
    mercury.src = './img/mercury.png';
    moon.src = './img/moon.png';
    window.requestAnimationFrame(drawSolarSystem);
}


function drawSolarSystem(){

    var context = document.getElementById('canvas').getContext('2d');
    context.globalCompositeOperation = 'destination-over';
    context.clearRect(100, 20, 800, 450); 
    //context.fillStyle = 'rgba(0, 0, 0, 0.6)';
    //context.strokeStyle = 'rgba(37, 116, 169, 1)';

   // Earth
    context.save();
    context.translate(400, 227);
    var time = new Date();
    context.rotate(((2*Math.PI) / 20) * time.getSeconds() + ((2 * Math.PI) / 20000) * time.getMilliseconds());    
    context.drawImage(earth, 170, -10);
    context.restore();
    context.beginPath();
    context.arc(400, 225, 185, 0, Math.PI * 2, false);   
    context.stroke();
    context.restore();

    //moon

    /* context.save();
    context.translate(400, 200);

    context.rotate(((2*Math.PI) / 20) * time.getSeconds() + ((2 * Math.PI) / 20000) * time.getMilliseconds());    
    context.drawImage(moon, 170, -10);
    context.restore();
    context.beginPath();
    context.arc(400, 220, 180, 0, Math.PI * 2, false);  

    context.restore(); */
   
   
    //venus
    context.save();
    context.translate(400, 225);
    context.rotate(((2*Math.PI) / 20)* 1.2 * time.getSeconds() + (2*Math.PI/20000)*1.2*time.getMilliseconds());    
    context.drawImage(venus, 120, -6);
    context.restore();
    context.beginPath();
    context.arc(400, 225, 130, 0, Math.PI * 2, false);   
    context.stroke();
    context.restore();

    //mercury
    context.save();
    context.translate(400,225);
    context.rotate(((2*Math.PI) / 20)* 1.7 * time.getSeconds() + (2*Math.PI/20000)*1.7*time.getMilliseconds());    

    context.drawImage(mercury, 62, 0);
    context.restore();
    context.beginPath();
    context.arc(400, 225, 70, 0, Math.PI * 2, false);   
    context.stroke();
    context.restore();


    //draw Sun
    context.drawImage(sun, 0, 0, 800, 450);
    window.requestAnimationFrame(drawSolarSystem);

}

initialize();


