<template>
    <button id="floating-btn" class="floating-btn">
        <i class="fas fa-arrow-up"></i>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@import '../assets/scss/_values.scss';

.floating-btn {
    display: none;
    position: fixed;
    background: #192841;
    border: 2px solid $text-color;
    border-radius: 10em;
    color: $text-color;
    padding: 2em;
    right: 8%;
    bottom: 5%;
    cursor: pointer;

    .fas {
        font-size: 2em;
    }
}
</style>