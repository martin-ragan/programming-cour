<template>
    <header>
        <div class="nav">
            <div class="container">
                <div class="logo">
                    <img src="../assets/untitled.png" alt="">
                    <h1>Kurz programovania v jazyku Haskell</h1>
                </div>
                <router-link to="/">
                    <i class="fas fa-arrow-left"></i>
                </router-link>
            </div>
        </div>
    </header>
    
    <section class="materials-nav">
        <h1>Materiály</h1>
        <ul>
            <li>
                <router-link to="/materials/day-1">1. deň</router-link>
            </li>
            <li v-show="false">
                <router-link to="/materials/day-2">2. deň</router-link>
            </li>
            <li v-show="false">
                <router-link to="/materials/day-3">3. deň</router-link>
            </li>
            <li v-show="false">
                <router-link to="/materials/day-4">4. deň</router-link>
            </li>
            <li v-show="false">
                <router-link to="/materials/day-5">5. deň</router-link>
            </li>
        </ul>
    </section>

    <section class="materials-content">
        <router-view/>
    </section>
</template>

<script>

  export default {
    name: "Materials",

    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    },
  }
</script>

<style lang="scss" scoped>

@import '../assets/scss/_values.scss';

body {
     font-family: 'Quicksand';
     padding: 0;
     margin: 0;
     color: $primary-color;
     text-align: center;
 }

.nav {
    background: $primary-color;
    color: $text-color;
    width: 100%;
    height: 10vh;
    .container {
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .logo{
            display: flex;
            flex: 2;
            justify-content: flex-start;
            align-items: center;
            img {
                width: 4em;
                padding-right: 2em;
            }
        }
        a {
            font-size: 2em;
            .fas {
                color: $text-color;
            }
        }
    }
}
.materials-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        width: 100%;
    }
    ul {
        padding: 0;
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        list-style: none;

        li {
            a{  
                text-decoration: none;
                color: $primary-color;
                font-weight: bold;
                padding: 1em;
                margin: 0 1em;
            }
            a:hover {
                border-bottom: 1px solid $primary-color;
            }
        }
    }
}

.router-link-active {
    border-bottom: 1px solid $primary-color;
}

.materials-content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
</style>