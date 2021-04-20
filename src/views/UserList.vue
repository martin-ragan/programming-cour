<template>
    <div>
        <table>
            <thead>
                <tr>
                <th scope="col">Meno</th>
                <th scope="col">Priezvisko</th>
                <th scope="col">Email</th>
                <th scope="col">Skilly</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{user.name}}</td>
                    <td>{{user.surname}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.skills}}</td>
                </tr>
            </tbody>
    </table>
    </div>
</template>

<script>
    import { loadUsers } from '../firebase/firebase'

    export default {
        setup() {
            const users = loadUsers()

            return {
                users
            }
        }
    }
</script>

<style lang="scss" scoped>

    table{
        width: 100%;
    }
</style>