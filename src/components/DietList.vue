<template>
    <foody-header />
    <div class="mainContents">
    <div class="container">
    <h3>식단추천</h3>
    <hr id="frist_line">
        <div class="diet_list_box"><!-- vue를 최대한 활용 시킨 코드-->
            <div id="mealtime_box">
        <ResonPopUp v-if="openModal === true" @closePopup="close()" style="z-index:999;"/>
                <div v-for="(meal, index) in meals"
                :key="index" 
                @click="selectMealTime(meal.id)"
                :class="{ 'mealTime': true, 'selected': selectedMeal === meal.id }">{{ meal.name }}</div>
            </div>
            <div class="list_bd">
                <div class="list_el">
                    <div  v-for="(item, index) in selectedMealItems" :key="index" id="el"  @click="selectItem(item)" :class="{ 'selected': selectedItem === item.name }">{{ item.name.length > 4 ? item.name.substring(0, 4) + '..' : item.name }}</div>
                </div>
                <div>
                    <div id="tot_zip" v-show="!selectedItem">
                    <div id="tot_text">총 영양성분</div>
                    <hr id="second_line">
                        <div id="el_name">
                            <div v-for="(value, key) in totalNutrition[0]" :key="key">
                            {{ key }}<br>({{ value.unit }})<br><p>{{ value.amount }}</p>
                            </div>
                        </div>
                    </div>
                    <div id="indi_zip" v-show="selectedItem">
                    <div id="indi_text">{{ selectedItem }} 영양성분</div>
                    <hr id="second_line">
                        <div id="el_name">
                            <div v-for="(value, key) in selectedNutrition" :key="key">
                            {{ key }}<br>({{ value.unit }})<br><p>{{ value.amount }}</p>
                            </div>
                        </div>
                    </div>
                    <div id="notice">*식품을 누르면 각 식품별 영양성분을 확인하실 수 있습니다.</div>
                    <div id="two_btn">
                        <div id="reason" @click="openReson()"><img src="../style/img/otherBTN/reasonBTN.svg" id="reCON">구성이유</div>
                        <div id="reroll" @click="callDiffrentList1()"><img src="../style/img/otherBTN/rerollBTN.svg" id="reCON">식단 재추천</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="diet_list_box1"><!-- vue를 최대한 활용 시킨 코드-->
            <div id="mealtime_box1">
                <div v-for="(meal, index) in meals1"
                :key="index" 
                @click="selectMealTime1(meal.id)"
                :class="{ 'mealTime1': true, 'selected': selectedMeal1 === meal.id }">{{ meal.name }}</div>
            </div>
            <div class="list_bd1">
                <div class="list_el1">
                    <div  v-for="(item, index) in selectedMealItems1" :key="index" id="el1"  @click="selectItem1(item)" :class="{ 'selected': selectedItem1 === item.name }">{{ item.name.length > 4 ? item.name.substring(0, 4) + '..' : item.name }}</div>
                </div>
                <div>
                    <div id="tot_zip1" v-show="!selectedItem1">
                    <div id="tot_text1">총 영양성분</div>
                    <hr id="second_line1">
                        <div id="el_name1">
                            <div v-for="(value, key) in totalNutrition1[0]" :key="key">
                            {{ key }}<br>({{ value.unit }})<br><p>{{ value.amount }}</p>
                            </div>
                        </div>
                    </div>
                    <div id="indi_zip1" v-show="selectedItem1">
                    <div id="indi_text1">{{ selectedItem1 }} 영양성분</div>
                    <hr id="second_line1">
                        <div id="el_name1">
                            <div v-for="(value, key) in selectedNutrition1" :key="key">
                            {{ key }}<br>({{ value.unit }})<br><p>{{ value.amount }}</p>
                            </div>
                        </div>
                    </div>
                    <div id="notice1">*식품을 누르면 각 식품별 영양성분을 확인하실 수 있습니다.</div>
                    <div id="two_btn1">
                        <div id="reason1" @click="openReson()"><img src="../style/img/otherBTN/reasonBTN.svg" id="reCON1">구성이유</div>
                        <div id="reroll1" @click="callDiffrentList2()"><img src="../style/img/otherBTN/rerollBTN.svg" id="reCON1">식단 재추천</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="diet_list_box2"><!-- vue를 최대한 활용 시킨 코드-->
            <div id="mealtime_box2">
                <div v-for="(meal, index) in meals2"
                :key="index" 
                @click="selectMealTime2(meal.id)"
                :class="{ 'mealTime2': true, 'selected': selectedMeal2 === meal.id }">{{ meal.name }}</div>
            </div>
            <div class="list_bd2">
                <div class="list_el2">
                    <div  v-for="(item, index) in selectedMealItems2" :key="index" id="el2"  @click="selectItem2(item)" :class="{ 'selected': selectedItem2 === item.name }">{{ item.name.length > 4 ? item.name.substring(0, 4) + '..' : item.name }}</div>
                </div>
                <div>
                    <div id="tot_zip2" v-show="!selectedItem2">
                    <div id="tot_text2">총 영양성분</div>
                    <hr id="second_line2">
                        <div id="el_name2">
                            <div v-for="(value, key) in totalNutrition2[0]" :key="key">
                            {{ key }}<br>({{ value.unit }})<br><p>{{ value.amount }}</p>
                            </div>
                        </div>
                    </div>
                    <div id="indi_zip2" v-show="selectedItem2">
                    <div id="indi_text2">{{ selectedItem2 }} 영양성분</div>
                    <hr id="second_line2">
                        <div id="el_name2">
                            <div v-for="(value, key) in selectedNutrition2" :key="key">
                            {{ key }}<br>({{ value.unit }})<br><p>{{ value.amount }}</p>
                            </div>
                        </div>
                    </div>
                    <div id="notice2">*식품을 누르면 각 식품별 영양성분을 확인하실 수 있습니다.</div>
                    <div id="two_btn2">
                        <div id="reason2" @click="openReson()"><img src="../style/img/otherBTN/reasonBTN.svg" id="reCON2">구성이유</div>
                        <div id="reroll2" @click="callDiffrentList3()"><img src="../style/img/otherBTN/rerollBTN.svg" id="reCON2">식단 재추천</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <foody-nav />
</template>

<script>
import axios from 'axios';
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';
import ResonPopUp from '@/components/ResonPopUp.vue';


export default {
    name: 'DietList',
    data() {
        return {
            openModal:false,
            meals: [
                { id: 'mor', name: '아침' },
                { id: 'lun', name: '점심' },
                { id: 'din', name: '저녁' }
            ],
            meals1: [
                { id: 'mor', name: '아침' },
                { id: 'lun', name: '점심' },
                { id: 'din', name: '저녁' }
            ],
            meals2: [
                { id: 'mor', name: '아침' },
                { id: 'lun', name: '점심' },
                { id: 'din', name: '저녁' }
            ],
            selectedMeal: 'mor',
            selectedMeal1: 'mor',
            selectedMeal2: 'mor',
            mealItems: {
                mor: [],
                lun: [],
                din: [],
            },
            mealItems1: {
                mor: [],
                lun: [],
                din: []
            },
            mealItems2: {
                mor: [],
                lun: [],
                din: []
            },
            foodCode:[],
            foodCode1:[],
            foodCode2:[],
            itemNutrition: {},
            itemNutrition1: {},
            itemNutrition2: {},
            totalNutrition:{},
            totalNutrition1:{},
            totalNutrition2:{},
            selectedItem: '',
            selectedItem1: '',
            selectedItem2: '',
            nowTimes:'',
            nextDay:'',
            dayAfterNext:'',
            user_id: this.$store.state.userId,
        };
    },
    methods: {
        getCurrentDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            this.nowTimes = `${year}-${month}-${day}`;
            // 다음날 계산
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + 1);
            const nextYear = nextDay.getFullYear();
            const nextMonth = String(nextDay.getMonth() + 1).padStart(2, '0');
            const nextDayOfMonth = String(nextDay.getDate()).padStart(2, '0');
            this.nextDay = `${nextYear}-${nextMonth}-${nextDayOfMonth}`;
            // 다다음날 계산
            const dayAfterNext = new Date(today);
            dayAfterNext.setDate(today.getDate() + 2);
            const dayAfterNextYear = dayAfterNext.getFullYear();
            const dayAfterNextMonth = String(dayAfterNext.getMonth() + 1).padStart(2, '0');
            const dayAfterNextDayOfMonth = String(dayAfterNext.getDate()).padStart(2, '0');
            this.dayAfterNext = `${dayAfterNextYear}-${dayAfterNextMonth}-${dayAfterNextDayOfMonth}`;
        },
        pullDietList(){
            const userIdx = this.user_id;
            const date = this.nowTimes;
            const occasion =  (this.selectedMeal === 'mor' ? '아침' : this.selectedMeal === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderRecommend/searchRmdMeal?',
        params: {
          userIdx,
          date,
          occasion,
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result);//"계정이 존재하지 않습니다."
            break;
          case '200': console.log(result);
                      this.mealItems[this.selectedMeal] = [];
                      this.mealItems[this.selectedMeal] = result.foodList;
                      this.foodCoded();
                      this.callNutrition();
            break;
          default:  console.log(result);//"아이디와 비밀번호를 입력해주세요."
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
        },
        foodCoded(){
            this.foodCode = this.mealItems[this.selectedMeal].map(item => item.foodIdx);
        },
        foodCoded1(){
            this.foodCode1 = this.mealItems1[this.selectedMeal1].map(item => item.foodIdx);
        },
        foodCoded2(){
            this.foodCode2 = this.mealItems2[this.selectedMeal2].map(item => item.foodIdx);
        },
        async callNutrition(){
            const params = this.foodCode;
            const resArray = [];
            let total_kcal = 0;
            let total_carbo = 0;
            let total_protein = 0;
            let total_fat=0;
            let total_chole=0;
            let total_salt=0;

            for (const param of params) {
            const res = await axios.get(`https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodnutri/getNutrition?foodIdx=${param}`);
            resArray.push({ '열량': { unit: 'kcal', amount: res.data.kcal }, '탄수화물': { unit: 'g', amount: res.data.carbo }, '단백질': { unit: 'g', amount: res.data.protein } , '지방': { unit: 'g', amount: res.data.fat }, '콜레스테롤': { unit: 'mg', amount: res.data.chole }, '나트륨': { unit: 'mg', amount: res.data.salt }});
            total_kcal +=res.data.kcal;
            total_carbo +=res.data.carbo;
            total_protein +=res.data.protein;
            total_fat +=res.data.fat;
            total_chole +=res.data.chole;
            total_salt +=res.data.salt;
            }
            console.log(resArray);
            this.itemNutrition = resArray;
            
            const totalArray = [{'열량' : {unit:'kcal', amount: total_kcal.toFixed(2)},'탄수화물' : {unit:'g', amount: total_carbo.toFixed(2)},'단백질' : {unit:'g', amount: total_protein.toFixed(2)},'지방' : {unit:'g', amount: total_fat.toFixed(2)},'콜레스테롤' : {unit:'mg', amount: total_chole.toFixed(2)},'나트륨' : {unit:'mg', amount: total_salt.toFixed(2)}}];
            console.log(totalArray);
            this.totalNutrition = totalArray;
        },
        async callNutrition1(){
            const params = this.foodCode1;
            const resArray = [];
            let total_kcal = 0;
            let total_carbo = 0;
            let total_protein = 0;
            let total_fat=0;
            let total_chole=0;
            let total_salt=0;

            for (const param of params) {
            const res = await axios.get(`https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodnutri/getNutrition?foodIdx=${param}`);
            resArray.push({ '열량': { unit: 'kcal', amount: res.data.kcal }, '탄수화물': { unit: 'g', amount: res.data.carbo }, '단백질': { unit: 'g', amount: res.data.protein } , '지방': { unit: 'g', amount: res.data.fat }, '콜레스테롤': { unit: 'mg', amount: res.data.chole }, '나트륨': { unit: 'mg', amount: res.data.salt }});
            total_kcal +=res.data.kcal;
            total_carbo +=res.data.carbo;
            total_protein +=res.data.protein;
            total_fat +=res.data.fat;
            total_chole +=res.data.chole;
            total_salt +=res.data.salt;
            }
            console.log(resArray);
            this.itemNutrition1 = resArray;
            
            const totalArray = [{'열량' : {unit:'kcal', amount: total_kcal.toFixed(2)},'탄수화물' : {unit:'g', amount: total_carbo.toFixed(2)},'단백질' : {unit:'g', amount: total_protein.toFixed(2)},'지방' : {unit:'g', amount: total_fat.toFixed(2)},'콜레스테롤' : {unit:'mg', amount: total_chole.toFixed(2)},'나트륨' : {unit:'mg', amount: total_salt.toFixed(2)}}];
            console.log(totalArray);
            this.totalNutrition1 = totalArray;
        },
        async callNutrition2(){
            const params = this.foodCode2;
            const resArray = [];
            let total_kcal = 0;
            let total_carbo = 0;
            let total_protein = 0;
            let total_fat=0;
            let total_chole=0;
            let total_salt=0;

            for (const param of params) {
            const res = await axios.get(`https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodnutri/getNutrition?foodIdx=${param}`);
            resArray.push({ '열량': { unit: 'kcal', amount: res.data.kcal }, '탄수화물': { unit: 'g', amount: res.data.carbo }, '단백질': { unit: 'g', amount: res.data.protein } , '지방': { unit: 'g', amount: res.data.fat }, '콜레스테롤': { unit: 'mg', amount: res.data.chole }, '나트륨': { unit: 'mg', amount: res.data.salt }});
            total_kcal +=res.data.kcal;
            total_carbo +=res.data.carbo;
            total_protein +=res.data.protein;
            total_fat +=res.data.fat;
            total_chole +=res.data.chole;
            total_salt +=res.data.salt;
            }
            console.log(resArray);
            this.itemNutrition2 = resArray;
            
            const totalArray = [{'열량' : {unit:'kcal', amount: total_kcal.toFixed(2)},'탄수화물' : {unit:'g', amount: total_carbo.toFixed(2)},'단백질' : {unit:'g', amount: total_protein.toFixed(2)},'지방' : {unit:'g', amount: total_fat.toFixed(2)},'콜레스테롤' : {unit:'mg', amount: total_chole.toFixed(2)},'나트륨' : {unit:'mg', amount: total_salt.toFixed(2)}}];
            console.log(totalArray);
            this.totalNutrition2 = totalArray;
        },   
        pullDietList1(){
            const userIdx = this.user_id;
            const date = this.nextDay;
            const occasion =  (this.selectedMeal1 === 'mor' ? '아침' : this.selectedMeal1 === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderRecommend/searchRmdMeal?',
        params: {
          userIdx,
          date,
          occasion,
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result);
            break;
          case '200': console.log(result);
                      this.mealItems1[this.selectedMeal1] = [];
                      this.mealItems1[this.selectedMeal1] = result.foodList;
                      this.foodCoded1();
                      this.callNutrition1();
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
        pullDietList2(){
            const userIdx = this.user_id;
            const date = this.dayAfterNext;
            const occasion =  (this.selectedMeal2 === 'mor' ? '아침' : this.selectedMeal2 === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderRecommend/searchRmdMeal?',
        params: {
          userIdx,
          date,
          occasion,
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result);
            break;
          case '200': console.log(result);
                      this.mealItems2[this.selectedMeal2] = [];
                      this.mealItems2[this.selectedMeal2] = result.foodList;
                      this.foodCoded2();
                      this.callNutrition2();
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
        callDiffrentList1(){
            const userIdx = this.user_id;
            const date = this.nowTimes;
            const occasion = (this.selectedMeal === 'mor' ? '아침' : this.selectedMeal === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodBuild/obtainRerolledMeal?',
        params: {
          userIdx,
          date,
          occasion,
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result, '조회된 식단이 없습니다');
            break;
          case '-2': console.log(result, '입력값이 잘못 되었습니다');
            break;
          case '200': console.log(result, '식단 재생성 성공!');
                    this.pullDietList();
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
        callDiffrentList2(){
            const userIdx = this.user_id;
            const date = this.nextDay;
            const occasion = (this.selectedMeal1 === 'mor' ? '아침' : this.selectedMeal1 === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodBuild/obtainRerolledMeal?',
        params: {
          userIdx,
          date,
          occasion,
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result, '조회된 식단이 없습니다');
            break;
          case '-2': console.log(result, '입력값이 잘못 되었습니다');
            break;
          case '200': console.log(result, '식단 재생성 성공!');
                    this.pullDietList1();
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
        callDiffrentList3(){
            const userIdx = this.user_id;
            const date = this.dayAfterNext;
            const occasion = (this.selectedMeal2 === 'mor' ? '아침' : this.selectedMeal2 === 'lun' ? '점심' : '저녁');
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodBuild/obtainRerolledMeal?',
        params: {
          userIdx,
          date,
          occasion,
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result, '조회된 식단이 없습니다');
            break;
          case '-2': console.log(result, '입력값이 잘못 되었습니다');
            break;
          case '200': console.log(result, '식단 재생성 성공!');
                    this.pullDietList2();
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
        selectMealTime(mealId) {
                this.selectedMeal = mealId;
                this.selectedItem = this.mealItems[mealId][0];
                this.selectedItem = null;
            },
        selectItem(item) {
                this.selectedItem = item.name;
            },    // ... (기존 메서드 내용 유지)
        selectMealTime1(mealId) {
                this.selectedMeal1 = mealId;
                this.selectedItem1 = this.mealItems1[mealId][0];
                this.selectedItem1 = null;
            },
        selectItem1(item) {
                this.selectedItem1 = item.name;
            },    // ... (기존 메서드 내용 유지)
        selectMealTime2(mealId) {
                this.selectedMeal2 = mealId;
                this.selectedItem2 = this.mealItems2[mealId][0];
                this.selectedItem2 = null;
            },
        selectItem2(item) {
                this.selectedItem2 = item.name;
            },    // ... (기존 메서드 내용 유지)
        openReson(){
            this.openModal = true;
        },
        close(){
            this.openModal = false;
        }
    },
    computed: {
        selectedMealItems() {
            return this.mealItems[this.selectedMeal];
        },
        selectedNutrition() {
            const targetValue = this.selectedItem;
            const searchLib = this.mealItems[this.selectedMeal];
            let targetIndex = -1;
            for (let i = 0; i < searchLib.length; i++) {
                if (searchLib[i].name === targetValue) {
                        targetIndex = i;
                    break;
                }
            }
            return this.itemNutrition[targetIndex];
        },
        selectedMealItems1() {
            return this.mealItems1[this.selectedMeal1];
        },
        selectedNutrition1() {
            const targetValue = this.selectedItem1;
            const searchLib = this.mealItems1[this.selectedMeal1];
            let targetIndex = -1;
            for (let i = 0; i < searchLib.length; i++) {
                if (searchLib[i].name === targetValue) {
                        targetIndex = i;
                    break;
                }
            }
            return this.itemNutrition1[targetIndex];
        },
        selectedMealItems2() {
            return this.mealItems2[this.selectedMeal2];
        },
        selectedNutrition2() {
            const targetValue = this.selectedItem2;
            const searchLib = this.mealItems2[this.selectedMeal2];
            let targetIndex = -1;
            for (let i = 0; i < searchLib.length; i++) {
                if (searchLib[i].name === targetValue) {
                        targetIndex = i;
                    break;
                }
            }
            return this.itemNutrition2[targetIndex];
        },
    },
    watch:{
        selectedMeal(newVal, oldVal){
            if(newVal != oldVal){
                this.pullDietList();
            }
        },
        selectedMeal1(newVal, oldVal){
            if(newVal != oldVal){
                this.pullDietList1();
            }
        },
        selectedMeal2(newVal, oldVal){
            if(newVal != oldVal){
                this.pullDietList2();
            }
        },
    },
    created() {
        // 페이지 진입 시 초기 선택 설정
        this.selectedMeal = 'mor'; // 기본값은 '아침'
        this.selectedItem = null; // 선택된 아이템 초기화
        this.getCurrentDate();
        this.pullDietList();
        this.pullDietList1();
        this.pullDietList2();
    },
    props: {
        msg: String
    },
    components: { FoodyHeader, FoodyNav, ResonPopUp, },

}
</script>

<style scoped>
.mainContents{
  box-sizing: border-box;
  padding-top: 15%;
  padding-bottom:25%;
  margin:0;
}

h3{
    color:#3F72AF;
    text-align: left;
    margin-left: 3%;
}

#frist_line{
    border: solid 0.4vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin: 3%
}

.container{
    overflow:scroll;
    height:80vh;
    padding-bottom:5%;
}

#mealtime_box{
    display: flex;
    justify-content: center;
    margin-top:4%;
}

.mealTime{
    font-weight: bold;
    box-sizing: border-box;
    position: relative;
    width: 26.5vw;
    height: 5vh;
    line-height: 5vh;
    border: 0.2px solid #3F72AF;
    border-radius: 14px 14px 0px 0px;
    background: #DBE2EF;
}
.timeClicked {
    color: #FFFFFF;
    background: #001335;
    border: 0.2px solid #001335;
}

.list_bd{
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: top;
    padding: 3%;
    box-sizing: border-box;
    position:relative; 
    width: 79.5vw;
    height: 30vh;
    background: #DBE2EF;
    border: 0.2px solid #3F72AF;
    border-radius: 0px 0px 14px 14px;
    margin:auto;
}

.list_el{
    display: flex;
    justify-content: center;
    gap:2%;
}
.list_el #el{
    font-size:0.65rem;
    width: 13.6vw;
    height: 2.5vh;
    overflow: hidden;
    background: #001335;
    border-radius: 4px;
    color: #FFFFFF;
}

#tot_text{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}
#indi_text{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}
#second_line{
    border: solid 0.25vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-top:0;
}

#el_name{
    font-size:0.65rem;
    font-weight: bold;
    display:flex;
    justify-content: center;
    gap:3%;
}

#notice{
    font-size:0.5rem;
    font-weight: bold;
    display:flex;
    justify-content:right;
    margin-top:3%;
}

#two_btn{
    display:flex;
    justify-content: center;
    margin-top:4%;
    gap:45%;
}
#reason{
    vertical-align: middle;
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
#reCON{
    vertical-align: middle;
    margin-right:3%;
    margin-bottom:5%;
}
#reroll{
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
.mealTime.selected {
    border: 0.2px solid #001335;
    background: #001335; /* 선택된 배경 색상으로 원하는 색상으로 변경하세요 */
    color: #fff; /* 선택된 텍스트 색상으로 원하는 색상으로 변경하세요 */
}

.list_el #el.selected {
    background-color: #3F72AF; /* 선택된 배경 색상으로 원하는 색상으로 변경하세요 */
    color: #000; /* 선택된 텍스트 색상으로 원하는 색상으로 변경하세요 */
}

#mealtime_box1{
    display: flex;
    justify-content: center;
    margin-top:4%;
}

.mealTime1{
    font-weight: bold;
    box-sizing: border-box;
    position: relative;
    width: 26.5vw;
    height: 5vh;
    line-height: 5vh;
    border: 0.2px solid #3F72AF;
    border-radius: 14px 14px 0px 0px;
    background: #DBE2EF;
}
.timeClicked {
    color: #FFFFFF;
    background: #001335;
    border: 0.2px solid #001335;
}

.list_bd1{
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: top;
    padding: 3%;
    box-sizing: border-box;
    position:relative; 
    width: 79.5vw;
    height: 30vh;
    background: #DBE2EF;
    border: 0.2px solid #3F72AF;
    border-radius: 0px 0px 14px 14px;
    margin:auto;
}

.list_el1{
    display: flex;
    justify-content: center;
    gap:2%;
}
.list_el1 #el1{
    font-size:0.65rem;
    width: 13.6vw;
    height: 2.5vh;
    overflow: hidden;
    background: #001335;
    border-radius: 4px;
    color: #FFFFFF;
}

#tot_text1{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}
#indi_text1{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}
#second_line1{
    border: solid 0.25vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-top:0;
}

#el_name1{
    font-size:0.65rem;
    font-weight: bold;
    display:flex;
    justify-content: center;
    gap:3%;
}

#notice1{
    font-size:0.5rem;
    font-weight: bold;
    display:flex;
    justify-content:right;
    margin-top:3%;
}

#two_btn1{
    display:flex;
    justify-content: center;
    margin-top:4%;
    gap:45%;
}
#reason1{
    vertical-align: middle;
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
#reCON1{
    vertical-align: middle;
    margin-right:3%;
    margin-bottom:5%;
}
#reroll1{
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
.mealTime1.selected {
    border: 0.2px solid #001335;
    background: #001335; /* 선택된 배경 색상으로 원하는 색상으로 변경하세요 */
    color: #fff; /* 선택된 텍스트 색상으로 원하는 색상으로 변경하세요 */
}

.list_el1 #el1.selected {
    background-color: #3F72AF; /* 선택된 배경 색상으로 원하는 색상으로 변경하세요 */
    color: #000; /* 선택된 텍스트 색상으로 원하는 색상으로 변경하세요 */
}

#mealtime_box2{
    display: flex;
    justify-content: center;
    margin-top:4%;
}

.mealTime2{
    font-weight: bold;
    box-sizing: border-box;
    position: relative;
    width: 26.5vw;
    height: 5vh;
    line-height: 5vh;
    border: 0.2px solid #3F72AF;
    border-radius: 14px 14px 0px 0px;
    background: #DBE2EF;
}
.timeClicked {
    color: #FFFFFF;
    background: #001335;
    border: 0.2px solid #001335;
}

.list_bd2{
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: top;
    padding: 3%;
    box-sizing: border-box;
    position:relative; 
    width: 79.5vw;
    height: 30vh;
    background: #DBE2EF;
    border: 0.2px solid #3F72AF;
    border-radius: 0px 0px 14px 14px;
    margin:auto;
}

.list_el2{
    display: flex;
    justify-content: center;
    gap:2%;
}
.list_el2 #el2{
    font-size:0.65rem;
    width: 13.6vw;
    height: 2.5vh;
    overflow: hidden;
    background: #001335;
    border-radius: 4px;
    color: #FFFFFF;
}

#tot_text2{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}
#indi_text2{
    color: #3F72AF;
    font-weight: bold;
    text-align: left;
    margin-top:4%;
}
#second_line2{
    border: solid 0.25vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-top:0;
}

#el_name2{
    font-size:0.65rem;
    font-weight: bold;
    display:flex;
    justify-content: center;
    gap:3%;
}

#notice2{
    font-size:0.5rem;
    font-weight: bold;
    display:flex;
    justify-content:right;
    margin-top:3%;
}

#two_btn2{
    display:flex;
    justify-content: center;
    margin-top:4%;
    gap:45%;
}
#reason2{
    vertical-align: middle;
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
#reCON2{
    vertical-align: middle;
    margin-right:3%;
    margin-bottom:5%;
}
#reroll2{
    color:#fff;
    font-size:0.6rem;
    font-weight: bold;
    width: 20vw;
    height: 2.5vh;
    line-height: 2.5vh;
    background: #3F72AF;
    border-radius: 4px;
}
.mealTime2.selected {
    border: 0.2px solid #001335;
    background: #001335; /* 선택된 배경 색상으로 원하는 색상으로 변경하세요 */
    color: #fff; /* 선택된 텍스트 색상으로 원하는 색상으로 변경하세요 */
}

.list_el2 #el2.selected {
    background-color: #3F72AF; /* 선택된 배경 색상으로 원하는 색상으로 변경하세요 */
    color: #000; /* 선택된 텍스트 색상으로 원하는 색상으로 변경하세요 */
}
</style>