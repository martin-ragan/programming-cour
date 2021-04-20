<template>
    <header>
            <div class="nav">
                <img src="../assets/untitled.png" alt="">
                <h1>Kurz funkcionálneho programovania v jazyku Haskell</h1>
                <ul>
                    <li id="info-link">Informácie</li>
                    <li id="teachers-link">Lektori</li>
                    <li id="login-link">Prihlásenie</li>
                    <li>
                        <router-link to="/materials/day-1">Materiály</router-link>
                        <router-view />
                    </li>
                </ul>
            </div>
  </header>
</template>

<style lang="scss" scoped>

@import '../assets/scss/_values.scss';

header {
    background: url('../assets/photo-1504384308090-c894fdcc538d.png') no-repeat;
    background-size: cover;
    height: 100vh;
    text-align: center;
    overflow: hidden;

        .nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            img {
                width: auto;
                height: auto;
                padding-bottom: 2em;
            }
            h1 {
                padding: 0;
                margin: 0;
                width: 100%;
            }
            ul {
                margin-top: 5em;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                list-style: none;

                li {
                    border: 1px solid $text-color;
                    color: $text-color;
                    padding: 0.7em;

                    a {
                        color: $text-color;
                        text-decoration: none;
                    }
                }
                li:hover {
                    background: $text-color;
                    color: $primary-color;
                    cursor: pointer;
                    
                    a {
                        color: $primary-color;
                    }
                }
            }
        }
}
</style>