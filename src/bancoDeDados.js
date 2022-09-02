const sequence = {
    _id: 1,
    get id() {
        return this._id++   //This está criando um novo objeto. Como por padrão temos dois parâmetros, chave e valor, o id será a chave, e como fará o incremento de 1, será dada a sequência.
    }
}

const produtos = {

}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}