<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
        <Alert title="Você pode Salvar e Carregar os Dados" color="primary"/>
        <v-divider class="mb-4"></v-divider>
        <Alert title="Clique em  'Finalizar Dia' para iniciar um novo dia!" color="success"/>
        <v-divider class="mb-4"></v-divider>
        <p class="display-1"><strong>Seu Saldo: </strong>{{ funds | currency}}</p>
    </div>
</template>

<script>
    import Alert from './Alert'
    export default {
        components: { Alert},
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style scoped>

</style>