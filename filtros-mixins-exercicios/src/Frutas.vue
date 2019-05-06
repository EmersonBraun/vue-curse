<template>
    <div>
        <ul>
            <li v-for="(f,index) in frutas" :key="index">
                {{ f }}
            </li>
        </ul>
        <hr>
        <input type="text" v-model="fruta" @keydown.enter="add">
        <button @click="add">Add</button>
    </div>
</template>

<script>
import FrutasMixins from './FrutasMixins'
    export default {
       mixins: [FrutasMixins],
    }
</script>

<style scoped>

</style>