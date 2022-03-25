<template class="animation-wrapper">
    <div>
        <b-card
            title="Contact Me!"
            :img-src="require('../assets/profile.jpg')"
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
            v-if="mode==='mobile'"
        
        >
            <b-card-text class="card-text2" >
                <b-icon class="icon2" icon="envelope"></b-icon>
                <p class="icon-text2"><span style="font-size:1.5rem; font-weight: 800;color:#4D6C73">Email <br/></span> uni93@kakao.com</p>
                <b-icon class="icon2" icon="telephone"></b-icon>
                <p class="icon-text2"><span style="font-size:1.5rem; font-weight: 800;color:#4D6C73">Phone <br/> </span> 010-3584-7982</p>
                <b-icon class="icon2" icon="chat"></b-icon>
                <p class="icon-text2"><span style="font-size:1.5rem; font-weight: 800;color:#4D6C73">카카오톡 <br/></span> uni93</p>
                <b-icon class="icon2" icon="facebook"></b-icon>
                <p class="icon-text2"><span style="font-size:1.5rem; font-weight: 800;color:#4D6C73">Facebook <br/></span> zqsed6@naver.com</p>
            </b-card-text>
        </b-card>
        <b-card class="animation" style="margin-top:5vh;padding:2vw;border-radius:20px;" v-if="mode==='pc'">
        <b-row>
            <b-col md="4" sm="12" style="border-right:1px solid;"><b-img :src="require('../assets/profile.jpg')" class="contact-img"></b-img></b-col>
            <b-col md="8" sm="12" class="card-text">
                <b-col md="4" sm="12"><b-icon class="icon" icon="envelope"></b-icon></b-col>
                <b-col md="8" sm="12"><p class="icon-text"><span style="font-size:2.0rem; font-weight: 800;">Email </span> uni93@kakao.com</p></b-col>
                <b-col md="4" sm="12"><b-icon class="icon" icon="telephone"></b-icon></b-col>
                <b-col md="8" sm="12"><p class="icon-text"><span style="font-size:2.0rem; font-weight: 800;">Phone </span> 010-3584-7982</p></b-col>
                <b-col md="4" sm="12"><b-icon class="icon" icon="chat"></b-icon></b-col>
                <b-col md="8" sm="12"><p class="icon-text"><span style="font-size:2.0rem; font-weight: 800;">카카오톡 </span> uni93</p></b-col>
                <b-col md="4" sm="12"><b-icon class="icon" icon="facebook"></b-icon></b-col>
                <b-col md="8" sm="12"><p class="icon-text"><span style="font-size:2.0rem; font-weight: 800;">Facebook </span> zqsed6@naver.com</p></b-col>        
            </b-col>
        </b-row>
    </b-card>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            mode:'pc'
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            if(window.innerWidth>=960) {
                this.mode = "pc"
            }
            else {
                this.mode = "mobile"
            }
        }
    }
}
</script>



<style scoped>
    .icon {
        font-size: 2.5rem;
        float: left !important;
        margin-right:1vw;
    }
    .icon2 {
        font-size: 2.2rem;
        float: left !important;
        margin-right:1vw;
    }
    .contact-img {  
        width:80%;
        height:auto;
        object-fit:cover;
    }
    .card-text {
        text-align:left;
        /* padding-left:5vw !important;  */
        text-align:left !important;
        max-width:77% !important;
        line-height: 50px;
    }
    .contact-card {
        box-shadow: 20px 20px 20px;
        border-radius: 20px;
    }
    .icon-text {
        font-size: 1.5rem;
        color:#4D6C73;
    }
    .icon-text2 {
        font-size: 1.1rem;
        color:#4D6C73;
    }
        
</style>