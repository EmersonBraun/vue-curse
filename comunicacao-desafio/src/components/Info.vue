<template>
    <v-flex d-flex xs6 sm6 md6 pa-1>
        <v-card>
            <v-card-title primary-title>
                <template v-if="!id">
                    <div>
                        Nada selecionado
                    </div>
                </template>
                <template v-else>
                    <v-card-title primary class="title">Dados do usuário</v-card-title>
                    <v-card-text>
                        <p>ID: {{ id }}</p>
                        <p>Nome: {{ nome }}</p>
                        <p>Idade: {{ idade }}</p>
                    </v-card-text>
                </template>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        computed: {
            id () {
                return this.$store.state.id
            },
            nome () {
                return this.$store.state.nome
            },
            idade () {
                return this.$store.state.idade
            },
        },
    }
</script>

<style scoped>

</style>