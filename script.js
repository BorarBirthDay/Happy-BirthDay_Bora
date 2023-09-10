let body = document.querySelector("body"); 
let container = document.querySelector(".container"); 
let heart = container.querySelector(".heart"); 
let text = container.querySelector(".text"); 
let iTag = text.querySelector("i"); 
let button = container.querySelector(".button"); 
let amarBora = container.querySelector("#sneha-bora"); 
let popup = document.querySelector(".popup"); 

// button.classList.add("button-blue"); 
let counter = 0; 
heart.addEventListener("click", ()=>{ 
    counter++; 
    button.classList.add("button-show"); 
    switch(counter){ 
        case 1: 
        heart.classList.remove("three-click")
            heart.classList.add("one-click");
            text.classList.add("text-1"); 
            text.classList.remove("text-0"); 
            body.classList.add("click-1"); 
            body.classList.remove("click-3"); 
            button.classList.add("button-green"); 
            amarBora.classList.add("when-green"); 
            amarBora.classList.remove("when-red"); 
            break; 
        case 2:
            heart.classList.remove("one-click"); 
             heart.classList.add("two-click");
             text.classList.add("text-2"); 
            text.classList.remove("text-1"); 
            body.classList.add("click-2"); 
            body.classList.remove("click-1"); 
            button.classList.remove("button-green");
            button.classList.add("button-white"); 
            amarBora.classList.add("when-white"); 
            amarBora.classList.remove("when-green"); 
            break; 
        case 3: 
            heart.classList.remove("two-click"); 
            heart.classList.add("three-click");
            text.classList.add("text-3"); 
            text.classList.remove("text-2");
            body.classList.add("click-3"); 
            body.classList.remove("click-2");  
             button.classList.remove("button-white");
            button.classList.add("button-blue"); 
            amarBora.classList.add("when-blue"); 
            amarBora.classList.remove("when-white"); 
        break;
        case 4:
            heart.classList.remove("three-click");  
            text.classList.add("text-0"); 
            text.classList.remove("text-3");  
            body.classList.remove("click-3"); 
            button.classList.remove("button-blue");
            amarBora.classList.add("when-red"); 
            amarBora.classList.remove("when-blue"); 
            
            break; 
    }
    if(counter > 3){ 
        counter = 0; 
    }
}); 
let beattingHeart = container.querySelector(".beatting-heart")
button.addEventListener("click", ()=>{ 
    container.classList.add("container-display"); 
    popup.classList.add("popup-show"); 

}); 

    

