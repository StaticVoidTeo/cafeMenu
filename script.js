const select = document.querySelector(".options select");
const socialMedia = document.querySelector(".socialMedia");
const dotDot = document.querySelector(".showMedia");
const fb = document.querySelector("#fb");
const insta = document.querySelector("#insta");

let socialShown = false;

fb.addEventListener("click", () => alert("This would take you to the cafe's facebook page."));
insta.addEventListener("click", () => alert("This would take you to the cafe's instagram page."));

dotDot.addEventListener("click", () => {
    if(socialShown){
        socialShown = false;
        fb.style = "display:none;";
        insta.style = "display:none;";
    }
    else{
        socialShown = true;
        fb.style = "display:block;";
        insta.style = "display:block;";
    }
})

select.addEventListener("change", () => {
    document.querySelectorAll(".card").forEach(el => {
        el.style = "display:none;";
    })
    document.querySelectorAll(`.${select.value}`).forEach(el => {
        el.style = "display:block;";
    })
})