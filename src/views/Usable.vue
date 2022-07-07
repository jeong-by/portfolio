<template>
    <div class="usable">
        <p class="title"><strong>Usable Skills</strong></p>
        <b-row class="usable-div" align="center">
            <b-col sm="12" md="6" class="usable-card"><useable-card v-bind:data="front"  style="margin-bottom:5vh"></useable-card><useable-card v-bind:data="mobile"  style="margin-bottom:5vh"></useable-card></b-col>
            <b-col sm="12" md="6" class="usable-card"><useable-card v-bind:data="backend" style="margin-bottom:5vh"></useable-card><useable-card v-bind:data="control" style="margin-bottom:5vh"></useable-card><useable-card v-bind:data="service"></useable-card></b-col>
        </b-row>
        
    </div>
</template>

<script>
import UseableCard from "../components/usable/UsableCard.vue";

export default {
  components: { UseableCard },
    data() {
        return {
            front:{title:"Frontend",img:["htmljscss.jpeg","vuejs.png","jquery.png","react.png"]},
            mobile:{title:"Mobile",img:["flutter.png","cordova.png","android.png"]},
            backend:{title:"Backend",img:["nodejs.png","mysql.jpg","postgresql.jpg","geoserver.png","fhir.png"]},
            control:{title:"Version-Control",img:["git.jpeg","github.png"]},
            service:{title:"Web-Service",img:["aws.png"]}
        }
    },
}
</script>


<style scoped>
    .usable {
        background-color:#BFA393;
    }
    .title {
        font-size:3rem;
        padding-top:10vh;
    }
    .usable-card {
        margin-bottom:5vh;
        padding-left: auto;
        padding-right: auto;
        align-content: center;
    }
    .usable-div {
        width:70%; 
        margin-left:auto; 
        margin-right:auto;
    }

    @media  screen and (max-width:480px) {
        .usable-div {
            width:90%; 
            margin-left:auto; 
            margin-right:auto;
        }
    }
</style>