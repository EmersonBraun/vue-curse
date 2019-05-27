import Vue from 'vue'

export default {
    loadData({ commit }) {
        Vue.prototype.$http('data.json').then(resp => {
            const data = resp.data
            if(data) {
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}