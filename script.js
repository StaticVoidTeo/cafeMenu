// const select = document.querySelector(".options select");
const socialMedia = document.querySelector(".socialMedia");
const dotDot = document.querySelector(".showMedia");
const fb = document.querySelector("#fb");
const insta = document.querySelector("#insta");

let socialShown = false;

fb.addEventListener("click", () => alert("This would take you to the cafe's facebook page."));
insta.addEventListener("click", () => alert("This would take you to the cafe's instagram page."));

window.addEventListener("scroll", () => {
    socialShown = false;
    fb.style = "display:none;";
    insta.style = "display:none;";
})

dotDot.addEventListener("click", () => {
    if(socialShown){
        fb.style = "display:none;";
        insta.style = "display:none;";
    }
    else{
        fb.style = "display:flex;";
        insta.style = "display:flex;";
    }
    socialShown = !socialShown;
})