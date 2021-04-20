<template>
     <form class="create-task" @submit.prevent = "onSubmit">
                <h2>Vytvor úlohu</h2>
                <input type="text" placeholder="Názov úlohy" v-model="form.name">
                <textarea cols="30" rows="5" placeholder="Popis úlohy" v-model="form.des"></textarea>
                <textarea name="" id="" cols="30" rows="10" placeholder="Kostra kódu" v-model="form.code"></textarea>
                <input type="text" placeholder="Vstup" v-model="form.input">
                <input type="text" placeholder="Výstup" v-model="form.output">
                <select v-model="daySelection">
                    <option value="day-one">Prvý deň</option>
                    <option value="day-two">Druhý deň</option>
                    <option value="day-three">Tretí deň</option>
                    <option value="day-four">Štvrtý deň</option>
                    <option value="day-five">Piaty deň</option>
                </select>
                <button type="submit">Vytvor!</button>
    </form>
</template>

<script>

    import { reactive, ref } from "vue";
    import { createTask } from '../firebase/firebase'

    export default {

        setup() {
            const form = reactive({name: '', des: '', code: '', input: '', output: ''})
            const daySelection = ref('')


            const onSubmit = async () => {
                await createTask(daySelection.value, {...form})
                form.name = ''
                form.des = ''
                form.code = ''
                form.input = ''
                form.output = ''
            }
            return {
                form,
                daySelection,
                onSubmit
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../assets/scss/_values.scss';


    .create-task {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;

                    h2 {
                        padding: 0;
                        margin: 0;
                        margin-left: 32px;
                    }
                    
                    input, textarea, select {
                        border-radius: .4em;
                        width: 80%;
                        margin: 16px 0 16px 32px;
                        color: $primary-color;
                        font-family: 'Quicksand';
                        border: 1px solid $primary-color;
                        box-sizing: border-box;
                    }
                    input, select,  textarea {
                        padding: .5em;
                    }
                    ::placeholder {
                        font-family: 'Quicksand';
                        color: $primary-color;
                    }
        }

        button {    
                    margin-left: 32px;
                    width: 40%;
                    color: $text-color;
                    border: 1px solid $primary-color;
                    border-radius: 0.4em;
                    font-family: 'Quicksand';
                    font-weight: bold;
                    background: $primary-color;
                    padding: 1em;
        }
</style>