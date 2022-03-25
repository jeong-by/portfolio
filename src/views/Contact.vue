<template>
    <div class="contact">
        <p class="title"><strong>Contact Me</strong></p>
        <b-row style="width:70%; margin-left:auto; margin-right:auto;align-content: center;" align="center">
            <card-contact></card-contact>
        </b-row>
    </div>
</template>
<script>
    import CardContact from "../components/CardContact.vue";
export default {
    components:{CardContact},
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .contact {
        background-color: #730E16;
        padding-bottom:10vh;
    }
    .title {
        font-size:3rem;
        padding-top:10vh;
        color: white;
    }
</style>