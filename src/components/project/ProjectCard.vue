<template class="animation-wrapper">
    <b-card  style="margin-top:5vh;padding:2vw;border-radius:20px;">
        <h1 style="font-weight:800;"><b-icon-clipboard-check></b-icon-clipboard-check> {{data.num}}</h1><br/>
        <b-card class="project-card">
            <b-card-title>{{data.title}}</b-card-title>
            <hr/>
            <div style="width:70%; margin-left:auto;margin-right:auto;margin-bottom:5vh;">
                <b-img v-bind:src="require(`../../assets/project/${data.img}`)" class="img" @click="showModal()"  ></b-img>
            </div>
            <b-card-title><b-icon class="icon" icon="info-circle-fill"></b-icon><p class="card-title2">{{data.subTitle}}</p></b-card-title>
            
            <p class="card-text" v-for="(item,key) in data.subText" :key="key"><b-icon class="icon" icon="check-all"></b-icon>{{item}}</p>
            <p> 
                <b-row style="display: flex !important; justify-content: center !important;; align-items: center !important;">
                    <b-col cols="6"> <h4><strong> USE </strong></h4> </b-col>
                    <b-col cols="6"><project-use-frame style="margin-left:auto;" :use="data.use"></project-use-frame> </b-col>
                </b-row> 
            </p>
        </b-card>
        <b-modal ref="my-modal" size="xl" hide-footer hide-header>
            <carousel :type="data.type"></carousel>
        </b-modal>
    </b-card>
    
</template>
<script>
    import ProjectUseFrame from "./ProjectUseFrame.vue"
    import Carousel from "./Carousel.vue"
    export default {
        components: {
            ProjectUseFrame,
            Carousel
        },
        props:{data:Object},
        data() {
            return {
                
            }
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            }
        },
            
        
       
    }
</script>

<style scoped>
    .icon {
        font-size: 2rem;
        float: left !important;
        margin-right:5vw;
    }
    .card-text {
        text-align:left;
    }
    .img {
        width:100%;
        height: auto;
        max-width:450px;
        cursor: pointer;
    }
    .img:hover {
        transform:scale(1.2);             /*  default */
        -webkit-transform:scale(1.2);     /*  크롬 */
        -moz-transform:scale(1.2);       /* FireFox */
        -o-transform:scale(1.2);           /* Opera */
    }
    .project-card {
        box-shadow: 20px 20px 20px;
        border-radius: 20px;
    }

    .project-carousel {
        text-shadow: 1px 1px 2px #333; 
        border-radius:20px;
        cursor: pointer;

    };
    .project-carousel:hover {
        transform: scale(1.5);
    }
    .card-img {
        height: auto;
        width:100%;
    }
    @media  screen and (max-width:480px) {
        .icon {
            font-size: 1.5rem;
            float: left !important;
        }
        .card-text {
            text-align:left;
            margin-left:5vw;
            font-size:0.9rem;
        }
        .card-title2 {
            text-align:left;
            margin-left:10vw;
            font-size:1.3rem;
            font-weight: bold;
        }
    }

        
</style>
