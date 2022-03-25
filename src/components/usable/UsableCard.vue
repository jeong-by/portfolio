<template>
    <b-card class="card-view" align="center">
        <b-card-title class="card-title">{{data.title}}</b-card-title>
        <hr/>
        <b-img v-for="(item,key) in data.img" :key="key" v-bind:src="require(`../../assets/${item}`)" class="img"></b-img> 
    </b-card>
</template>

<script>
export default {
    props:{data:Object},
    data() {
        return {

        }
    }
}
</script>


<style scoped>
    .card-view {
        width:70%;
        box-shadow:  5px 5px 15px rgba(0,0,0,0.4);
        border-radius: 15px;
    }
    .card-title {
        font-size:1.5rem;
        color:#A64941;
        font-weight: bolder;
    }
    .img {
        max-width:60%;
        height: auto;
    }
</style>