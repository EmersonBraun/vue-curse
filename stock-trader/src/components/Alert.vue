<template>
    <v-sheet :elevation="6" class="pa-2 mt-3 darken-1" :color="color">
        <v-icon class="white--text mr-3">info</v-icon>
        <span class="headline white--text font-weight-light">{{ title }}</span>
    </v-sheet>
</template>

<script>
    export default {
        props: ['title','color']
    }
</script>

<style scoped>

</style>