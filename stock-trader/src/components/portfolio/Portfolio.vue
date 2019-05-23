<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" type="sell"/>
    </v-layout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stock from './../stocks/Stock.vue'
    export default {
        components: {Stock},
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
    }
</script>

<style scoped>

</style>