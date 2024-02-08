// game window reference
const gamewindow = document.getElementById("gameWindow");

// main character
const character = document.getElementById("character");
const offsetCharacter = 16;

const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");

gamewindow.onclick = function (e) {
    var rect = gamewindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    character.style.left = x - offsetCharacter + "px";
    character.style.top = y - offsetCharacter + "px";

    switch(e.target.id) {
        case "door1":
            door1.style.opacity = 0.5;
            sign.style.opacity = 0.8;
        break;

        case "sign":
            sign.style.opacity = 0.5;
            door1.style.opacity = 0.8;
        break;

        default:
            //explode
            door1.style.opacity = 0.8;
            sign.style.opacity = 0.8;

            break;
    }

}