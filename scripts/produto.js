const resposta_nome = document.querySelector("#resposta_nome");
const resposta_descricao = document.querySelector("#resposta_descricao");
const resposta_preco = document.querySelector("#resposta_preco");
const resposta_imagem = document.querySelector("#resposta_img");
const comprar = document.querySelector("#comprar");
const id = localStorage.getItem("idProduto_selecionado");
const notification = document.querySelector("#notification");

async function buscarProduto() {
    try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();

        resposta_nome.textContent = dados.title;
        resposta_descricao.textContent = dados.description;
        resposta_preco.textContent = dados.price;
        resposta_imagem.src = dados.image;
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
    }
}

buscarProduto();

comprar.addEventListener("click", async () => {
    try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();

        const lista_carrinho = JSON.parse(localStorage.getItem("lista_carrinho")) || [];

        if (lista_carrinho.length > 0) {
            let encontrado = false;
            lista_carrinho.forEach((item) => {
                if (item.id === dados.id) {
                    encontrado = true;
                    item.quantidade += 1;
                }
            });
            if (!encontrado) {
                lista_carrinho.push(dados);
            }
        } else {
            lista_carrinho.push(dados);
        }

        localStorage.setItem("lista_carrinho", JSON.stringify(lista_carrinho));
        mostrarNotificacao();
    } catch (error) {
        console.error("Erro ao adicionar produto ao carrinho:", error);
    }
});

function mostrarNotificacao() {
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}
