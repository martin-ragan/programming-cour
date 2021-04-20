<template>
    <div class="task">
            <h1>{{name}}</h1>
            <p>{{des}}</p>
            <div class="puts">
                <div class="inputs">
                    <h1>Vstup</h1>
                    <p>{{input}}</p>
                </div>

                <div class="outputs">
                    <h1>Výstup</h1>
                    <p>{{output}}</p>
                </div>
            </div>
            <button @click="showCode">Odhaľ si kostru kódu</button>
            <transition name="fade">
                <code-bone v-if="show" :content="codeText"></code-bone>
            </transition>
        </div>
</template>

<script>
import CodeBone from './CodeBone.vue'
    
    export default {
        components: {
            CodeBone
        },
        data() {
            return {
                show: false
            }
        },
        props: {
            name: {
                type: String,
                default: ''
            },
            des: {
                type: String,
                default: ''
            },
            input: {
                type: String,
                default: ''
            },
            output: {
                type: String,
                default: ''
            },
            codeText: {
                type: String,
                default: ''
            }
        },
        methods: {
            showCode() {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../assets/scss/_values.scss';

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.task {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        color: $primary-color;
        // align-items: flex-start;

        .puts {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            h1 {
                color: $primary-color;
                width: 100%;
                text-align: left;
                font-size: 1em;
            }
            p {
                color: $primary-color;
                border: 1px solid $primary-color;
                padding: 0.5em;
            }

            .inputs, .outputs {
                width: 40%;

                p {
                    color: $primary-color;
                    text-align: left;
                }
            }
        }
        button {
            background: $primary-color;
            color: $text-color;
            width: 20%;
            font-family: 'Quicksand';
            padding: 1em;
            border: none;
        }
        code {
            width: 80%;
        }
    }
</style>