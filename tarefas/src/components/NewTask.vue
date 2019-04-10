<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="add" type="text"
        class="form-element">
        <button @click="add" class="form-element">+</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add(){
                this.$emit('taskAdded',{name: this.name})
                this.name = ''
            }
        },
    }
</script>

<style scoped>
    .new-task{
        width: 100%;
        margin: 35px;
    }
    .form-element{
        color: #fff;
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
    }
    input.form-element{
        width: 80%;
        background-color: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    button.form-element{
        width: 10%;
        background-color: #007bff;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>