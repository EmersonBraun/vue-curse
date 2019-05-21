<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>
        <hr>
        <p><strong>Código:</strong>{{ id }}</p>
        <router-link tag="button" :to="`/usuario/${id}/editar`" primario>
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     $route(to, from){
        //         this.id = to.params.id
        //     }
        // }, 
    }
</script>

<style coped>

</style>