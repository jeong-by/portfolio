<template>
    <div class="git">
        <p class="title"><strong><b-icon-github></b-icon-github> My Service</strong></p>
        <b-row class="service-div">
            <b-col md="6" sm="12" class="first-card"><github-card></github-card></b-col>
            <b-col md="6" sm="12"><blog-card></blog-card></b-col>
        </b-row>
        
    </div>
</template>
<script>
import GithubCard from "../components/git/GithubCard.vue";
import BlogCard from "../components/git/BlogCard.vue";
export default {
    components: { GithubCard,BlogCard},
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .git {
        background-color: #A8BFB9;
        padding-bottom: 10vh;
    }
    .title {
        font-size:3rem;
        padding-top:10vh;
    }
    .service-div {
        width:70%;
        margin-left:auto;
        margin-right:auto;
    }
    .first-card {
        border-right: 2px solid white;
        margin-bottom:10vh;
        height: 100%;
    }
    @media  screen and (max-width:480px) {
        
    }
</style>