<template>
    <div class="project">
        <p class="title"><strong>My Project</strong></p>
        <div class="project-div" >
            <swiper  class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,key) in data" :key="key"><project-card v-bind:data= "item"></project-card></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import ProjectCard from "../components/project/ProjectCard.vue"
  export default {
    components: {
      Swiper,
      SwiperSlide,
      ProjectCard
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        data:[
                {num:"First",title:"ESL(전자침상카드)",img:"esl.png",subTitle:"병원 정보와 연동한 실시간 환자 상세정보 안내 카드",subText:["[병원 프로젝트] -2020~2021 상반기","의료 전문 API FHIR 사용","CanvasJs통한 HTML Layout 제작 UI 제공","HTML을 이미지로 크기별 저장 가능","자동 동기화 스크립트 제작하여 병원 시스템에서 정보 입력시 자동으로 현장 AP로 통신하여 반영","[병원 프로젝트] 장애 발생시 문자메세지 시스템과 연동하는 API 개발하여 실시간 문자 안내 반영"],use:["HTML5","Jquery","NodeJS","MySQL"],type:1},
                {num:"Second",title:"HomePage",img:"homepage.png",subTitle:"회사 홈페이지 제작",subText:["[내부 프로젝트] -2022 후반기","반응형 디자인으로 웹/태블릿/모바일 기기에 맞게 화면사이즈 재구성"],use:["Vue3","MDBootstrap"],type:2},
                {num:"Third",title:"PACS Management",img:"pacs.png",subTitle:"병원 PACS PC 자산관리 페이지",subText:["[프로젝트] -2021 후반기","Vuejs 기반 프로젝트","CRUD 가능한 기본 관리자 페이지","중복되는 UI는 컴포넌트화 하여 사용","Vue-CLI4 사용하였으며 무료템플릿 사용","실 사용자에게 피드백받으며 주기적으로 수정"],use:["Vue2","Mysql","AWS"],type:3},
                {num:"Fourth",title:"ICU PROtocol 앱",img:"icu.png",subTitle:"중환자실 진료안내 프로토콜 앱",subText:["[프로젝트] -2020 상반기","Angularjs + HTML 구성","Cordova 로 빌드한 하이브리드 앱","3차 수정본 까지 출시"],use:["AgularJS","HTML5","Cordova"],type:4},
                {num:"fifth",title:"스마트 전광판",img:"smartboard.png",subTitle:"병원 시스템 연동 스마트 전광판",subText:["[프로젝트] -2022 상반기"," Android 네이티브 구성","FHIR  push 데이터를 받아 처리","각 전광판 니즈에 맞게 모델링 파일 수정"],use:["Android Native","NodeJS"],type:5},
                {num:"sixth",title:"회진알리미",img:"image6-1.png",subTitle:"병원 회진알림톡",subText:["[프로젝트] -2023 상반기","배치파일을 통해 매일 일정시간에 회진알리미 전달","카카오톡API를 활용하여 회진정보 선택 및 발송","패턴등록을 통한 간편로그인 처리","본인인증 연계"],use:["VueJS3","NodeJS","MySQL"],type:6},
            ]
      }
    }
  }
</script>

<style lang="css" scoped>
    /* .swiper {
        height: 100vh;
        width: 100%;
        background-color: #BF5E49;
        padding-bottom:10vh;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
    } */

    .project {
        background-color: #BF5E49;
        padding-bottom:10vh;
        
    }
    .title {
        font-size:3rem;
        padding-top:10vh;
    }
    .project-div {
        width:70%;
        margin-left: auto;
        margin-right: auto;
    }
    @media  screen and (max-width:480px) {
        .project-div {
            width:90%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
