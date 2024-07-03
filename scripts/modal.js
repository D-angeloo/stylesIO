document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente carregado e analisado");

    // Obtenha o modal
    var modal = document.getElementById("loginModal");
    console.log("Modal:", modal);

    // Obtenha o link que abre o modal
    var btn = document.getElementById("loginLink");
    console.log("Login Link:", btn);

    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];
    console.log("Close Button:", span);

    // Quando o usuário clicar no link de login, abre o modal
    btn.onclick = function(event) {
        event.preventDefault(); // Impede o redirecionamento padrão do link
        modal.style.display = "block";
        console.log("Modal display style after opening:", modal.style.display);
        console.log("Abrir modal");

        // Verifica se os elementos internos do modal estão visíveis
        var modalContent = document.querySelector(".modal-content");
        console.log("Modal Content:", modalContent);
        var emailInput = document.getElementById("email");
        console.log("Email Input:", emailInput);
        var passwordInput = document.getElementById("password");
        console.log("Password Input:", passwordInput);
        var loginButton = modalContent.querySelector("button[type='submit']");
        console.log("Login Button:", loginButton);
    }

    // Quando o usuário clicar em <span> (x), fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
        console.log("Modal display style after closing:", modal.style.display);
        console.log("Fechar modal");
    }

    // Quando o usuário clicar fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            console.log("Fechar modal ao clicar fora");
        }
    }
});
