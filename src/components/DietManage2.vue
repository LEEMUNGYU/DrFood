<template>
    <foody-header />
<div class="mainContents">
    <h3>식단관리</h3><hr id="first_line">
    <div class="container">
        <div class="arrow">
            <img src="../style/img/otherBTN/leftBTN.svg" alt="어제 날짜로" @click="moveDay(-1)">
        </div>
        <div class="day">{{ currentDate }}</div>
        <div class="arrow">
            <img src="../style/img/otherBTN/rightBTN.svg" alt="내일 날짜" @click="moveDay(1)">
        </div>
    </div>
        <!--버튼 기능 활성화 해야 됨.-->
    <div class="container">
        <div v-for="(meal, index) in meals"
                :key="index" 
                @click="selectMealTime(meal.id)"
                :class="{ 'mealTime': true, 'selected': selectedMeal === meal.id }">{{ meal.name }}</div>
    </div>
    <div class="writeList">
        <div class="record" v-if="!showWriteRecord">
            <div class="noticeRecord">식사 기록이 없습니다</div>
            <div class="r-b">기록하기</div>
            <div class="write_BTN" @click="writeRecord()">
                <img src="../style/img/otherBTN/PenBTN.svg" id="penBTN" alt="기록">
            </div>
        </div>
        <div class="writeRecord" v-if="showWriteRecord">
            <div class="titleNbtn">
                <div class="write_word">식사기록</div>
                <div class="Icons">
                    <div class="saveNchange_BTN">
                        <img src="../style/img/otherBTN/saveBTN.svg" v-if="showCount===1"  @click="saveRecord()" id="saveBTN" alt="저장">
                        <img src="../style/img/otherBTN/PenBTN.svg" v-if="showCount===2"  @click="ChangeRecord()" id="changeBTN" alt="수정">
                    </div>
                    <div class="saveText"  v-if="showCount===1"  @click="saveRecord()">저장</div>
                    <div class="changeText" v-if="showCount===2"  @click="ChangeRecord()">수정</div>
                </div>
            </div>
            <div class="writeListItems">
                    <div class="writeListEle">
                        <div v-for="(item, index) in selectedMealItems" :key="index"  class="inputWrapper">
                            <input v-model="selectedMealItems[index].value" :placeholder="getPlaceholderText(index)" :disabled="selectedMealItems[index].disabled">
                                    <div v-if="showCount===1" class="puls" @click="decisionList(index, true)">+</div>
                                    <div v-if="showCount===1" class="eliminate" @click="removeLastItem(index, true)">x</div>
                                    <div v-if="showCount===1" class="minus" @click="decisionList(index, false)">-</div>
                        </div>
                    </div>
                <div class="compNcan">
                    <div class="comp" v-if="showCount===1" @click="addInput(index)">추가 기록</div><div v-if="showCount===1" class="can" @click="recordCancel()">기록 취소</div>
                    <div class="del" v-if="showCount===2"  @click="DelRecord()">기록 삭제</div>
                </div>                
            </div>
        </div>
        <RecordPopUp v-if="this.openModal == true" @closePopup="closeModalView" @deReco="Reco"/>
        <div class="main">
            <div class="word">식단 추천</div>
            <div class="writeListItems">
                <div  v-for="(item, index) in selectedMealItemsRecord" :key="index" id="item" class="item1">{{ item }}</div>
            </div>
        </div>
    </div>
</div>
    <foody-nav />
</template>

<script>
import RecordPopUp from '@/components/RecordPopUp.vue';
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';
import axios from 'axios';

export default {
    name: 'DietManage2',
    components: { FoodyHeader, FoodyNav, RecordPopUp, },
    data() {
        return {
        openModal: false,
        Reco : false,
        showWriteRecord:false,
        showCount: 0,
        isSaveVisible: false,
        originalMealItems: {},
        currentDate: '',
        meals: [
            { id: 'mor', name: '아침' },
            { id: 'lun', name: '점심' },
            { id: 'din', name: '저녁' }
        ],
        selectedMeal: 'mor',
        mealItems: {
                mor: [], 
                lun: [],
                din: []
        },
        mealItemsRecord: {
                mor: [],
                lun: [],
                din: []
        },
        lookTimes: '',
        user_id: this.$store.state.userId,
        }
    },
    mounted() {
        // 컴포넌트가 마운트된 후 현재 날짜를 설정
        this.setCurrentDate();
    },
    computed:{
        selectedMealItems() {
            return this.mealItems[this.selectedMeal];
        },
        selectedMealItemsRecord() {
            return this.mealItemsRecord[this.selectedMeal];
        },
    },
    methods: {
        setCurrentDate() {
            const today = new Date();
            const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
            const day = today.getDate();
            const year = today.getFullYear();
            this.currentDate = `${month}월 ${day}일`;
            this.lookTimes = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        },
        moveDay(offset) {
            const currentDate = new Date(this.lookTimes);
            const newDate = new Date(currentDate.setDate(currentDate.getDate() + offset));

            const month = (newDate.getMonth() + 1);
            const day = newDate.getDate();
            const year = newDate.getFullYear();

            this.currentDate = `${month}월 ${day}일`;
            this.lookTimes = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            this.callRecordList();
        },
        writeRecord(){
            this.setRecordListMealItems();
            this.showWriteRecord = true;
            this.showCount = 1;
        },
        selectMealTime(mealId) {
                this.selectedMeal = mealId;
                this.selectedItem = this.mealItems[mealId];
                if(this.showCount === 0){
                    this.showWriteRecord = false;
                    this.isSaveVisible = true;
                }else{
                    this.showWriteRecord = true;
                    this.isSaveVisible = false;
                }
        },
        hasSavedRecord(mealType) {// 각 시간에 대한 저장 기록이 있는지 확인하는 함수
            return this.mealItems[mealType].every(item => item.check);
        },
        selectItem(item) {
                this.selectedItem = item;
        },    // ... (기존 메서드 내용 유지)
        addInput(index) {
            const newIndex = index + 1 === this.selectedMealItems.length ? index + 1 : this.selectedMealItems.length;
            this.selectedMealItems.splice(newIndex, 0, {value:'', active:true, check:false}); // 빈 문자열로 새로운 항목 추가
        },
        recordCancel(){
            this.setRecordListMealItems();
            this.showWriteRecord = false;
            this.isSaveVisible  = true;
            this.showCount = 0;
        },
        getPlaceholderText(index){
            return 'Item ' + (1 + index);
        },
        decisionList(index, hide){
            const plusIcons = document.querySelectorAll('.puls');
            const eliIcons = document.querySelectorAll('.eliminate');
            const minusIcons = document.querySelectorAll('.minus');
            if (index >= 0 && index < this.selectedMealItems.length) {
            if (hide) {
            // 선택된 input의 상태를 저장하고 + 아이콘을 숨김
                this.selectedMealItems[index] = { value: this.selectedMealItems[index].value, disabled: true};
                // 해당하는 plus 아이콘을 숨김
                plusIcons[index].style.display = 'none';
                eliIcons[index].style.display = 'none';
                minusIcons[index].style.display = 'block';
            } else {
            // + 아이콘을 다시 visible 상태로 변경하고 input을 다시 활성화
                this.selectedMealItems[index] = { value: this.selectedMealItems[index].value, disabled: false};
                plusIcons[index].style.display = 'block';
                eliIcons[index].style.display = 'block';
                minusIcons[index].style.display = 'none';
            }
        }
        },
        setSaveRecord(){
            const plusIcons = document.querySelectorAll('.puls');
            const eliIcons = document.querySelectorAll('.eliminate');
            const minusIcons = document.querySelectorAll('.minus');
            const comp =  document.querySelectorAll('.comp');
            const can =  document.querySelectorAll('.can');
            const del = document.querySelectorAll('.del');

            if (this.selectedMealItems.length > 0) {
            this.selectedMealItems.forEach((item, index) => {
                const plusIcon = plusIcons[index];
                const eliIcon = eliIcons[index];
                const minusIcon = minusIcons[index];

                plusIcon.style.display = 'none';
                eliIcon.style.display = 'none';
                minusIcon.style.display = 'none';
                });
            }

            comp.forEach(button => (button.style.display = 'none'));
            can.forEach(button => (button.style.display = 'none'));
            del.forEach(button => (button.style.display = 'block'));

            const changeBTN = document.querySelectorAll('#changeBTN');
            changeBTN.forEach(button => (button.style.display = 'block'));
            const saveBTN = document.querySelectorAll('#saveBTN');
            saveBTN.forEach(button => (button.style.display = 'none'));
            const changeText = document.querySelectorAll('.changeText');
            changeText.forEach(element => (element.style.display = 'block'));
            const saveText = document.querySelectorAll('.saveText');
            saveText.forEach(element => (element.style.display = 'none'));
            // 수정 버튼만 보이도록 설정
            const record = document.querySelectorAll('.record');
            record.forEach(element => (element.style.display = 'none'));
            this.showWriteRecord  = true;
            this.isSaveVisible  = false;
            this.showCount = 2;
        },
        setChangeRecord() {
            const plusIcons = document.querySelectorAll('.puls');
            const eliIcons = document.querySelectorAll('.eliminate');
            const minusIcons = document.querySelectorAll('.minus');
            const comp =  document.querySelectorAll('.comp');
            const can =  document.querySelectorAll('.can');
            const del = document.querySelectorAll('.del');
            this.selectedMealItems.forEach((item, index) => {
                const minusIcon = minusIcons[index];
                const eliIcon = eliIcons[index];
                const plusIcon = plusIcons[index];
                minusIcon.style.display = 'none';
                eliIcon.style.display = 'block';
                plusIcon.style.display = 'block';
            });
            comp.forEach(button => (button.style.display = 'block'));
            can.forEach(button => (button.style.display = 'block'));
            del.forEach(button => (button.style.display = 'none'));

            const changeBTN = document.querySelectorAll('#changeBTN');
            changeBTN.forEach(button => (button.style.display = 'none'));
            const saveBTN = document.querySelectorAll('#saveBTN');
            saveBTN.forEach(button => (button.style.display = 'block'));
            const changeText = document.querySelectorAll('.changeText');
            changeText.forEach(element => (element.style.display = 'none'));
            const saveText = document.querySelectorAll('.saveText');
            saveText.forEach(element => (element.style.display = 'block'));
            // 수정 버튼만 보이도록 설정
            const record = document.querySelectorAll('.record');
            record.forEach(element => (element.style.display = 'block'));
            this.showWriteRecord = this.hasSavedRecord(this.selectedMeal);
            this.isSaveVisible = this.hasSavedRecord(this.selectedMeal);
            this.showCount = 1;
        },
        saveRecord(){
            const userIdx = this.$store.state.userId;
            const date = this.lookTimes;
            const occasion = (this.selectedMeal === 'mor' ? '아침' : this.selectedMeal === 'lun' ? '점심' : '저녁');
            const morValues = this.mealItems.mor.map(item => item.value);
            const lunValues = this.mealItems.lun.map(item => item.value);
            const dinValues = this.mealItems.din.map(item => item.value);
            const writeValues =  (this.selectedMeal === 'mor' ? morValues : this.selectedMeal === 'lun' ? lunValues : dinValues);
            const foodRecord = writeValues.join(', ');
            
            axios({
                method: 'post',
                url:'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderMeal/writeMealRecords?',
                params: {
                    userIdx,
                    date,
                    occasion,
                    foodRecord,
                }})
            .then((res) => {
                const result = res.data;
            // 성공 시 작업
            switch(result){
                case '200': console.log(res.data);
                            this.showWriteRecord = true;
                            this.isSaveVisible = false;
                            break;
                case '-2': console.log(res.data);
                            break;
                case '-3': console.log(res.data);
                            break;
                default : console.log(res.data);
                            break;
            }
            })
            .catch(err => {
                console.log('에러!!!');
                console.log(err);
            })
            
            this.setSaveRecord();
            this.mealItems[this.selectedMeal].forEach(item => {item.disabled = true, item.check = true;});
            this.showCount=2;

        },
        ChangeRecord() {
            this.mealItems[this.selectedMeal].forEach(item => { item.disabled = false, item.check = false; });
            this.showCount = 1;
        },
        DelRecord(){
            this.openModal =true;
        },
        closeModalView(data){
            this.openModal = data;
        },
        removeLastItem(index) {
            if (index >= 0 && index < this.selectedMealItems.length) {
            this.selectedMealItems.splice(index, 1);
            }
        },
       callRecordList(){
            const userIdx = this.user_id;
            const date = String(this.lookTimes);
            const occasion =  (this.selectedMeal === 'mor' ? '아침' : this.selectedMeal === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderRecommend/searchRmdMeal?',
        params: {
          userIdx,
          date,
          occasion
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result);
            break;
          case '200': console.log(result);
                      this.mealItemsRecord[this.selectedMeal] = result.foodList.map(item => item.name);
            break;
          default:  console.log(result);
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
        },
        setRecordListMealItems(){
            for(let i=0; i<this.mealItemsRecord[this.selectedMeal].length; i++){
                this.mealItems[this.selectedMeal][i] = {value:this.mealItemsRecord[this.selectedMeal][i], active: true, disabled: false, check: false};
            }
        },
        settingFirst(){
        this.originalMealItems = { ...this.mealItems };
        const allChecksFalse = Object.values(this.mealItems).every(items => items.length === 0 || items.every(item => !item.check));
        if (allChecksFalse) {
            this.showWriteRecord = false;
            this.isSaveVisible = true;
            this.showCount = 0;
        }
        },
        getMealArchive(){
            const userIdx = this.user_id;
            const date = String(this.lookTimes);
            const occasion =  (this.selectedMeal === 'mor' ? '아침' : this.selectedMeal === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderMeal/getMealNames?',
        params: {
          userIdx,
          date,
          occasion
        }
        })
        .then((res) => {
        const result = res.data;
        switch(result.rst_cd){
          case '-1': console.log(result);
            break;
          case '-2': console.log(result);
                     this.showWriteRecord = false;
                     this.showCount = 0;
            break;
          case '200': console.log(result);
                      console.log(result.mealNames);
                      this.showCount =2;
                      this.showWriteRecord = true;
                      this.isSaveVisible = false;
                      this.mealItems[this.selectedMeal] = result.mealNames.map(item => ({ value: item, active: true, disabled: true, check: true }));
            break;
          default:  console.log(result);
                    this.showCount = 0;
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
        },
    },
    watch: {
        Reco(newVal) {
            const confirmed = newVal;

        if(confirmed != false){
            const userIdx = this.user_id;
            const date = String(this.lookTimes);
            const occasion =  (this.selectedMeal === 'mor' ? '아침' : this.selectedMeal === 'lun' ? '점심' : '저녁');
        axios({
        method: 'delete',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderMeal/removeMealRecords?',
        params: {
          userIdx,
          date,
          occasion
        }
        })
        .then((res) => {
        const result = res.data;
        switch(result.rst_cd){
          case '200': console.log(result);
                      this.showCount =0;
                      this.showWriteRecord= false;
                      this.isSaveVisible = false;
                      this.openModal =false;
                      this.Reco = false;
            break;
          default:  console.log(result);
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
            }
        },
        selectedMeal(newVal, oldVal){
            if(newVal != oldVal){
                this.callRecordList();
                this.getMealArchive();
            }
        },
    },
    created() {
        this.setCurrentDate();
        this.selectedMeal = 'mor';
        this.settingFirst();
        this.callRecordList();
        this.setRecordListMealItems();
        this.getMealArchive()
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
.mealTime.selected{
    margin-top:2%;
    background-color: #3f72af;
    color: #fff;
    border-radius: 5px;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.25);
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
    display:block;
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
    display:block;
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
    flex-direction: column;
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
.inputWrapper {
    display: flex;
    align-items: center; /* 가운데 정렬 */
    margin-top: 3%; /* 원하는 간격 조정 */
}

input{
    width: 45vw;
    height: 6vh;
    line-height: 6vh;
    background: #FFFFFF;
    box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    text-indent: 1rem;
    margin-top:3%;
}
input:disabled {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    font-weight: bold;
}
.puls{
    color:#17A1FA;
    font-size: 1.2rem;
    font-weight: bold;
    width: 12vw;
    height: 4.5vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-left: 6%;
    margin-top:3%;
}
.eliminate{
    color:#FF5454;
    font-size: 1.2rem;
    width: 12vw;
    height: 4.5vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-left: 6%;
    margin-top:3%;
}
.minus{
    display:none;
    color:#FF5454;
    font-size: 1.2rem;
    font-weight: bold;
    width: 12vw;
    height: 4.5vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-left: 6%;
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
    display:block;
    color:#17A1FA;
    font-weight: bold;
}
.can{
    display:block;
    color:#FF5454;
    font-weight: bold;
}

.del{
    display:block;
    width:30vw;
    height: 4vh;
    background: #FFFFFF;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    color:#FF5454;
    font-weight: bold;
}
</style>