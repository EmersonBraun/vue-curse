<template>
  <div id="app" class="container-fluid">
		<h1>Animações</h1>
    <hr>
    <button class="btn btn-primary mb-4" @click="exibir = !exibir">Mostrar mensagem</button>
    
    <transition name="fade" appear>
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>

    <transition name="slide" appear>
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>

    <transition 
    enter-active-class="animated bounce"
    leave-active-class="animated shake">
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>

    <!--<v-select v-model="tipoAnimacao">
      <v-option value="fade">Fade</v-option>
      <v-option value="slide">Slide</v-option>
    </v-select>

    <transition :name="tipoAnimacao" appear>
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>-->

    <transition :name="tipoAnimacao" mode="out-in">
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
      <v-alert v-else type="warning" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>
  </div>
</template>

<script>

export default {
  data(){
    return {
      msg: 'Uma mensagem de informação para o usuário',
      exibir: false,
      tipoAnimacao: 'fade',
    }
  }
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
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from { transform: translateX(200px); }
  to { transform: translateX(0); }
}

@keyframes slide-out {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}

.slide-enter-active {
  animation: slide-in 2s linear;
  transition: opacity 2s;
}
.slide-leave-active {
  animation: slide-out 2s linear;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
  opacity: 0;
}
/*
.x-enter {}
.x-enter-active {}
.x-enter-to {}
.x-leave {}
.x-leave-active {}
.x-leave-to {}
*/


</style>
