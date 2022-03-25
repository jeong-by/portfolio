<template>
    <div class="about">
        <p class="title"><strong>About Me</strong></p>
        <div class="icon-div">
            <b-row>
                <b-col xs="12" sm="6" md="6" lg="4" class="row" style="margin-top:5vh" >
                    <b-col cols="6"><b-icon class="icon" icon="person-square"></b-icon> </b-col>
                    <b-col cols="6" ><p class="icon-title">이름</p><p class="icon-detail">정병윤</p> </b-col>    
                </b-col>
                <b-col xs="12" sm="6" md="6" lg="4" class="row" style="margin-top:5vh">
                    <b-col cols="6"><b-icon class="icon" icon="calendar-fill"></b-icon> </b-col>
                    <b-col cols="6" ><p class="icon-title">생년월일</p><p class="icon-detail">93.05.08</p> </b-col>    
                </b-col>
                <b-col xs="12" sm="6" md="6" lg="4" class="row" style="margin-top:5vh">
                    <b-col cols="6"><b-icon class="icon" icon="heart-half"></b-icon> </b-col>
                    <b-col cols="6" ><p class="icon-title">MBTI</p><p class="icon-detail">ISTP</p> </b-col>    
                </b-col>
                <b-col xs="12" sm="6" md="6" lg="4" class="row" style="margin-top:5vh" >
                    <b-col cols="6"><b-icon class="icon" icon="briefcase-fill"></b-icon> </b-col>
                    <b-col cols="6" ><p class="icon-title">근무지</p><p class="icon-detail">U&S Networks</p> </b-col>    
                </b-col>
                <b-col xs="12" sm="6" md="6" lg="4" class="row" style="margin-top:5vh">
                    <b-col cols="6"><b-icon class="icon" icon="card-checklist"></b-icon> </b-col>
                    <b-col cols="6" ><p class="icon-title">경력</p><p class="icon-detail">4년 이상</p> </b-col>    
                </b-col>
                <b-col xs="12" sm="6" md="6" lg="4" class="row" style="margin-top:5vh">
                    <b-col cols="6"><b-icon class="icon" icon="book-fill"></b-icon> </b-col>
                    <b-col cols="6" ><p class="icon-title">학력</p><p class="icon-detail">세종대학교<br/>(공간정보공학과) </p></b-col>    
                </b-col>
            </b-row>
        </div>
        
    </div>
</template>

<style scoped>
    .row {
        margin-right: 0 !important;
        margin-left:0 !important;
    }
    .title {
        font-size:3rem;
        padding-top:10vh;
    }
    .icon-div {
        width:70%;
        margin-left: auto;
        margin-right:auto;
        margin-bottom: 10vh;
    }
    .icon {
        font-size: 5rem;
    }
    .icon-title {
        text-align: left;
        font-size:1.3rem;
        font-weight: bolder;
    }
    .icon-detail {
        text-align: left;
        font-size: 1.1rem;
        font-weight: bolder;
        word-break: break-word;
    }
    @media screen  and (min-width: 576px) and (max-width: 1200px) {
        .icon {
            font-size:3rem;
        }
        .icon-title {
            text-align: left;
            font-size:1rem;
            font-weight: bolder;
        }
        .icon-detail {
            text-align: left;
            font-size: 0.8rem;
            font-weight: bolder;
        }
    }
    @media  screen and (max-width:480px) {
        .icon-div {
            width:90%;
            margin-left: auto;
            margin-right:auto;
            margin-bottom: 10vh;
        }
    }

    
</style>