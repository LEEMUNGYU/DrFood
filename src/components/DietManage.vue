<template>
    <foody-header />
    <div class="mainContents">
    <h3>식단관리</h3><hr id="first_line">
    <div class="container">
        <div class="arrow">
            <img src="../style/img/otherBTN/leftBTN.svg" alt="어제 날짜로">
        </div>
        <div class="day">{{ currentDate }}</div>
        <div class="arrow">
            <img src="../style/img/otherBTN/rightBTN.svg" alt="내일 날짜">
        </div>
    </div>
        <!--버튼 기능 활성화 해야 됨.-->
    <div>
    <div class="container">
        <div class="mealTime" id="mor">
            아침
        </div>
        <div class="mealTime" id="lun">
            점심
        </div>
        <div class="mealTime" id="din">
            저녁
        </div>
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
</div>
    <foody-nav />
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

.mainContents{
  box-sizing: border-box;
  padding-top: 15%;
  padding-bottom:12%;
  margin:0;
}
h3{
    color:#3F72AF;
    text-align: left;
    margin-left: 3%;
}

#first_line{
    border: solid 0.4vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin: 3%;
}
.container {
    display: flex;
    justify-content: center;
    width: 90vw;
    margin-top:2%;
    margin-bottom:2%;
    margin:auto;
}

.day {
    color: #001335;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bold;
    flex:2;
    text-align: center;
}

.mealTime {
    margin-top:2%;
    background-color: #dbe2ef;
    color: #3f72af;
    border-radius: 5px;
    font-size:1.2rem;
    font-weight:bold;
    width: 26vw;
    text-align: center;
    height: 8vh;
}
.arrow {
    margin:auto;
    text-align: center;
}

.record {
    /*식사 기록 부분*/
    background-color: #dbe2ef;
    width: 90vw;
    color: #3f72af;
    height: 10vh;
    border-radius: 10px;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    margin-top:2%;
    margin-bottom:2%;
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
    width: 90vw;
    height: 40vh;
    background: #dbe2ef;
    border-radius: 10px;
    margin:auto;
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