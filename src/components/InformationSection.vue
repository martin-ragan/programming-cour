<template>
    <section id="info" class="info">
        <div class="container">
            <h1>Informácie</h1>
            <h2>Čo ti poskytnú naše kurzy ?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, earum iusto iste officia neque saepe. 
                Quidem natus, corporis pariatur eos distinctio minus ea aspernatur vitae dicta ducimus? Aliquid, pariatur corporis?
            </p>
            <h2>V akom programovaciom jazyku budeš programovať ?</h2>
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, earum iusto iste officia neque saepe. 
                    Quidem natus, corporis pariatur eos distinctio minus ea aspernatur vitae dicta ducimus? Aliquid, pariatur corporis?
            </p>
            <h2>Čo ťa to bude stáť ?</h2>
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, earum iusto iste officia neque saepe. 
                    Quidem natus, corporis pariatur eos distinctio minus ea aspernatur vitae dicta ducimus? Aliquid, pariatur corporis?
            </p>

        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/_values.scss';

    .info {
        .container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        height: 100vh;
        background: $text-color;
        color: $primary-color;

        h1 {
            font-size: 2em;
        }
        h2 {
            font-weight: 500;
            padding-bottom: 0.7em;
            border-bottom: 2px solid $primary-color;  
        }
    }
</style>