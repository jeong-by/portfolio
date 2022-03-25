<template>
    <b-card class="card">
        <p v-for="(item,index) in use" :key="index"><strong>{{item}}</strong></p>
        
    </b-card>
</template>

<script>
export default {
    props:["use"],
    data() {
        return {

        }
    },
    created() {
    }
}
</script>

<style scoped>
    .card {
        background-color: #BF5E49 !important;
        text-align: left;
        color: white;
    } 
</style>