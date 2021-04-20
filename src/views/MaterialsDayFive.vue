<template>
    <single-task v-for="(task, index) in tasks" :key="index" :name="task.name" :des="task.des" :input="task.input" :output="task.output" :codeText="rightFormat(task.code)"/>
</template>

<script>
    import SingleTask from '../components/SingleTask.vue'
    import {loadTasks} from '../firebase/firebase.js'

    export default {
        components: {
            SingleTask,
        },
        setup() {
            const tasks = loadTasks('day-five')
            return { tasks }
        },
        methods: {
            rightFormat(code) {
                code = code.replace(/\\n/g, "\n");
                return code
            }
        },
        data() {
        
        },
    }
</script>

<style lang="scss" scoped>

</style>