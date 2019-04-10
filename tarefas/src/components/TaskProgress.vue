<template>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
        :style="{'width' : progress + '%'}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
    </div>
</template>

<script>
    export default {
        props:{
            progress:{type: Number, default: 0}
        }
    }
</script>

<style scoped>
    .progress{
        background-color: #DDD2;
        width: 100%;
        height: 50px;
    }
</style>