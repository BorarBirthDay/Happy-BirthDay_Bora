// carosil contents
let carosilItems = document.querySelectorAll(".carosil-items"); 
let counter = -1; 
setTimeout(() => {
    counter++; 
}, 10);
carosilItems.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
}); 
function slideImages(){ 
    carosilItems.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`; 
        slide.style.transition = "all 0.7s ease-in-out"; 
    })
}
const prevAction = ()=>{
    if(counter <1){ 
        counter = 15;
    }
    else{ 
        counter = counter - 1;
    }  
    slideImages(); 
    // console.log(counter)
}

const nextAction = ()=>{
    console.log(counter); 
    if(counter > 14){ 
        counter = 0;
    }
   else{ 
    counter = counter + 1; 
   }
    slideImages(); 
    // console.log(counter)
} 



// visiting links
let visitedPAge = window.location.pathname; 
let itemDiv = document.querySelectorAll(".items"); 
let navLinks = document.querySelectorAll(".nav a"); 
navLinks.forEach(link=>{
    if(link.href.includes(`${visitedPAge}`)){ 
        link.classList.add("active"); 
    }
 });