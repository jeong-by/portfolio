<template>
    <div class="project">
        <p class="title"><strong>My Project</strong></p>
        <div class="project-div" >
            <project-card v-for="(item,key) in data" :key="key" v-bind:data="item"></project-card>  
        </div>
    </div>
</template>

<script>
import ProjectCard from "../components/project/ProjectCard.vue"
export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            data:[
                {num:"First",title:"ESL(전자침상카드)",img:"esl.png",subTitle:"병원 정보와 연동한 실시간 환자 상세정보 안내 카드",subText:["[병원 프로젝트] 소스코드 공개 불가","CanvasJs통한 HTML Layout 제작 UI 제공","HTML을 이미지로 크기별 저장 가능","자동 동기화 스크립트 제작하여 병원 시스템에서 정보 입력시 자동으로 현장 AP로 통신하여 반영","[병원 프로젝트] 장애 발생시 문자메세지 시스템과 연동하는 API 개발하여 실시간 문자 안내 반영"],use:["HTML5","Jquery","NodeJS","MySQL"],type:1},
                {num:"Second",title:"HomePage",img:"homepage.png",subTitle:"회사 정보 안내",subText:["[회사 프로젝트] git - 주소 URL ","반응형 디자인으로 웹/태블릿/모바일 기기에 맞게 화면사이즈 재구성"],use:["HTML5","Jquery","CSS"],type:2},
                {num:"Third",title:"PACS Management",img:"pacs.png",subTitle:"병원 PACS PC 자산관리 페이지",subText:["[개인 프로젝트] git - 주소 URL","Vuejs 기반 프로젝트","CRUD 가능한 기본 관리자 페이지","중복되는 UI는 컴포넌트화 하여 사용","Vue-CLI4 사용하였으며 무료템플릿 사용","실 사용자에게 피드백받으며 주기적으로 수정"],use:["VueJS","Mysql","AWS"],type:3},
                {num:"Fourth",title:"ICU PROtocol 앱",img:"icu.png",subTitle:"중환자실 진료안내 프로토콜 앱",subText:["[병원 프로젝트] 소스코드 공개 불가","Angularjs + HTML 구성","Cordova 로 빌드한 하이브리드 앱","3차 수정본 까지 출시"],use:["AgularJS","HTML5","Cordova"],type:4},
                {num:"Fifth",title:"Uni93__Log",img:"blog.png",subTitle:"개인 블로그 프로젝트",subText:["[개인 프로젝트] git - 주소 URL","Vuejs 기반 프로젝트","개인적으로 공부하고있는 내용 정리","개인 피드백 용도","WYSIWYG 에디터 연습 및 사용","[devlog],[tistory]등 참고"],use:["VueJS","Mysql"],type:5},
            ]
        }
    },
}
</script>


<style scoped>
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