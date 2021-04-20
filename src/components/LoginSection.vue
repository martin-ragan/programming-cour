<template>
    <section id="login-section" class="login-section">
        <div class="login">
            <form @submit.prevent = "onSubmit">
                <h1>Prihlásenie sa do kurzu</h1>
                <h6>Kurz sa uskutoční vo Vranove v júni.</h6>
                <input type="text" placeholder="Meno" v-model="form.name">
                <input type="text" placeholder="Priezvisko" v-model="form.surname">
                <input type="email" placeholder="Email" v-model="form.email">
                <select v-model="form.skills">
                    <option value="Žiadne">Žiadne</option>
                    <option value="Malé">Malé</option>
                    <option value="Stredné">Stredné</option>
                    <option value="Veľké">Veľké</option>
                </select>
                <button type="submit">Prihlásiť sa</button>
            </form>
        </div>
    </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { addUser } from '../firebase/firebase'

    export default {
        setup() {
            const form = reactive({name: '', surname: '', email: '', skills: ''})
            const onSubmit =  () => {
                addUser(form)

                form.name = ''
                form.surname = ''
                form.email = ''
            }
            return {
                form,
                onSubmit
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_values.scss';

.login-section {
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
        
        h1 {
            font-size: 2.5em;
        }
        h6 {
            padding: 0;
            margin: 0;
            font-size: 1em;
            font-weight: 500;
        }
        form {
            align-items: center;
            width: 60%;
            height: 100%;
            background: transparent;
            color: $primary-color;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    
            input, select {
                background: transparent;
                border: 1px solid $primary-color;
                width: 50%;
                font-family: 'Quicksand';
                margin: 1em 0;
                padding: 0.6em;
                color: $primary-color;
                font-weight: bold;
            }
    
            ::placeholder {
                color: $primary-color;
            }
            select {
                width: 52.3%;
            }
            button {
                background: $primary-color;
                color: $text-color;
                height: 3em;
                margin: 3em 0;
                width: 15em;
                border: none;
                border-radius: 0.3em;
                font-family: 'Quicksand';
                font-weight: bold;
            }
        }
    }
}
</style>