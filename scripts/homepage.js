document.addEventListener("DOMContentLoaded", function () {
    var appear = document.getElementById("email");
    var button = document.getElementById("contact")
    console.log(appear.innerHTML);
    function emailAppear(){
        if (appear.style.display === "none"){
            appear.style.display = "block";
        } else {
            appear.style.display = "none";
        }
    }
    button.addEventListener("click", emailAppear);
}, false);