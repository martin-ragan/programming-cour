<template>
    <div class="tasks-view">
        <div v-for="(task, index) in firstDay" :key="index"> <h1>{{task.name}} <span class="bold">• prvý deň</span></h1><i class="fas fa-trash"></i></div>
        <div v-for="(task, index) in secondDay" :key="index"> <h1>{{task.name}} <span class="bold">• druhý deň</span></h1><i class="fas fa-trash"></i></div>
        <div v-for="(task, index) in thirdDay" :key="index"> <h1>{{task.name}} <span class="bold">• tretí deň</span></h1><i class="fas fa-trash"></i></div>
        <div v-for="(task, index) in fourDay" :key="index"> <h1>{{task.name}}<span class="bold">• štvrtý deň</span></h1> <i class="fas fa-trash"></i></div>
        <div v-for="(task, index) in fiveDay" :key="index"> <h1>{{task.name}} <span class="bold">• piaty deň</span></h1><i class="fas fa-trash"></i></div>
    </div>
</template>

<script>
// import { ref } from '@vue/reactivity'
import {loadTasks} from '../firebase/firebase'

    export default {
        setup() {
            const firstDay = loadTasks('day-one')
            const secondDay = loadTasks('day-two')
            const thirdDay = loadTasks('day-three')
            const fourDay = loadTasks('day-four')
            const fiveDay = loadTasks('day-five')

            return { firstDay, secondDay, thirdDay, fourDay, fiveDay } 
        }
    }
</script>

<style lang="scss" scoped>

    .tasks-view {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        
        div {
            margin-left: 48px;
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-weight: 500;
                font-size: 1.3em;
            }
        }
    }
    .bold {
        font-weight: bold;
    }
</style>