<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <hr>
        <p><strong>Código:</strong>{{ id }}</p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
    }
</script>

<style scoped>

</style>