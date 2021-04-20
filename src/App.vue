<template>
          <router-view />
</template>

<script>
    import { onBeforeMount } from 'vue'
    import { useRouter, useRoute} from 'vue-router'
    import firebase from 'firebase'


export default {
  components: {
  },
  setup() {
            
            const router = useRouter()
            const route = useRoute()

            onBeforeMount(() => {
                firebase.auth().onAuthStateChanged((user) => {

                    const path = route.path

                    if (!user) {
                        if(path == '/' || path == '/materials' || path == '/admin') router.replace(path);
                        else router.replace('/')
                    } else if (path == '/admin') {
                        router.replace('/admin-panel/create-task')
                    }
                })
            })
  }
}
</script>

<style lang="scss">

@import './assets/scss/_values.scss';


body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
    color: $text-color;
}

.container {
    width: 80%;
    margin: 0 auto;
}

.floating-btn {
    display: none;
    position: fixed;
    background: #192841;
    border: 2px solid $text-color;
    border-radius: 10em;
    color: $text-color;
    padding: 2em;
    right: 8%;
    bottom: 5%;
    cursor: pointer;

    .fas {
        font-size: 2em;
    }
}
</style>
