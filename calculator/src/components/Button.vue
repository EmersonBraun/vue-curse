<template>
    <button class="button"
    :class="{ double, triple, operation}"
    @click="$emit('bclick',label)">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: {type: Boolean},
        double: {type: Boolean},
        triple: {type: Boolean}
    }
}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}
.button {
    font-size: 1.4em;
    background-color: #f0f0f0;
    border-right: solid 1px #888;
    border-bottom: solid 1px #888;
    outline: none;
}
.button:active {
    background-color: #ccc;
}
.button.double {
    grid-column: span 2;
}
.button.triple {
    grid-column: span 3;
}
.button.operation {
    background-color: #fa8231;
    color: #fff;
}
.button.operation:active {
    color: #fa8231cc;
}
</style>