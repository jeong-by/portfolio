<template>
    <b-card class="card" >
        <div style="width:100%">
            <b-img :src="require('../../assets/github.png')" style="width:100%;height:100%;"></b-img>
        </div>
        <b-card-text class="card-title2">개인 프로젝트 및 업무 프로젝트 버전관리<br><b-link @click="showGit()">Github 둘러보기</b-link></b-card-text>
        <hr>
        <b-card-text class="card-explan">
            <b-icon-check/>회사 업무 특성상 1인 프로젝트 위주<br/>
            <b-icon-check/>개인 백업 개념으로 사용<br/>
            <b-icon-check/>VisualStudioCode 연동사용
        </b-card-text>
        <b-card-text> </b-card-text>
    </b-card>
</template>

<script>
export default {
    data() {

    },
    methods: {
        showGit() {
            window.open("https://github.com/jeong-by?tab=repositories");
        }
    }
}
</script>

<style scoped>
    .card {
        box-shadow: 20px 20px 20px;
        border-radius: 25px;
        font-size: 1.3rem;
    }
    .card-explan {
        text-align: left !important;

    }
    @media  screen and (max-width:480px) {
        .card {
            font-size:1rem;
        }
        .card-title2 {
            font-size:1.3rem;
        }
    }
</style>