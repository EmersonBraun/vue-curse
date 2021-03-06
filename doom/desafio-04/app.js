new Vue({
	el: '#desafio',
	data: {
		efeito: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		estilo: '',
		quadrado: {
			width: '100px',
			height: '100px',
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setTimeout(()=>{
				this.efeito = this.efeito == 'destaque' 
				? 'encolher' 
				: 'destaque'
            }, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(()=>{
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 50)
		},
		setPerigo(event){
			if(event.target.value == 'true'){
				this.perigo = true
			}else if(event.target.value == 'false'){
				this.perigo = false
			}
		}
	}
})
