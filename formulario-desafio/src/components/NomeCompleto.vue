<template>
    <div>
        <v-label nome="nome">
			<input 
            :value="value.nome" 
            @input="alterarNome"
            type="text">
        </v-label>
        <v-label nome="sobrenome">
			<input 
            :value="value.sobrenome" 
            @input="alterarSobrenome"
            type="text">
        </v-label>  
    </div>
</template>

<script>
import Rotulo from './Rotulo'
    export default {
        components: {'v-label':Rotulo},
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        methods: {
            alterarNome(event){
                this.$emit('input', {nome: event.target.value, sobrenome: this.value.sobrenome})
            },
            alterarSobrenome(event){
                this.$emit('input', {nome: this.value.nome, sobrenome: event.target.value})
            }
        },
        
    }
</script>

<style scoped>

</style>