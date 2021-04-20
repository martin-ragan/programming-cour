<template>

  <header-navigation/>
  <floating-button/>
  <information-section/>
  <teachers-section/>
  <login-section/>
  <footer-section/>

</template>

<script>
import $ from "jquery";
// @ is an alias to /src
import FooterSection from '@/components/FooterSection.vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import InformationSection from '@/components/InformationSection.vue';
import LoginSection from '@/components/LoginSection.vue';
import TeachersSection from '@/components/TeachersSection.vue';
import FloatingButton from '../components/FloatingButton.vue';

export default {
  name: "Home",
  components: {
    HeaderNavigation,
    InformationSection,
    TeachersSection,
    LoginSection,
    FooterSection,
    FloatingButton
  },
  mounted() {
    //   $(window).on('load', function () {
    //     $(".loader").fadeOut("8000");
    // });
        $(document).scroll(function() {
            let y = $(this).scrollTop();

            if (y > 0) {
                $("#floating-btn").fadeIn();
            } else {
                $("#floating-btn").fadeOut();
            }
        });
        $("#info-link").click(function() {

            $([document.documentElement, document.body]).animate({
                scrollTop: $("#info").offset().top
            }, 800);

        });
        $("#teachers-link").click(function() {

            $([document.documentElement, document.body]).animate({
                scrollTop: $("#teachers").offset().top
            }, 800);

        });
        $("#login-link").click(function() {

            $([document.documentElement, document.body]).animate({
                scrollTop: $("#login-section").offset().top
            }, 800);

        });
        $("#floating-btn").click(function() {

            $([document.documentElement, document.body]).animate({
                scrollTop: 0
            }, 800);

        });
        },
    };
</script>
