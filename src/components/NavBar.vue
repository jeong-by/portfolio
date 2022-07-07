<template>
  <div>
    <b-navbar toggleable="lg"   :class="{navbar2:nav_active,navbar1:!nav_active}">
        <b-navbar-brand class="nav-title" href="#greeting">Uni__93</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="nav-btn-div ml-auto">
            <b-nav-item href="#about" class="nav-btn">About</b-nav-item>
            <b-nav-item href="#usable" class="nav-btn">Usable</b-nav-item>
            <b-nav-item href="#carousel" class="nav-btn">Projects</b-nav-item>
            <b-nav-item href="#service" class="nav-btn">Service</b-nav-item>
            <b-nav-item href="#contact" class="nav-btn">Contact Me</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            nav_active:false,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll, true)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll, true)
    },
    methods: {
        onScroll() {
            if(window.pageYOffset !==0) {
                this.nav_active=true;
            }
            else {
                this.nav_active=false;
            }
        }
    }    
}
</script>

<style scoped>
    .navbar1 {
        padding-left:15vw;
        padding-right:15vw;
        position:fixed;
        width:100vw;
    }
    .navbar2 {
        padding-left:15vw;
        padding-right:15vw;
        position:fixed;
        width:100vw;
        color:black;
        background-color: white;
        z-index: 10;
    }
    @media screen and (max-width: 576px){
        .nav-btn-div {
            display: none;
        }
    }
    @media screen and (min-width: 576px){
        .nav-btn-div {
            flex-direction: row !important;
            display: flex !important;
        }
        .navbar-collapse {
            display: flex !important;
            flex-basis:0 !important;
        }
        .nav-btn {
            padding-left:0.5rem !important;
            padding-right:0.5rem !important;
        }
    }
</style>