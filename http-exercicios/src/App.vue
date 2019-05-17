<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto"
		:variant="mensagen.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input
				type="text" 
				size="lg" 
				v-model="usuario.nome"
				placeholder="Informe o nome">
				</b-form-input>
			</b-form-group
			<b-form-group label="Email:">
				<b-form-input
				type="email" 
				size="lg" 
				v-model="usuario.email"
				placeholder="Informe o email">
				</b-form-input>
			</b-form-group>
			<hr>
			<template v-if="id">
				<b-button @click="editar(id)"
				size="lg" variant="primary">editar</b-button>
			</template>
			<template v-else>
				<b-button @click="salvar"
				size="lg" variant="primary">Salvar</b-button>
			</template>
				<b-button size="lg" variant="success" class="ml-2" @click="list">Obter usuários</b-button>
		</b-card>
		<b-card>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
					<strong>Nome:</strong> {{ usuario.nome }}<br>
					<strong>Email:</strong> {{ usuario.email }}<br>
					<strong>ID:</strong> {{ id }}<br>
					<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
					<b-button variant="danger" size="lg" class="ml-2"
					@click="apagar(id)">Apagar</b-button>
				</b-list-group-item>
			</b-list-group>
		</b-card>
	</div>
</template>

<script>
export default {
	data(){
		return {
			usuarios: [],
			id: null,
			mensagens: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	created(){
		this.list()
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		salvar(){
			this.$http.post('usuarios.json',this.usuario)
			.then(() => this.list())
			// .then(() => this.mensagens.push({
			// 	texto: 'Inserido com sucesso',
			// 	tipo: 'success'
			// }))
		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		list(){
			this.$http('usuarios.json')
			.then(response => this.usuarios = response.data)
			.then(() => this.limpar())
		},
		editar(id){
			this.$http.patch(`/usuarios/${id}.json`,this.usuario)
			.then(() => this.list())
			// .then(() => this.mensagens.push({
			// 	texto: 'Editado com sucesso',
			// 	tipo: 'warning'
			// }))
		},
		apagar(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(() => this.list())
			// .then(() => this.mensagens.push({
			// 	texto: 'Apagado com sucesso',
			// 	tipo: 'danger'
			// }))

		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
