<template>
	<div id="app">
		<div class="row">
      <div class="col-md-4">
        <button @click="componente = 'Vermelho'" class="btn btn-danger btn-lg btn-block">
          Carregar componente Vermelho
        </button>
      </div>
      <div class="col-md-4">
        <button @click="componente = 'Verde'" class="btn btn-success btn-lg btn-block">
          Carregar componente Verde
        </button>
      </div>
      <div class="col-md-4">
        <button @click="componente = 'Azul'" class="btn btn-primary btn-lg btn-block">
          Carregar componente Azul
        </button>
      </div>
    </div>

		<keep-alive>
      <Botao>
			  <component :is="componente"></component>
      </Botao>
		</keep-alive>
	</div>
</template>

<script>
import Botao from './components/Botao.vue'
import Vermelho from './components/Vermelho.vue'
import Verde from './components/Verde.vue'
import Azul from './components/Azul.vue'

export default {
  components: { Vermelho, Verde, Azul },
  data() {
		return {
			componente: 'Vermelho'
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
}
</style>
