const audios = [new Audio('sounds/crash.mp3'), new Audio('sounds/kick-bass.mp3'), new Audio('sounds/snare.mp3'), new Audio('sounds/tom-1.mp3'), new Audio('sounds/tom-2.mp3'), new Audio('sounds/tom-3.mp3'), new Audio('sounds/tom-4.mp3')];
const nodeList = document.querySelectorAll(".drum");
for(let i = 0; i < nodeList.length; i++){
    nodeList[i].addEventListener("click", function(){
        switch (this.innerHTML) {
            case "w":
                audios[3].cloneNode(true).play();
                break;
            case "a":
                audios[4].cloneNode(true).play();
                break;
            case "s":
                audios[5].cloneNode(true).play();
                break;
            case "d":
                audios[6].cloneNode(true).play();
                break;
            case "j":
                audios[2].cloneNode(true).play();
                break;
            case "k":
                audios[0].cloneNode(true).play();
                break;
            case "l":
                audios[1].cloneNode(true).play();
                break;
        }
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener('keydown', (e=> {
    if(!e.repeat) {
        if (e.key === 'w') {
            audios[3].cloneNode(true).play();
        } else if (e.key === 'a') {
            audios[4].cloneNode(true).play();
        } else if (e.key === 's') {
            audios[5].cloneNode(true).play();
        } else if (e.key === 'd') {
            audios[6].cloneNode(true).play();
        } else if (e.key === 'j') {
            audios[2].cloneNode(true).play();
        } else if (e.key === 'k') {
            audios[0].cloneNode(true).play();
        } else if (e.key === 'l') {
            audios[1].cloneNode(true).play();
        }
        buttonAnimation(e.key);
    }
})
);
document.addEventListener('keyup', (e=> {
        if(!e.repeat) {
            buttonAnimationUp(e.key);
        }
    })
);

function buttonAnimation(keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add('pressed');
    // setTimeout(function() {
    //     activeButton.classList.remove('pressed');
    //     }, 100);
}
function buttonAnimationUp(keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.remove('pressed');
}