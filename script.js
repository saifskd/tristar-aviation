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


    const items = document.querySelectorAll(".card_content");

    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });


    // ----------------form submition-------------

    function submitDeta(){
    let formInfo = {
        firstName: document.querySelector("#form-first-name").value,
        lastName: document.querySelector("#form-last-name").value,
        email: document.querySelector("#form-email").value,
        number: document.querySelector("#form-number").value,
        message: document.querySelector("#form-message").value,
    }

    for (let i = 0; i < 1; i++) {
        if (i < formInfo.firstName.length) {
            emailjs.send("service_nvd7t5s", "template_xckqqre", formInfo).then(
                alert("✅ Thank you! Your message has been sent successfully. I’ll get back to you soon.")
            );
        }
    }
}

