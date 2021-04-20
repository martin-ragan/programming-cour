<template>
    <section id="teachers" class="teachers">
        <div class="container">
            <h1>Lektori</h1>
            <h2>Kto sme zač ?</h2>
            
            <div class="teacher">
                <div class="profile-pic" id="timo"></div>
                <div class="profile-text">
                    <p>Ahoj, ja som Timo pleb.</p>
                    <div class="social-media">
                        <p>Nájdeš ma na</p>
                        <a href="">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="teacher">
                <div class="profile-pic" id="vlado"></div>
                <div class="profile-text">
                    <p>Ahoj, ja som Vlado pleb.</p>
                    <div class="social-media">
                        <p>Nájdeš ma na</p>
                        <a href="">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_values.scss';


.teachers {
    height: 100vh;
    background: $primary-color;
    color: $text-color;
    .container {
        height: 100%;
    }
    h1 {
        padding-top: 1em;
        font-size: 2em;
    }
    h2 {
        font-weight: 500;
        padding-bottom: 0.7em;
        border-bottom: 2px solid $text-color;  
    }

    .teacher {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        padding-top: 3em;

        .profile-pic {
            height: 11em;
            width: 11em;
            border: 1px solid $text-color;
            border-radius: 85%;
        }
        .profile-text {
            flex: 2;
            display: flex;
            flex-direction: column;
            padding-left: 8em;

            .social-media {
                display: flex;
                // justify-content: center;
                align-items: center;
                p {
                    font-weight: bold;
                }
                .fab {
                    padding-left: 1em;
                    color: $text-color;
                }
            }
        }
    }
}

#timo {
    background: url('../assets/70207497_3218796301494397_2669534822589792256_n.jpg') no-repeat;
    background-size: cover;
}
#vlado {
    background: url('../assets/81624709_2598075443645566_2347853493085143040_n.jpg') no-repeat;
    background-size: cover;
}
</style>