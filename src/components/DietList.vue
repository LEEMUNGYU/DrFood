<template>
    <foody-header />
    <div class="mainContents">
    <div class="container">
    <h3>식단추천</h3>
    <hr id="frist_line">
        <div class="diet_list_box"><!-- vue를 최대한 활용 시킨 코드-->
            <div id="mealtime_box">
                <div v-for="(meal, index) in meals"
                :key="index" 
                @click="selectMealTime(meal.id)"
                :class="{ 'mealTime': true, 'selected': selectedMeal === meal.id }">{{ meal.name }}</div>
            </div>
            <div class="list_bd">
                <div class="list_el">
                    <div  v-for="(item, index) in selectedMealItems" :key="index" id="el"  @click="selectItem(item)" :class="{ 'selected': selectedItem === item }">{{ item }}</div>
                </div>
                <div>
                    <div id="tot_zip" v-show="!selectedItem">
                    <div id="tot_text">총 영양성분</div>
                    <hr id="second_line">
                        <div id="el_name">
                            <div v-for="(value, key) in totalNutrition" :key="key">
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
                        <div id="reason"><img src="../style/img/otherBTN/reasonBTN.svg" id="reCON">구성이유</div>
                        <div id="reroll"><img src="../style/img/otherBTN/rerollBTN.svg" id="reCON">식단 재추천</div>
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
                    <div  v-for="(item, index) in selectedMealItems1" :key="index" id="el1"  @click="selectItem1(item)" :class="{ 'selected': selectedItem1 === item }">{{ item }}</div>
                </div>
                <div>
                    <div id="tot_zip1" v-show="!selectedItem1">
                    <div id="tot_text1">총 영양성분</div>
                    <hr id="second_line1">
                        <div id="el_name1">
                            <div v-for="(value, key) in totalNutrition1" :key="key">
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
                        <div id="reason1"><img src="../style/img/otherBTN/reasonBTN.svg" id="reCON1">구성이유</div>
                        <div id="reroll1"><img src="../style/img/otherBTN/rerollBTN.svg" id="reCON1">식단 재추천</div>
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
                    <div  v-for="(item, index) in selectedMealItems2" :key="index" id="el2"  @click="selectItem2(item)" :class="{ 'selected': selectedItem2 === item }">{{ item }}</div>
                </div>
                <div>
                    <div id="tot_zip2" v-show="!selectedItem2">
                    <div id="tot_text2">총 영양성분</div>
                    <hr id="second_line2">
                        <div id="el_name2">
                            <div v-for="(value, key) in totalNutrition2" :key="key">
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
                        <div id="reason2"><img src="../style/img/otherBTN/reasonBTN.svg" id="reCON2">구성이유</div>
                        <div id="reroll2"><img src="../style/img/otherBTN/rerollBTN.svg" id="reCON2">식단 재추천</div>
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


export default {
    name: 'DietList',
    data() {
        return {
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
                mor: this.$store.state.DietList[0],
                lun: this.$store.state.DietList[1],
                din: this.$store.state.DietList[2]
            },
            mealItems1: {
                mor: this.$store.state.DietList[3],
                lun: this.$store.state.DietList[4],
                din: this.$store.state.DietList[5]
            },
            mealItems2: {
                mor: this.$store.state.DietList[6],
                lun: this.$store.state.DietList[7],
                din: this.$store.state.DietList[8]
            },
            itemNutrition: {
                'm아이템 1': { '열량': { unit: 'kcal', amount: '100' }, '탄수화물': { unit: 'g', amount: '20' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 2': { '열량': { unit: 'kcal', amount: '150' }, '탄수화물': { unit: 'g', amount: '25' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 3': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 4': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '23' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 5': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '21' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                // 이하 각 아이템에 대한 영양 성분을 추가하십시오.
            },
            itemNutrition1: {
                'm아이템 1': { '열량': { unit: 'kcal', amount: '100' }, '탄수화물': { unit: 'g', amount: '20' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 2': { '열량': { unit: 'kcal', amount: '150' }, '탄수화물': { unit: 'g', amount: '25' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 3': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 4': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '23' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 5': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '21' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                // 이하 각 아이템에 대한 영양 성분을 추가하십시오.
            },
            itemNutrition2: {
                'm아이템 1': { '열량': { unit: 'kcal', amount: '100' }, '탄수화물': { unit: 'g', amount: '20' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 2': { '열량': { unit: 'kcal', amount: '150' }, '탄수화물': { unit: 'g', amount: '25' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 3': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 4': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '23' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 5': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '21' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                // 이하 각 아이템에 대한 영양 성분을 추가하십시오.
            },
            selectedItem: '아침 아이템 1',
            selectedItem1: '아침 아이템 1',
            selectedItem2: '아침 아이템 1',
        };
    },
    methods: {
        pullDietList(){
            const email = this.user_id;
            const pwd = this.user_pw;
        axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/login?',
        params: {
          email,
          pwd
        }
        })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result);//"계정이 존재하지 않습니다."
            break;
          case '-2': console.log(result);//"비밀번호가 틀렸습니다."
            break;
          case '200': console.log(result);
                      this.$store.commit('setDietList', result.user_idx);
                      this.$store.commit('setNutri', result.user_idx);
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
        selectMealTime(mealId) {
                this.selectedMeal = mealId;
                this.selectedItem = this.mealItems[mealId][0];
                this.selectedItem = null;
            },
        selectItem(item) {
                this.selectedItem = item;
            },    // ... (기존 메서드 내용 유지)
        selectMealTime1(mealId) {
                this.selectedMeal1 = mealId;
                this.selectedItem1 = this.mealItems1[mealId][0];
                this.selectedItem1 = null;
            },
        selectItem1(item) {
                this.selectedItem1 = item;
            },    // ... (기존 메서드 내용 유지)
        selectMealTime2(mealId) {
                this.selectedMeal2 = mealId;
                this.selectedItem2 = this.mealItems2[mealId][0];
                this.selectedItem2 = null;
            },
        selectItem2(item) {
                this.selectedItem2 = item;
            },    // ... (기존 메서드 내용 유지)
    },
    computed: {
        selectedMealItems() {
            return this.mealItems[this.selectedMeal];
        },
        selectedNutrition() {
            return this.itemNutrition[this.selectedItem];
        },
        totalNutrition() {
            const total = {};
            for (const item in this.selectedMealItems) {
                const nutrition = this.itemNutrition[this.selectedMealItems[item]];
                for (const nutrient in nutrition) {
                    if (!total[nutrient]) {
                        total[nutrient] = { unit: nutrition[nutrient].unit, amount: 0 };
                    }
                    total[nutrient].amount += parseInt(nutrition[nutrient].amount);
                }
            }
            return total;
        },
        
        selectedMealItems1() {
            return this.mealItems1[this.selectedMeal1];
        },
        selectedNutrition1() {
            return this.itemNutrition1[this.selectedItem1];
        },
        totalNutrition1() {
            const total = {};
            for (const item in this.selectedMealItems1) {
                const nutrition = this.itemNutrition1[this.selectedMealItems1[item]];
                for (const nutrient in nutrition) {
                    if (!total[nutrient]) {
                        total[nutrient] = { unit: nutrition[nutrient].unit, amount: 0 };
                    }
                    total[nutrient].amount += parseInt(nutrition[nutrient].amount);
                }
            }
            return total;
        },
        
        selectedMealItems2() {
            return this.mealItems2[this.selectedMeal2];
        },
        selectedNutrition2() {
            return this.itemNutrition2[this.selectedItem2];
        },
        totalNutrition2() {
            const total = {};
            for (const item in this.selectedMealItems2) {
                const nutrition = this.itemNutrition2[this.selectedMealItems2[item]];
                for (const nutrient in nutrition) {
                    if (!total[nutrient]) {
                        total[nutrient] = { unit: nutrition[nutrient].unit, amount: 0 };
                    }
                    total[nutrient].amount += parseInt(nutrition[nutrient].amount);
                }
            }
            return total;
        },
    },
    created() {
        // 페이지 진입 시 초기 선택 설정
        this.selectedMeal = 'mor'; // 기본값은 '아침'
        this.selectedItem = null; // 선택된 아이템 초기화
    },
    props: {
        msg: String
    },
    components: { FoodyHeader, FoodyNav, },

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
    gap:4%;
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
    gap:4%;
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
    gap:4%;
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