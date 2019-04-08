<template>
    <div 
    @click="$emit('taskStateChanged', task)"
    class="col-md-3 card task" :class="stateClass">
        <div class="card-head">
            <span @click.stop="$emit('taskDeleted',task)" class="close">x</span>
        </div>
        <div class="card-body">
            {{ task.name }}
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            task: {type: Object, required: true}
        },
        computed: {
            stateClass(){
                return{
                    'bg-danger': this.task.pending,
                    'bg-success': !this.task.pending
                }
            }
        },
    }
</script>

<style scoped>
    .task {
        box-sizing: border-box;
        min-width: 200px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 1.5rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
    }
    .bg-danger{
        border-left: 12px solid #b73229;
    }
    .bg-success{
        color: #ddd;
        border-left: 12px solid #0a8f08;
        text-decoration: line-through;
    }
    .bg-danger.close{
       background-color: #b73229; 
    }
    .bg-success.close{
        background-color: #0a8f0a;
    }
</style>