<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ title }}</span>
        <span class="font-weight-light">{{ subtitle }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-layout row>
          <Tabela/>
          <Info/> 
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Tabela from './components/Tabela'
import Info from './components/Info'

export default {
  name: 'App',
  components: {
    Tabela, Info
  },
  data () {
    return {
      title: 'Comunicação componentes',
      subtitle: ''
    }
  }
}
</script>
