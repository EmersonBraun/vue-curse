<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpf | inverter}}</p>
		<input type="text" :value="cpf | cpf ">
		<v-frutas></v-frutas>
	</div>
</template>

<script>
import Frutas from './Frutas'
import FrutasMixins from './FrutasMixins'
export default {
	components: {'v-frutas':Frutas},
	mixins: [FrutasMixins],
	data() {
		return {
			cpf: '07326994951',
		}
	},
	filters: {
		cpf(valor){
			if(!valor) return ''
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
input{
	font-size: 2.5rem;
}
</style>
