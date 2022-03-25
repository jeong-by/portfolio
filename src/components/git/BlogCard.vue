<template>
    <b-card class="card">
        <div style="width:100%">
            <b-img :src="require('../../assets/blog.png')" style="width:100%;height:100%"></b-img>
        </div>
        <b-card-text class="card-title2">개인 블로그 (단순 기록용😊) <br><b-link href="">My 블로그 방문하기</b-link></b-card-text>
        <hr>
        <b-card-text class="card-explan">
            <b-icon-check/>미완성 프로젝트 (현재진행형)<br/>
            <b-icon-check/>Vuejs / NodeJs / Mysql 사용<br/>
            <b-icon-check/>SmartEditor 사용하여 글쓰기 구현<br/>
            <b-icon-check/>AWS 개인서버에 배포하여 사용 예정<br/>

        </b-card-text>
        <b-card-text> </b-card-text>
    </b-card>
</template>

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