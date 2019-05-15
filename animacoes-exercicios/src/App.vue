<template>
  <div id="app" class="container-fluid">
		<h1>Animações</h1>
    <!--<hr>
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

    <select v-model="tipoAnimacao">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>

    <transition :name="tipoAnimacao" appear>
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>

    <transition :name="tipoAnimacao" mode="out-in">
      <v-alert v-if="exibir" type="info" duration="3000" dismissable>{{ msg }}</v-alert>
      <v-alert v-else type="warning" duration="3000" dismissable>{{ msg }}</v-alert>
    </transition>

    <hr> -->
    <!--<button class="btn btn-success" @click="exibir2 = !exibir2">Alternar</button>
     <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled">
       <div v-if="exibir2" class="caixa"></div>
    </transition>-->
    <hr>
    <button class="btn btn-primary mb-4" @click="add">Adicionar</button>
    <transition-group name="fade">
      <ul class="list-group" v-for="(aluno, i) in alunos" :key="aluno">
        <li class="list-group-item" style="cursor: pointer" @click="remove(i)">{{ aluno }}</li>
      </ul>
    </transition-group>
  </div>
</template>

<script>

export default {
  data(){
    return {
      msg: 'Uma mensagem de informação para o usuário',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      largura: 0,
      alunos: ['Pedro','Tiago','João']
    }
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1
      const tempo = setInterval(() => {
        const novaLargura = this.largura + 
        (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada ++
        if(rodada > 30){
          clearInterval(tempo)
          done()
        }
      },20)
      done()
    },
    add(){
      let str = Math.random().toString(36).substring(2)
      this.alunos.push(str)
    },
    remove(i){
      this.alunos.splice(i,1)
    },
    beforeEnter(el){
      // console.log('beforeEnter')
      this.largura = 0
      el.style.width = `${this.largura}px`
    },
    enter(el, done){
      this.animar(el, done, false)
    },
    afterEnter(el){
      console.log('afterEnter')
    },
    enterCancelled(el){
      console.log('enterCancelled')
    },

    beforeLeave(el){
      // console.log('beforeLeave')
      this.largura = 300
      el.style.width = `${this.largura}px`
    },
    leave(el, done){
      this.animar(el, done, true)
    },
    afterLeave(el){
      console.log('afterLeave')
    },
    leaveCancelled(el){
      console.log('leaveCancelled')
    },
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
	font-size: 1.5rem;
}

.caixa {
  width: 300px;
  height: 100px;
  margin: 30px auto;
  background-color: lightblue;
}

@keyframes slide-in {
  from { transform: translateX(100px); }
  to { transform: translateX(0); }
}

@keyframes slide-out {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.slide-enter-active {
  animation: slide-in 2s linear;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s linear;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
  opacity: 0;
}

.slide-move{
  transition: transform 1s;
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
