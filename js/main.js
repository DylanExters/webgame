// game window reference
const gamewindow = document.getElementById("gameWindow");

// main character
const character = document.getElementById("character");
const offsetCharacter = 16;

gamewindow.onclick = function (e) {
    var rect = gamewindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    character.style.left = x - offsetCharacter + "px";
    character.style.top = y - offsetCharacter + "px";

    if(e.target.id == "door1"){
        console.log("You need a key");
    }
}