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
    
    <div class="container">
        <div class="mealTime" id="mor">아침</div>
        <div class="mealTime" id="lun">점심</div>
        <div class="mealTime" id="din">저녁</div>
    </div>
    <div class="writeList">
        <!--ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ-->
        <div class="record">
            <div class="noticeRecord">식사 기록이 없습니다</div>
            <div class="r-b">기록하기</div>
            <div class="write_BTN">
                <img src="../style/img/otherBTN/PenBTN.svg" id="penBTN" alt="기록">
            </div>
        </div>
        <div class="writeRecord">
            <div class="titleNbtn">
                <div class="write_word">식사기록</div>
                <div class="Icons">
                <div class="saveNchange_BTN">
                    <img src="../style/img/otherBTN/saveBTN.svg" id="saveBTN" alt="저장">
                    <img src="../style/img/otherBTN/PenBTN.svg" id="changeBTN" alt="수정">
                </div>
                <div class="saveText">저장</div>
                <div class="changeText">수정</div>
                </div>
            </div>
            <div class="writeListItems">
                <div class="writeListEle">
                    <div class="Ele1">1</div><div class="puls">+</div><div class="minus">-</div>
                </div>
                <div class="writeListEle">
                    <div class="Ele1">1</div><div class="puls">+</div><div class="minus">-</div>
                </div>
                <div class="writeListEle">
                    <div class="Ele1">1</div><div class="puls">+</div><div class="minus">-</div>
                </div>
                <div class="writeListEle">
                    <div class="Ele1">1</div><div class="puls">+</div><div class="minus">-</div>
                </div>
                <div class="writeListEle">
                    <div class="Ele1">1</div><div class="puls">+</div><div class="minus">-</div>
                </div>
                <div class="compNcan">
                    <div class="comp">추가 기록</div><div class="can">기록 취소</div>
                </div>                
            </div>
        </div>
        <div class="main">
            <div class="word">식단 추천</div>
            <div class="writeListItems">
                <div class="item1">1</div>
                <div class="item1">2</div>
                <div class="item1">3</div>
                <div class="item1">4</div>
                <div class="item1">5</div>
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
    width: 80vw;
    margin-top:2%;
    margin-bottom:2%;
    margin:auto;
    gap:10%;
}
.writeList{
    margin-top:1%;
    margin-bottom:2%;
    padding:3%;
    height:50vh;
    overflow: scroll;
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
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    font-size:1.2rem;
    font-weight:bold;
    line-height: 8vh;
    width: 26vw;
    height: 8vh;
}
.arrow {
    margin:auto;
    text-align: center;
}

.record {
    /*식사 기록 부분*/
    background-color: #dbe2ef;
    width: 80vw;
    color: #3f72af;
    height: 10vh;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    gap:7%;
    margin-top:2%;
    margin-bottom:2%;
}
/*record-btn*/
.r-b {
    /*기록하기 글자*/
    font-size: 0.9rem;
    color: #3f72af;
    font-weight:bold;
    margin-right:-5%;
}

.noticeRecord {
    /*식사 기록이 없습니다.*/
    color: #001335;
    font-weight:bold;
    font-size: 1rem;
}
.titleNbtn{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3%;
}
.writeRecord{
    width: 80vw;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    background: #dbe2ef;
    border-radius: 10px;
    padding-bottom:3%;
    margin:auto;
    margin-top:4%;
}
.write_word{
    margin-left:30%;
    font-size: 1.4rem;
    text-align: center;
    color: #3f72af;
    font-weight: bold;
}
.Icons{
    margin-left:20%;
    display:flex;
    flex-direction: column;
}
.saveNchange_BTN{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
}
#saveBTN{
    display:block;
    margin:auto;
    margin-top:5%;
    margin-bottom:5%;
    width:80%;
    height:80%;
}
#changeBTN{
    display:none;
    margin:auto;
    margin-top:5%;
    margin-bottom:5%;
    width:80%;
    height:80%;
}
.saveText{
    display:block;
    font-size: 1rem;
    color: #3f72af;
    font-weight:bold;
}
.changeText{
    display:none;
    font-size: 1rem;
    color: #3f72af;
    font-weight:bold;
}
.main {
    width: 80vw;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    background: #dbe2ef;
    border-radius: 10px;
    padding-bottom:3%;
    margin:auto;
    margin-top:4%;
}

.word {
    padding:3%;
    font-size: 1.4rem;  
    text-align: center;
    color: #3f72af;
    font-weight: bold;
}

.writeListItems{
    justify-content: center;
    align-items: center;
    
}
.item1{
    width: 50vw;
    height: 6vh;
    line-height: 6vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin:auto;
    margin-top:3%;
}
.write_BTN{
    padding:0.5%;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
}
#penBTN{
    width:80%;
    height:80%;
}

.writeListEle{
    display: flex;
    justify-content: center;
    align-items: center;
}
.Ele1{
    width: 45vw;
    height: 6vh;
    line-height: 6vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top:3%;
}

.puls{
    color:#17A1FA;
    font-size: 1.2rem;
    font-weight: bold;
    width: 7vw;
    height: 4vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-left: 5%;
    margin-right:3%;
    margin-top:3%;
}

.minus{
    color:#FF5454;
    font-size: 1.2rem;
    font-weight: bold;
    width: 7vw;
    height: 4vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top:3%;
}

.compNcan{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    margin-top:5%;
    gap:5%;
}
.comp, .can{
    width:30vw;
    height: 4vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
}
.comp{
    color:#17A1FA;
    font-weight: bold;
}
.can{
    color:#FF5454;
    font-weight: bold;
}
</style>