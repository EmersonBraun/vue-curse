<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form v-if="!enviado" class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->
				<NomeCompleto v-model="nomeCompleto"/>
				<Rotulo nome="Email">
					<input v-model="dados.email" type="text">
				</Rotulo>
				<Rotulo nome="Senha">
					<input v-model="dados.senha" type="password">
				</Rotulo>
				<Rotulo nome="Armazenar Dados? (Sim/Não)">
					<Escolha v-model="dados.escolha"/>
				</Rotulo>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<button @click.prevent="enviar">Enviar</button>
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div v-else class="painel">
				<div class="cabecalho">Resultado</div>
					<p>Nome: {{ nomeCompleto.nome }}</p>
					<p>Sobrenome: {{ nomeCompleto.sobrenome }}</p>
					<p>Email: {{ dados.email }}</p>
					<p>Senha: {{ dados.senha }}</p>
					<p>Escolha: {{ dados.escolha }}</p>
					<button @click.prevent="novo">Novo envio</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha, NomeCompleto },
	data() {
		return {
			dados: {},
			nomeCompleto: {},
			enviado: false
		}
	},
	methods: {
		enviar(){
			this.enviado = true
		},
		novo(){
			this.enviado = false
			this.dados = {}
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
