var numberOfDrumButtons=document.querySelectorAll(".drum").length;

//drum played by selecting key
//event listener added only to drum class.

for(var i=0;i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//drum played by keybord press
//event listener added to entire document.

document.addEventListener("keypress",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked.");
//    this.style.color = "white";
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked.");
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// });//this is same as above code.
// document.querySelector("button").addEventListener("click",handleClick());
//if we use this it will automatically call handleClick function without even clicking the button.

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}