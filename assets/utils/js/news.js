const scrollTopContainer = document.getElementById("scroll-top-container");
const scrollButtonEl = document.getElementById("scroll-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        scrollTopContainer.classList.add("show");
    } else {
        scrollTopContainer.classList.remove("show");
    }
});

scrollButtonEl.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});