<template>
    <FoodyHeader link='FoodyHeader.vue' />
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
        
    </div>
    <FoodyNav link='FoodyNav.vue' />
</template>

<script>
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
            selectedMeal: 'mor',
            mealItems: {
                mor: ['m아이템 1', 'm아이템 2', 'm아이템 3', 'm아이템 4', 'm아이템 5'],
                lun: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5'],
                din: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
            },
            itemNutrition: {
                'm아이템 1': { '열량': { unit: 'kcal', amount: '100' }, '탄수화물': { unit: 'g', amount: '20' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 2': { '열량': { unit: 'kcal', amount: '150' }, '탄수화물': { unit: 'g', amount: '25' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 3': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 4': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '23' }, '단백질': { unit: 'g', amount: '20' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                'm아이템 5': { '열량': { unit: 'kcal', amount: '120' }, '탄수화물': { unit: 'g', amount: '22' }, '단백질': { unit: 'g', amount: '21' } , '지방': { unit: 'g', amount: '20' }, '콜레스테롤': { unit: 'mg', amount: '20' }, '나트륨': { unit: 'mg', amount: '20' } },
                // 이하 각 아이템에 대한 영양 성분을 추가하십시오.
            },
            selectedItem: '아침 아이템 1',
        };
    },
    methods: {
        selectMealTime(mealId) {
                this.selectedMeal = mealId;
                this.selectedItem = this.mealItems[mealId][0];
                this.selectedItem = null;
            },
        selectItem(item) {
                this.selectedItem = item;
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

<style>

h3{
    text-align: left;
    margin-left: 3%;
    margin-top: 8%;
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
    width:100vw;
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
</style>