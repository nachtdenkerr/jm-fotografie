function topFunction(){
    //Get the button:
    top_btn = document.getElementById("top-btn");
    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollIntoView({
        behavior: "smooth",}) = 0; // For Safari
    document.documentElement.scrollIntoView({
        behavior: "smooth",}) = 0; // For Chrome, Firefox, IE and Opera
    
}

function modalFunction(){
    // Get the button that opens the modal
    var btn = document.querySelectorAll("button.modal-button");
    // All page modals
    var modals = document.querySelectorAll(".modal");
    // When the user clicks the button, open the modal
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = function (e) {
            e.preventDefault();
            modals = document.querySelector(e.target.getAttribute("href"));
            modals.style.display = "block";
        };
    }
}

function closeFunction(){
    // All page modals
    var modals = document.querySelectorAll(".modal");
    // Get the <span> element that closes the modal
    var spans = document.getElementsByClassName("close");
    // When the user clicks on <span> (x), close the modal
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
            for (var index in modals) {
                if (typeof modals[index].style !== "undefined")
                modals[index].style.display = "none";
            }
        };
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target.classList.contains(".modal")) {
            for (var index in modals) {
                if (typeof modals[index].style !== "undefined")
                modals[index].style.display = "none";
            }
        }
    };
}