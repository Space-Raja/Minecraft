// Create the reference variable of the canvas using fabric.Canvas()
var canvas=fabric.Canvas("myCanvas")


// Define the starting width and height of the block images
var width_block=30;
var height_block=30;


// Define the starting x and y coordinates for the player
var player_x=150;
var player_y=140;


// Define a variable named player_object to store object of the player image
var player_object=""
var block_object=""

// Add a function named player_update() to add the player image
function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
       player_object=Img;
       player_object.scaleToWidth(150)
       player_object.scaleToHeight(146)
       player_object.set({
        top:player_y,
        left:player_x,
       }) 
       canvas.add(player_object)
    })

    
}






// Add a function named new_image() to add the different images as per the specific keys pressed

function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
       block_object=Img;
       block_object.scaleToWidth(width_block)
       block_object.scaleToHeight(height_block)
       block_object.set({
        top:player_y,
        left:player_x,
       }) 
       canvas.add(block_object)
    })

    
}

window.addEventListener("keydown", mykeydown)

function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed)
    if(e.shiftKey==true && keyPressed=="80"){
        width_block= width_block + 10;
        height_block= height_block + 10;
        console.log(width_block)
        document.getElementById("current_width").innerHTML=width_block;
        document.getElementById("current_height").innerHTML=height_block;
    }

    if(e.shiftKey==true && keyPressed=="77"){
        width_block= width_block - 10;
        height_block= height_block - 10;
        console.log(width_block)
        document.getElementById("current_width").innerHTML=width_block;
        document.getElementById("current_height").innerHTML=height_block;
    }

if(keyPressed=="67"){
    new_image("cloud.jpg") 
}

if(keyPressed="68"){
    new_image("dark_green.png")
}

if(keyPressed=="71"){
    new_image("ground.png") 
}

if(keyPressed=="76"){
    new_image("light_green.png") 
}

if(keyPressed=="82"){
    new_image("roof.jpg") 
}

if(keyPressed=="84"){
    new_image("trunk.jpg") 
}

if(keyPressed=="85"){
    new_image("unique.png") 
}

if(keyPressed=="87"){
    new_image("wall.jpg") 
}

if(keyPressed=="89"){
    new_image("yellow_wall.png") 
}

if(keyPressed=="38"){
    console.log("Up")
}

if(keyPressed=="40"){
    console.log("Down")
}

if(keyPressed=="37"){
    console.log("Left")
}

if(keyPressed=="39"){
    console.log("Right")
}

}