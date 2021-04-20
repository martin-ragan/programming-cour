<template>
    <div>
        <h1>ADMIN PANEL</h1>
        <form @submit.prevent="Login">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="heslo" v-model="pass">
            <button type="submit">Prihlásiť sa</button>
        </form>
    </div>
</template>

<script>
    // import { ref, onBeforeMount } from 'vue'
    import { ref } from "vue";
    // import { userRouter, useRoute} from 'vue-router'
    import firebase from 'firebase'
    
    export default {
        setup() {

            const email = ref('');
            const pass = ref('');

            const Login = () => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, pass.value)
                    .then(data => console.log(data))
                    .catch(err => console.log(err.message));
            }
            return {
                Login,
                pass,
                email
            }
        }

    }
</script>

<style lang="scss" scoped>

@import '../assets/scss/_values.scss';
    
    div {
        background: $primary-color;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;

            input {
                color: $primary-color;
                font-family: 'Quicksand';
                padding: .7em;
                margin: 1em 0;
                width: 50%;
            }

            button {
                padding: .7em;
                margin-top: 1em;
                border: 1px solid $text-color;
                font-family: 'Quicksand';
                color: $text-color;
                background: $primary-color;
            }
        }
    }

    ::placeholder {
        font-family: 'Quicksand';
    }
</style>