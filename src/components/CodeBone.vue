<template>
    <pre>
                <code class="language-hs">
                    {{content}}
                </code>
    </pre>
</template>

<script>
export default {
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    props: {
        content: {
            type: String,
            default: ''
        },
    },
    mounted() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', this.publicPath + 'prism.js');
      document.body.appendChild(recaptchaScript);
    },
}
</script>