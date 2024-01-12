<template>
<foody-header></foody-header>
<div class="mainContents">
<div id="allergyContainer">
    <h3>보유 알레르기 수정</h3><hr id="first_line">
    <p id="selectedAllergies">{{ selectedAllergies.map(item => '#' + item).join(' ') }}</p>
    <br>
    <div id="Allergy-container">
        <div id="egg" :class="{ 'selected': selectedAllergies.includes('달걀') }" class="allergy-btn"  @click="addSelectedAllergy('달걀')">달걀</div>
        <div id="milk" :class="{ 'selected': selectedAllergies.includes('유제품') }" class="allergy-btn" @click="addSelectedAllergy('유제품')">유제품</div>
        <div id="bean" :class="{ 'selected': selectedAllergies.includes('콩') }" class="allergy-btn" @click="addSelectedAllergy('콩')">콩</div>
        <div id="buckwheat" :class="{ 'selected': selectedAllergies.includes('메밀') }" class="allergy-btn" @click="addSelectedAllergy('메밀')">메밀</div>
        <div id="wheat" :class="{ 'selected': selectedAllergies.includes('밀') }" class="allergy-btn" @click="addSelectedAllergy('밀')">밀</div>
        <div id="shrimp" :class="{ 'selected': selectedAllergies.includes('새우') }" class="allergy-btn" @click="addSelectedAllergy('새우')">새우</div>
        <div id="crab" :class="{ 'selected': selectedAllergies.includes('게') }" class="allergy-btn" @click="addSelectedAllergy('게')">게</div>
        <div id="peanut" :class="{ 'selected': selectedAllergies.includes('땅콩') }" class="allergy-btn" @click="addSelectedAllergy('땅콩')">땅콩</div>
        <div id="walnut" :class="{ 'selected': selectedAllergies.includes('호두') }" class="allergy-btn" @click="addSelectedAllergy('호두')">호두</div>
        <div id="pinenut" :class="{ 'selected': selectedAllergies.includes('잣') }" class="allergy-btn" @click="addSelectedAllergy('잣')">잣</div>
        <div id="mackerel" :class="{ 'selected': selectedAllergies.includes('고등어') }" class="allergy-btn" @click="addSelectedAllergy('고등어')">고등어</div>
        <div id="fish" :class="{ 'selected': selectedAllergies.includes('그&nbsp외&nbsp생선') }" class="allergy-btn" @click="addSelectedAllergy('그&nbsp외&nbsp생선')">그 외 생선</div>
        <div id="abalone"  :class="{ 'selected': selectedAllergies.includes('전복') }"  class="allergy-btn" @click="addSelectedAllergy('전복')">전복</div>
        <div id="oyster" :class="{ 'selected': selectedAllergies.includes('굴') }" class="allergy-btn" @click="addSelectedAllergy('굴')">굴</div>
        <div id="clam" :class="{ 'selected': selectedAllergies.includes('조개') }" class="allergy-btn" @click="addSelectedAllergy('조개')">조개</div>
        <div id="chicken" :class="{ 'selected': selectedAllergies.includes('닭고기') }" class="allergy-btn" @click="addSelectedAllergy('닭고기')">닭고기</div>
        <div id="pig" :class="{ 'selected': selectedAllergies.includes('돼지고기') }" class="allergy-btn" @click="addSelectedAllergy('돼지고기')">돼지고기</div>
        <div id="cow" :class="{ 'selected': selectedAllergies.includes('쇠고기') }" class="allergy-btn" @click="addSelectedAllergy('쇠고기')">쇠고기</div>
        <div id="smalloctopus" :class="{ 'selected': selectedAllergies.includes('낙지') }" class="allergy-btn" @click="addSelectedAllergy('낙지')">낙지</div>
        <div id="octopus" :class="{ 'selected': selectedAllergies.includes('문어') }" class="allergy-btn" @click="addSelectedAllergy('문어')">문어</div>
        <div id="squid" :class="{ 'selected': selectedAllergies.includes('오징어') }" class="allergy-btn" @click="addSelectedAllergy('오징어')">오징어</div>
        <div id="sesame" :class="{ 'selected': selectedAllergies.includes('깨') }" class="allergy-btn" @click="addSelectedAllergy('깨')">깨</div>
    </div>
    <div class="compBTN" @click="pushChangeAllergy()">완료</div>
</div>
</div>
<foody-nav />

</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';
import axios from 'axios';

export default {
    name:'ChangeAllergy',
    components: { FoodyHeader, FoodyNav,},
    data(){
    return{
        userIdx: this.$store.state.userId,
        selectedAllergies: [],
        allergiesSelected: false,
        codeAlle: this.$store.state.codeAlle,
        selectedAllergieCodes:[],
        }
    },
    methods:{
        updateSelectedAllergies() {
                const selectedAllergiesElement = document.getElementById('selectedAllergies');
                if (this.selectedAllergies.length > 0) {
                // 배열이 비어있지 않으면 '#'을 포함하여 문자열로 변환
                    selectedAllergiesElement.textContent = '#' + this.selectedAllergies.join(' #');
                } else {
                // 배열이 비어있으면 빈 문자열로 설정
                    selectedAllergiesElement.textContent = '';
                }
        },
        addSelectedAllergy(Allergies){
                if (!this.allergiesSelected) {
                    if (!this.selectedAllergies.includes(Allergies)) {
                        this.selectedAllergies.push(Allergies);
                    }else {
                    // 이미 선택된 질환인 경우 배열에서 제거
                        const index = this.selectedAllergies.indexOf(Allergies);
                        if (index !== -1) {
                            this.selectedAllergies.splice(index, 1);
                        }
                    }
                this.updateSelectedAllergies();
                }
      //질환에 대한 코드를 추가
      let AllergieCode = '';
      switch (Allergies) {
        case '달걀':
            AllergieCode = 'egg';
          break;
        case '유제품':
            AllergieCode = 'dairy';
          break;
        case '콩':
            AllergieCode = 'bean';
          break;
        case '메밀':
            AllergieCode = 'buck';
          break;
        case '밀':
            AllergieCode = 'flour';
          break;
        case '새우':
            AllergieCode = 'shrimp';
          break;
        case '게':
            AllergieCode = 'crab';
          break;
        case '땅콩':
            AllergieCode = 'peanut';
          break;
        case '호두':
            AllergieCode = 'walnut';
          break;
        case '잣':
            AllergieCode = 'pinnut';
          break;
        case '고등어':
            AllergieCode = 'macke';
          break;
        case '생선':
            AllergieCode = 'fish';
          break;
        case '전복':
            AllergieCode = 'abal';
          break;
        case '굴':
            AllergieCode = 'oyster';
          break;
        case '조개':
            AllergieCode = 'clam';
          break;
        case '닭':
            AllergieCode = 'chick';
          break;
        case '돼지':
            AllergieCode = 'pork';
          break;
        case '소':
            AllergieCode = 'beef';
          break;
        case '낙지':
            AllergieCode = 'kocto';
          break;
        case '문어':
            AllergieCode = 'octo';
          break;
        case '오징어':
            AllergieCode = 'squid';
          break;
        case '깨':
            AllergieCode = 'sesame';
          break;
        default:
          break;
      }
      // 질환 코드를 새로운 배열에 추가
      this.selectedAllergieCodes.push(AllergieCode);   
        },
        pushChangeAllergy(){
            const userIdx = this.userIdx;
            const code = this.selectedAllergieCodes.join('#');
      
            axios({
                method: 'post',
                url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/allergiechange?',
                params: {
                    userIdx,
                    code,
                }
                })
                .then((res) => {
                    const result = res.data;
                    switch(result.rst_cd){
                    case '200': console.log(result);
                            this.$store.commit('setCodeAlle', result.foodName);
                            this.$router.push({path: '/change', name:'ChangeInfo'});
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
    getNewAllergie(){
        const idx = this.userIdx;
      axios({
        method: 'get',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/showmedicalstats?',
        params: {
          idx,
        }
        })
        .then((res) => {
            const result = res.data;
            switch(result.rst_cd){
              case '200': console.log(result);
                          this.$store.commit('setAllergie', result.allergie);
                          this.$router.push({path: '/change', name:'ChangeInfo'});
                          break;
              default: console.log(result);
                        break;
             }
        }) 
        .catch(err => {
            console.log('에러!!!');
            console.log(err);
        })

    }
    },
    distroyed(){
        this.getNewAllergie();
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
h3 {
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

p {
    box-sizing:border-box;
    width: 80vw;
    height: 5vh;
    line-height: 5vh;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #ccc;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.2rem;
    color: #3f72af;
    text-align: center;
    margin-left: 3%;
    margin-inline: auto;
}


#Allergy-container {
    overflow: scroll;
    display: flex;
    height: 30vh;
    width: 80vw;
    padding: auto;
    background-color: white;
    border: 1px solid none;
    border-radius: 5px;
    box-shadow: inset 3px 3px 3px #ccc;
    flex-direction: row;
    font-size: 1.3rem;
    font-weight: bold;
    margin-inline: auto;
    flex-wrap: wrap;
    justify-content: space-around;
}


.compBTN{
    justify-content: center;
    width:25vw;
    height:5vh;
    line-height: 5vh;
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 1.2em;
    font-weight:bold;
    border: 1px solid #001335;
    margin-top:2%;
    margin: auto;
    border-radius: 5px;
    text-align: center;
}
.allergy-btn{
    width: 15vh;
    height: 5vh;
    line-height: 5vh;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 2px #ccc;
    border-radius: 5px;
    margin: 2%;
    text-align: center;
    align-content: center;
}

#egg.selected{
    color:#fff;
    background: #3F72AF;
}
#milk.selected{
    color:#fff;
    background: #3F72AF;
}
#bean.selected{
    color:#fff;
    background: #3F72AF;
}
#buckwheat.selected{
    color:#fff;
    background: #3F72AF;
}
#wheat.selected{
    color:#fff;
    background: #3F72AF;
}
#shrimp.selected{
    color:#fff;
    background: #3F72AF;
}
#crab.selected{
    color:#fff;
    background: #3F72AF;
}
#peanut.selected{
    color:#fff;
    background: #3F72AF;
}
#walnut.selected{
    color:#fff;
    background: #3F72AF;
}
#pinenut.selected{
    color:#fff;
    background: #3F72AF;
}
#mackerel.selected{
    color:#fff;
    background: #3F72AF;
}
#fish.selected{
    color:#fff;
    background: #3F72AF;
}
#abalone.selected{
    color:#fff;
    background: #3F72AF;
}
#oyster.selected{
    color:#fff;
    background: #3F72AF;
}
#clam.selected{
    color:#fff;
    background: #3F72AF;
}
#chicken.selected{
    color:#fff;
    background: #3F72AF;
}
#pig.selected{
    color:#fff;
    background: #3F72AF;
}
#cow.selected{
    color:#fff;
    background: #3F72AF;
}
#smalloctopus.selected{
    color:#fff;
    background: #3F72AF;
}
#octopus.selected{
    color:#fff;
    background: #3F72AF;
}
#squid.selected{
    color:#fff;
    background: #3F72AF;
}
#sesame.selected{
    color:#fff;
    background: #3F72AF;
}
#egg{
    color:#FF8B49;
    background: #fff;
}
#milk{
    color:#02601C;
    background: #fff;
}
#bean{
    color:#000000;
    background: #fff;
}
#buckwheat{
    color:#722A01;
    background: #fff;
}
#wheat{
    color:#BC9300;
    background: #fff;
}
#shrimp{
    color:#FF5454;
    background: #fff;
}
#crab{
    color:#C60000;
}
#peanut{
    color:#AC6F28;
}
#walnut{
    color:#AB501D;
}
#pinenut{
    color:#CD916F;
}
#mackerel{
    color:#475985;
}
#fish{
    color:#2E9CDB;
}
#abalone{
    color:#52B96F;
}
#oyster{
    color:#7D7977;
}
#clam{
    color:#FFB68C;
}
#chicken{
    color:#FF9393;
}
#pig{
    color:#FF5C00;
}
#cow{
    color:#FF0202;
}
#smalloctopus{
    color:#E649FF;
}
#octopus{
    color:#AD0087;
}
#squid{
    color:#AE7CFF;
}
#sesame{
    color:#C57123;
}
</style>