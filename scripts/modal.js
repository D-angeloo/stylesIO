document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente carregado e analisado");


    var modal = document.getElementById("loginModal");
    console.log("Modal:", modal);

    var btn = document.getElementById("loginLink");
    console.log("Login Link:", btn);


    var span = document.getElementsByClassName("close")[0];
    console.log("Close Button:", span);

  
    btn.onclick = function(event) {
        event.preventDefault(); 
        modal.style.display = "block";
        console.log("Modal display style after opening:", modal.style.display);
        console.log("Abrir modal");

        var modalContent = document.querySelector(".modal-content");
        console.log("Modal Content:", modalContent);
        var emailInput = document.getElementById("email");
        console.log("Email Input:", emailInput);
        var passwordInput = document.getElementById("password");
        console.log("Password Input:", passwordInput);
        var loginButton = modalContent.querySelector("button[type='submit']");
        console.log("Login Button:", loginButton);
    }

 
    span.onclick = function() {
        modal.style.display = "none";
        console.log("Modal display style after closing:", modal.style.display);
        console.log("Fechar modal");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            console.log("Fechar modal ao clicar fora");
        }
    }
});
