document.getElementById("mainTitle").innerText = "Point and Click adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Game state
let gameState = {
    "door2locked": true,
    "inventory": [
    ]
}


const sec = 1000;

//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//speech bubbles
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const counterAvatarImg = document.getElementById("counterAvatarImg");
const mcAudio = document.getElementById("mcAudio");
const cAudio = document.getElementById("cAudio");
//Inventory
const inventoryBox = document.getElementById("inventoryBox"); //div
const inventoryList = document.getElementById("inventoryList"); //ul

//Foreground Items
const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");

showMessage(counterSpeech, mcAudio, "Hey i should probely find a key..");



gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (e.target.id !== "mcImage") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }

    console.log(e.target.id);
    switch (e.target.id) {

        case "key1":
            sign.style.opacity = 1;
            if (document.getElementById("key1") !== null) {
                console.log('Found key!');
                document.getElementById("key1").remove();
                changeInventory('key', 'add');
                showMessage(mainCharacterSpeech, mcAudio, "Hey i found a key..");
                setTimeout(function () { counterAvatarImg.style.opacity = 1; }, 4 * sec);
                setTimeout(showMessage, 2 * sec, counterSpeech, cAudio, "Boo!!");
                setTimeout(showMessage, 5 * sec, mainCharacterSpeech, mcAudio, "Ahhh! a ghost.");
                setTimeout(showMessage, 8 * sec, counterSpeech, cAudio, "Calm down im here to help you.");
                setTimeout(showMessage, 11 * sec, mainCharacterSpeech, mcAudio, "Do you know what the key is for?");
                setTimeout(showMessage, 15 * sec, counterSpeech, cAudio, "You should check the barns in the area...");
                setTimeout(function () { counterAvatarImg.style.opacity = 0; }, 114 * sec);
            }

            break;
        case "door2":
            if (gameState.door2locked == true) {
                // check if we have key
                if (document.getElementById("inv-key") !== null) {
                    //yes -> unlock door?
                    gameState.door2locked = false;
                    changeInventory('key', 'delete');
                    console.log('Door unlocked!');
                    alert("YOU WIN!!! :)."); 
                 

                } else {
                    //no -> alert 'door locked'
                    alert("Door is locked!");
                }
            } else {
                console.log('enter building');
            }
        
            break;

        case "door3":
        alert("Wrong door my friend!."); 

        break;
        case "door4":
        alert("Get out of here!!."); 
                
        break;
        case "door5":
        alert("...."); 
                
        break;
        case "door6":
        alert("NO!"); 
                
        break;
        case "door7":
        alert("Not here."); 
                
        break;

        case "sign":

            sign.style.opacity = 0.5;

            break;

        case "statue":
            
            break;

        default:
            //explode


            sign.style.opacity = 1;
            break;

    }
}

/**
 * function to change inventory
 * @param {string} itemName 
 * @param {string} action "add", "delete"
 * @returns 
 */
function changeInventory(itemName, action) {
    if (itemName == null || action == null) {
        console.log('wrong parameters given to changeInventory()');
        return
    }

    switch (action) {
        case 'add':
            gameState.inventory.push(itemName);
            break
        case 'delete':
            gameState.inventory.find(function (item, index) {
                if (item == itemName) {
                    var index = gameState.inventory.indexOf(item);
                    if (index !== -1) {
                        gameState.inventory.splice(index, 1);
                    }
                }
            })
            break

        default:
            break;
    }
    updateInventory(gameState.inventory, inventoryList);
}

/**
 * update inventoryList
 * @param {Array} inventory array of items 
 * @param {HTMLElement} inventoryList html <ul> element 
 */
function updateInventory(inventory, inventoryList) {
    inventoryList.innerHTML = '';
    inventory.forEach(function (item) {
        const inventoryItem = document.createElement("li");
        inventoryItem.id = "inv-" + item;
        inventoryItem.innerText = item;
        inventoryList.appendChild(inventoryItem);
    })
}

/**
 * Shows a message in a speech bubble
 * @param {getElementById} targetBalloon 
 * @param {getElementById} targetSound 
 * @param {string} message 
 */
function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

/**
 * Set the opacity to 0
 * @param {getElementById} targetBalloon 
 * @param {getElementById} targetSound 
 */
function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
}
