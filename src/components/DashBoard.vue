<template>
  <FoodyHeader />
<div class="mainContents">
  <h2>{{ $store.state.nickNm }}님의 건강정보</h2>
  <div class="box_zip">
    <div id="n_box">질환</div>
    <div id="i_box">{{ $store.state.diseaseNm }}</div>
  </div>
  <div class="box_zip">
    <div id="n_box">알레르기</div>
    <div id="i_box">{{ $store.state.allergieList.join('') }}</div>
  </div>
  <div class="dash_contents">
    <div id="diet_icon"><img src="../style/img/Menu/ListOffBTN.svg" id="imgList"></div>
    <div id="dash_diet">
      <div>{{ currentDate }}</div>
      <div>추천식단</div>
    </div>
  </div>
  <div class="dash_dietList">
    <div id="mealTime">{{ mealTime }}</div>
    <div id="todayList" v-for="(item, index) in food" :key="index">{{ item }}</div>
  </div> 
</div>
  <FoodyNav />
</template>

<script>
import axios from 'axios';
import login from '@/components/FoodyLogin.vue';
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';

export default {
    name: "DashBoard",
    data() {
        return {
          email: this.$store.state.email,
          currentDate: '',
          mealTime: '',
          nickNm: '',
          allergieNm: '',
          nowTimes: '',
          food: this.$store.state.TodayList,
        }
    },
    mounted() {
    this.getCurrentDate();
    this.updateMealTime(); // 초기에 한 번 호출
    setInterval(() => {
      this.updateMealTime(); // 1초마다 갱신
    }, 1000);
    this.callTodayList();
    console.log(this.$store.state.diseaseNm);
    //this.createListWeek();
    },
    methods: {
    getCurrentDate() {
      const today = new Date();
      
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      this.currentDate = `${year}년 ${month}월 ${day}일`;
      this.nowTimes = `${year}-${month}-${day}`;
    },
    updateMealTime() {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const currentSecond = currentTime.getSeconds();

      if (currentHour >= 6 && currentHour <= 10 && currentMinute <= 59 && currentSecond <= 59) {
        this.mealTime = '아침';
      } else if (currentHour >= 11 && currentHour <= 16 && currentMinute <= 59 && currentSecond <= 59) {
        this.mealTime = '점심';
      } else if (currentHour >= 17 && currentHour <= 22 && currentMinute <= 59 && currentSecond <= 59) {
        this.mealTime = '저녁';
      } else {
        this.mealTime = '다른 시간대';
      }
    },
    getUser(){ 
      console.log(login.params.nickNm);
    },
    callTodayList(){
      /*const email = this.email;
      const date = this.nowTimes;
      const occasion = this.mealTime;*/
      const userIdx = this.$store.state.userId;
      
      axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/calenderRecommend/recommended?',
        params: {
          userIdx,
        }
        })
        .then((res) => {
            const result = res.data;
            switch(result.rst_cd){
              case '200': console.log(result);
                          this.$store.commit('setTodayList', result.foodList);
                          break;
              default: console.log(result);
                        break;
             }
        }) 
        .catch(err => {
            console.log('에러!!!');
            console.log(err);
        })
      },
      /*createListWeek(){
        const userIdx = this.$store.state.userId;
      
      axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/foodBuild/getWeeklyMeals?',
        params: {
          userIdx,
        }
        })
      },*/
    },
    props: {
        msg: String,
    },
    components: { FoodyHeader, FoodyNav },
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContents{
  box-sizing: border-box;
  padding-top: 15%;
  padding-bottom:12%;
  margin:0;
}
h2 {
  color: #023059;
  margin-bottom: 5%;
}
a {
  color: #3F72AF;
  text-decoration: none;
}

.dash_contents{
  color:#3F72AF;
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 5%;
  gap:5%
}
#diet_icon{
  justify-content: center;
  justify-items: center;
  text-align: center;
}
#dash_diet{
  font-weight: bold;
  justify-content: center;
  justify-items: center;
  text-align: center;
}

.box_zip{
  display: flex;
  justify-content: center;
  margin-top:2%;
}
#n_box{
  color:#3F72AF;
  justify-content: center;
  justify-items: center;
  width: 25vw;
  height: 5vh;
  line-height:5vh;
  background: #DBE2EF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px 0px 0px 5px;

}
#i_box{
  color:#3F72AF;
  font-weight: bold;
  justify-content: center;
  justify-items: center;
  width: 50vw;
  height: 5vh;
  line-height:5vh;
  background: #F0F0F0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 5px 5px 0px;
}

.dash_dietList{
  position: flex;
  justify-content: center;
  justify-items: center;
  width: 60vw;
  height: auto;
  min-height: 25vh;
  margin:auto;
  padding:2%;
  background: #DBE2EF;
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
}

#mealTime{
  color: #3F72AF;
  font-weight:  bolder;
  font-size: 1.5rem;
}

#todayList{
  color: #3F72AF;
  padding:1%;
  font-size: 1.1rem;
}
</style>
