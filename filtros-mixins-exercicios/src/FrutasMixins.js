export default{
    data() {
        return {
            fruta: '',
            frutas: ['banana','maçã','laranja','abacaxi']
        }
    },
    methods: {
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
}