new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('teste')
        },
        mudaValor(event){
            this.valor = event.target.value
        }
    },
})