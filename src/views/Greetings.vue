<template>
    <div class="greetings">
        <p class="title waviy">━━━ <br/>
        <span style="--i:1">[</span>
        <span style="--i:2">정</span>
        <span style="--i:3">병</span>
        <span style="--i:4">윤</span>
        <span style="--i:5">]</span> <br/> -
        <span style="--i:6">웹</span>
        <span style="--i:7">/</span>
        <span style="--i:8">안</span>
        <span style="--i:9">드</span>
        <span style="--i:10">로</span>
        <span style="--i:11">이</span>
        <span style="--i:12">드</span>
        <span style="--i:13">개</span>
        <span style="--i:14">발</span>
        <span style="--i:15">포</span>
        <span style="--i:16">트</span>
        <span style="--i:17">폴</span>
        <span style="--i:18">리</span>
        <span style="--i:19">오</span>-
        
        
        
        <!-- <p class="title">UNS NETWORKS</p> -->
        <!-- <p class="greeting-msg"></p> --> 
        <p>━━━━━━━━━━━━━━━━━━━━━━━━</p>
        <p class="greetings-msg">안녕하세요 <br/>평범한 집돌이 이지만 <br/> 실용적인것을 좋아하고 틀에 박힌 사고를 싫어하는 개발자입니다 </p>
        <b-button pill class="greetings-btn" size="lg" href="#about">자세히 보기 ↘</b-button>

    </div>
</template>

<style scoped>
    .waviy span {
        font-family: 'Alfa Slab One', cursive;
        position: relative;
        display: inline-block;
        color: #fff;
        text-transform: uppercase;
        animation: waviy 1s infinite;
        animation-delay: calc(.1s * var(--i));
    
    }
    .greetings {
        background-color: #4D6C73;
        padding-bottom: 10vh;
    }
    .title {
        color:white;
        font-size:2rem; 
        padding-top:15vh;
    }

    .greetings-msg {
        font-size: 1.1rem;
        color: #d3d3d3;
    }
    .greetings-btn {
        color: white;
        background-color: #BF5E49;
        margin-top:10vh;
    }

    @keyframes waviy {
        0%,40%,100% {
            transform: translateY(0)
        }
        20% {
            transform: translateY(-10px)
        }
    }
    @media  screen and (max-width:480px) {
        span {
            font-size:6.7vw;
        }
    }
</style>