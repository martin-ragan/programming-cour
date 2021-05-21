<template>
    <section id="login-section" class="login-section">
        <div class="login" v-show="!successLogin">
            <form @submit.prevent = "onSubmit">
                <h1>Prihlásenie sa do kurzu</h1>
                <h6>Kurz sa uskutoční vo Vranove v júni.</h6>
                <input type="text" placeholder="Meno" v-model="form.name" required>
                <input type="text" placeholder="Priezvisko" v-model="form.surname" required>
                <input type="email" placeholder="Email" v-model="form.email" required>
                <label for="select">Programátorské skúsenosti</label>
                <select id="select" v-model="form.skills" aria-placeholder="asdad" required>
                    <option selected="selected" value="Žiadne">Žiadne</option>
                    <option value="Malé">Malé</option>
                    <option value="Stredné">Stredné</option>
                    <option value="Veľké">Veľké</option>
                </select>
                <button type="submit">Prihlásiť sa</button>
            </form>
        </div>
        <div class="login-success" v-show="successLogin">
            <h1>Úspešne si prihlásený/á !</h1>
            <h2>Zaevidovali sme ťa do nášho kurzu, tešíme sa na teba v júni!</h2>
            <lottie-player v-show="successLogin" src="https://assets2.lottiefiles.com/temp/lf20_PRvG5R.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>
        </div>
    </section>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { db } from '../firebase/firebase'

    export default {
        setup() {
            const successLogin = ref(false)
            const form = reactive({name: '', surname: '', email: '', skills: 'Žiadne'})
            const onSubmit =  () => {

                db.collection('users').add(form).then(function() {
                    successLogin.value = true
                })
            }
            return {
                form,
                onSubmit,
                successLogin
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
            label {
                text-align: left;
                font-size: .8em;
                font-weight: bold;
                width: 50%;
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

    .login-success { 
        height: 80vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $primary-color;

        h2 {
            font-size: 1em;
            font-weight: 500;
        }
    }
}
</style>