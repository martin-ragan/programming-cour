<template>
    <footer>
            <div class="contact">
                <div class="up">
                    <h1>#MUNICHALLENGE</h1>
                </div>
                <div class="bottom">
                    <p>vasemail@gmail.com</p>
                    <p>+421917335106</p>
                </div>
            </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_values.scss';
footer {
    color: $primary-color;
    height: 20vh;
    background: $text-color;
    display: flex;
    flex-direction: column;

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: $primary-color;
        color: $text-color;
        width: 100%;
        height: 100%;

        .up {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 2;
        }
        .bottom {
            flex: 1;
            display: flex;
            width: 80%;
            justify-content: space-between;
        }
    }
}
</style>