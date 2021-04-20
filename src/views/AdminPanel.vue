<template>
    <div class="root-view">
            <div class="profile-row">
                <div class="profile-pic" v-bind:style="{background: 'url(' + pic + ') 50% 0', height: '4em', width: '4em', 'border-radius': '85%', 'background-size': 'cover', margin: '0 0 0 1em' }"></div>
                <h3>{{name + ' ' + surname}}</h3>
                <button @click="Logout"><i class="fas fa-sign-out-alt"></i></button>
            </div>

            <div class="main-content">
                <div class="nav">
                    <router-link to="/admin-panel/create-task"><i class="fas fa-plus-circle"></i></router-link>
                    <router-link to="/admin-panel/list-task"><i class="fas fa-list-ul"></i></router-link>
                    <router-link to="/admin-panel/list-user"><i class="fas fa-users"></i></router-link>
                </div>
                <router-view class="view-content"/>
            </div>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from "vue";
import  firebase from "firebase";
import {getUser} from '../firebase/firebase'

export default {

        setup() {
            
            const userUid = ref('')
            const name = ref('')
            const surname = ref('')
            const pic = ref('')

            onMounted(async () => {
                const user = await getUser(userUid.value)
                name.value = user.name
                surname.value = user.surname
                pic.value =  user.pic
            })

            onBeforeMount(() => {
                const fuser = firebase.auth().currentUser;
                if(fuser) {
                    userUid.value = fuser.uid;
                }
            });

            const Logout = () => {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        console.log("signed out")
                    })
                    .catch((err => alert(err)))
            }

            return {
                userUid,
                name,
                surname,
                pic,
                Logout,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_values.scss';

.root-view {
        background: #f5f4f2;
        color: $primary-color;
        height: 100vh;
        padding: 1.5em 0;
        width: 100vw;
        text-align: center;
        // overflow: hidden;
        
            .profile-row {
                border-radius: .7em;
                box-shadow: 0px 0px 5px $primary-color;
                background: $text-color;
                margin: 1em auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 80%;
                height: 10vh;

            }
        .main-content {
                display: flex;
                align-items: flex-start;
                width: 80%;
                height: 70vh;
                margin: 0 auto;
                margin-top: 2em;


                .nav {
                    border-radius: .7em;
                    background: $text-color;
                    box-shadow: 0px 0px 5px $primary-color;
                    flex: 1;
                    padding: 0;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    margin: .2em;

                    a {
                        margin: 1em .5em;
                        font-size: 36px;
                        display: inline-block;
                        cursor: pointer;
                        width: 80px;
                        height: 80px;
                        line-height: 84px;
                        border-radius: 50%;
                        text-align: center;
                        position: relative;
                        color: $primary-color;
                        background-color: rgba(25, 40, 65, 0.1);
                        transition: 300ms;
                    }
                    a:after {
                        pointer-events: none;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        content: '';
                        box-sizing: content-box;
                        box-shadow: 0 0 0 3px $primary-color;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        transition: 300ms;
                    }

                    a:hover {
                        background-color: $primary-color;
                        color: $text-color;
                    }

                    a:hover:after {
                        opacity: 1;
                        transform: scale(1.15);
                    }
                }

                .view-content {
                    border-radius: .7em;
                    box-shadow: 0px 0px 5px $primary-color;
                    margin: .2em .2em 0 1em;
                    padding: .5em;
                    height: 100%;
                    flex: 8;
                    background: $text-color;
                }

            
        }
        button{
                    border: 1px solid $primary-color;
                    border-radius: 70%;
                    background: transparent;
                    padding: 1em;
                    margin-right: 1em;
                }
    }
</style>