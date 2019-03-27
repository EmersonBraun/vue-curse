export default{
    namespaced: true,
    state: {
        quantidade: 0,
        preco: 0
    },
    getters:{
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    },
}