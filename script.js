const select = document.querySelector(".options select");

select.addEventListener("change", () => {
    document.querySelectorAll(".card").forEach(el => {
        el.style = "display:none;";
    })
    document.querySelectorAll(`.${select.value}`).forEach(el => {
        el.style = "display:block;";
    })
})