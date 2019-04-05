<template>
    <v-flex xs6 pa-1>
        <v-card>
            <v-data-table
                :headers="headers"
                :items="pessoas"
                class="elevation-1"
                >
                <template v-slot:items="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.nome }}</td>
                    <td><v-btn color="success" @click="thisRow(props.item)">Detalhes</v-btn></td>
                </template>
            </v-data-table>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    {
                    text: 'Id',
                    align: 'left',
                    sortable: true,
                    value: 'id'
                    },
                    { text: 'Nome', value: 'nome' },
                    { text: 'Ações', value: 'acoes' },
                ],
                pessoas: [
                    {id: 1, nome: 'Ana', idade: 12},
                    {id: 2, nome: 'Carlos', idade: 15},
                    {id: 3, nome: 'Daniel', idade: 22},
                    {id: 4, nome: 'Ema', idade: 87},
                    {id: 5, nome: 'Lia', idade: 38},
                ],
            }
        },
        methods: {
            thisRow(item){
                this.$store.commit('setId', item.id)
                this.$store.commit('setNome', item.nome)
                this.$store.commit('setIdade', item.idade) 
            }
        },
    }
</script>

<style scoped>

</style>