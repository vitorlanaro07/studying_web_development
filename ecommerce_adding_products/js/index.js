var carrinho = document.querySelector(".carrinho__contador");
var meuCarrinho = document.querySelector(".carrinho__produtos");
var produto = document.querySelector(".card__produto").children;
let contador_produtos = 0;
var preco_produto = produto[2].textContent;

function abreMeuCarrinho() {
    if (!carrinho.classList.contains('carrinho__contador--vazio')) {
        meuCarrinho.classList.toggle('carrinho__produtos--fechado')
    }
}

function decrementadorDeProdutos(){
    contador_produtos -=1;   
    carrinho.innerHTML = contador_produtos;
    meuCarrinho.children[1].children[0].children[2].value = contador_produtos;
    meuCarrinho.children[1].children[1].innerHTML = "R$" + ((preco_produto.replace('R$','') * contador_produtos)).toFixed(2);  
}

function somadorDeProdutos() {
    contador_produtos +=1;   
    carrinho.innerHTML = contador_produtos;
    meuCarrinho.children[1].children[0].children[2].value = contador_produtos;
    meuCarrinho.children[1].children[1].innerHTML = "R$" + ((preco_produto.replace('R$','') * contador_produtos)).toFixed(2);  
}

function liberaCarrinho() {
    carrinho.classList.remove('carrinho__contador--vazio');
}

function adicionaCarrinho(id) {
    somadorDeProdutos();
    liberaCarrinho();
    var imagem_produto = produto[0].attributes[0].textContent;
    var nome_produto = produto[1].textContent;
    meuCarrinho.children[0].children[0].attributes[0].textContent = imagem_produto;
    meuCarrinho.children[0].children[1].textContent = nome_produto;
     
}

