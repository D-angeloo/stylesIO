const catalogo = document.querySelector("#catalogo");
const qtde_carrinho = document.querySelector("#qtde_carrinho");
const notification = document.querySelector("#notification");

console.log("Notification element:", notification);

const lista_carrinho = JSON.parse(localStorage.getItem("lista_carrinho")) || [];
if (qtde_carrinho) {
    qtde_carrinho.textContent = lista_carrinho.length;
}

async function buscarTodosProdutos() {
    try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();
        console.log("Produtos recebidos:", dados);

        dados.forEach((produto) => {
            produto.quantidade = 1;
            const novo_elemento = document.createElement("div");
            novo_elemento.id = produto.id;
            novo_elemento.classList.add("card");

            novo_elemento.addEventListener("click", (e) => {
                if (e.target.id !== "botao") {
                    window.location.href = "/produto.html";
                    localStorage.setItem("idProduto_selecionado", produto.id);
                }
            });

            const nome = document.createElement("h2");
            nome.textContent = produto.title;

            const imagem = document.createElement("img");
            imagem.src = produto.image;

            const preco = document.createElement("p");
            preco.textContent = "R$ " + produto.price;

            const botao = document.createElement("button");
            botao.textContent = "Comprar";
            botao.id = "botao";

            botao.addEventListener("click", (event) => {
                event.stopPropagation(); // Evitar que o evento de clique no card seja acionado

                const lista_carrinho = JSON.parse(localStorage.getItem("lista_carrinho")) || [];
                console.log("Lista antes de adicionar:", lista_carrinho);

                if (lista_carrinho.length > 0) {
                    let encontrado = false;
                    lista_carrinho.forEach((item) => {
                        if (item.id === produto.id) {
                            encontrado = true;
                            item.quantidade += 1;
                        }
                    });
                    if (!encontrado) {
                        lista_carrinho.push(produto);
                    }
                } else {
                    lista_carrinho.push(produto);
                }

                localStorage.setItem("lista_carrinho", JSON.stringify(lista_carrinho));
                if (qtde_carrinho) {
                    qtde_carrinho.textContent = lista_carrinho.length;
                }
                console.log("Produto adicionado ao carrinho:", produto);
                mostrarNotificacao();
            });

            novo_elemento.append(nome, imagem, preco, botao);
            catalogo.append(novo_elemento);
        });
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}

function mostrarNotificacao() {
    console.log("Mostrando notificação");
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

buscarTodosProdutos();
