<template>
    <div class="usuario-lista">
        <h3>Lista de usuários</h3>
        <ul class="lista">
            <router-link tag="li" :to="`/usuario/${u}`"
            v-for="u in 3" :key="u" class="item-lista">
            Usuário {{ u }}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>