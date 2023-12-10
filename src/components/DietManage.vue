<template>
    <foody-header></foody-header>
    <div class="container">
        <div class="header">식단관리</div>
        <hr>
        <div class="i-b">
            <img src="../style/img/otherBTN/leftBTN.svg" alt="어제 날짜로">
        </div>
        <div class="a">{{ currentDate }}</div>
        <div class="i-b">
            <img src="../style/img/otherBTN/rightBTN.svg" alt="내일 날짜">
        </div>
        <!--버튼 기능 활성화 해야 됨.-->
        <div class="box">
            아침
        </div>
        <div class="box">
            점심
        </div>
        <div class="box">
            저녁
        </div>
        <!--ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ-->
        <div class="record">
            <div class="alert">식사 기록이 없습니다.</div>
            <div class="r-b">기록하기</div>
            <div class="img">
                <img src="../style/img/otherBTN/PenBTN.svg" alt="기록">
            </div>
        </div>

        <div class="main">
            <div class="word">식단 추천</div>
            <div class="ul">
                <div class="item1">
                    1
                </div>
                <div class="item1">
                    2
                </div>
                <div class="item1">
                    3
                </div>
                <div class="item1">
                    4
                </div>
                <div class="item1">
                    5
                </div>
            </div>
        </div>
    </div>
    <foody-nav></foody-nav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';

export default {
    name: 'DietManage',
    components: { FoodyHeader, FoodyNav,},
    data() {
        return {
        currentDate: '',
        }
    },
    mounted() {
        // 컴포넌트가 마운트된 후 현재 날짜를 설정
        this.setCurrentDate();
    },
    methods: {
        setCurrentDate() {
            const today = new Date();
            const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
            const day = today.getDate();
            this.currentDate = `${month}월 ${day}일`;
        },
    },
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
}

.a {
    color: #001335;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    width: 30%;
    text-align: center;
}

.box {
    background-color: #dbe2ef;
    color: #3f72af;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22vw;
    text-align: center;
    margin-top: 5%;
    height: 8vh;
}

hr {
    width: 100%;
    border: solid 2px #3f72af;
    margin-bottom: 20px;
}

.header {
    color: #3f72af;
    font-weight: bold;
    font-size: 2rem;
}

.img {
    width: 20%;
    padding: 10px;
}
/*image-box*/
.i-b {
    /*이전 페이지, 다음 페이지*/
    width: 30%;
    text-align: center;
}

.record {
    /*식사 기록 부분*/
    background-color: #dbe2ef;
    width: 100%;
    color: #3f72af;
    height: 10vh;
    border-radius: 14px;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/*record-btn*/
.r-b {
    /*기록하기 글자*/
    color: #3f72af;
    padding: 10px;
    align-items: end;
    background-color: #dbe2ef;
    border-radius: 10%;
    border: #dbe2ef;
}

.alert {
    /*식사 기록이 없습니다.*/
    color: #001335;
    font-size: 20px;
    padding: 10px;
}

.main {
    width: 368px;
    height: 386px;
    left: 31px;
    top: 426px;
    background: #dbe2ef;
    border-radius: 14px;
    margin-top: 5vh;
    margin-left: 10vw;
    justify-self: space-between;
}

.word {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #3f72af;
    font-weight: bold;
}

.ul{
    justify-items: space-between;
}
.item1{
    width: 193px;
    height: 42px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    text-align: center;
    margin: 2vh;
    align-items: center;
}
</style>