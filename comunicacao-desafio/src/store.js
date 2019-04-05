import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    nome: '',
    idade: ''
  },
  mutations: {
    setId(state, id){
      state.id = id
    },
    setNome(state, nome){
      state.nome = nome
    },
    setIdade(state, idade){
      state.idade = idade
    }
  },
})
