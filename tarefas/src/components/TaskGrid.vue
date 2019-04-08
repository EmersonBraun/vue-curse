<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <div class="row">
                <template>
                    <Task 
                    v-for="(task, i) in tasks" 
                    :key="task.name" :task="task"
                    @taskDeleted="$emit('taskDeleted', i)"
                    @taskStateChanged="$emit('taskStateChanged',i)"
                    />
                </template>
            </div>
        </template>
        <p v-else class="no-task">Sua vida está em dia!</p>
    </div>
</template>

<script>
import Task from './Task'
    export default {
        components: { Task },
        props: {
            tasks: { type: Array, required: true}
        }
    }
</script>

<style scoped>

</style>
