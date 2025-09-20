let menuBaar = document.querySelector(".menuBaar");
menuBaar.style.display = "none";


function menuBaarBtn() {

    // write the code to animate and show the menubar with css
    if (menuBaar.style.display === "none") {
        menuBaar.style.display = "block";
        setTimeout(() => {
            menuBaar.classList.toggle("clicked_menuBaar");
        }, 50);

    } else {
        menuBaar.classList.remove("clicked_menuBaar");
        setTimeout(() => {
        menuBaar.style.display = "none";
        }, 400);
    }
}
// ------ nav button line to cross animation ------
function myFunction(x) {
  x.classList.toggle("change");
}



// to show and hide the card content
// let cardHeaders = document.querySelectorAll(".card_content");
// let cardContents = document.querySelectorAll(".card_content_text");
// cardHeaders.forEach(header => {
//     header.addEventListener("click", () => {
//         cardContents.forEach(content => {
//             content.classList.remove("show_content");
//         });
//         header.nextElementSibling.classList.toggle("show_content");
//     });
// });
    const items = document.querySelectorAll(".card_content");

    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });