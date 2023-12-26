<template>
    <foody-header />
    <div class="mainContents">
    <h3>보유 질환 수정</h3><hr id="first_line">
    <p id="selectedDiseases"></p>
    </div>
    <div id="Disease-container">
        <div id="btn-Ob"  :class="{ 'selected': selectedDiseases.includes('비만') }"  class="DiseaseBtn" @click="addSelectedDisease('비만')">비만</div>
        <div id="btn-Hyper"  :class="{ 'selected': selectedDiseases.includes('고혈압') }"  class="DiseaseBtn" @click="addSelectedDisease('고혈압')">고혈압</div>
        <div id="btn-Dia"  :class="{ 'selected': selectedDiseases.includes('당뇨') }"  class="DiseaseBtn" @click="addSelectedDisease('당뇨')">당뇨</div>
        <div id="btn-Gas"  :class="{ 'selected': selectedDiseases.includes('위염') }"  class="DiseaseBtn" @click="addSelectedDisease('위염')">위염</div>
    </div>
    <div class="compBTN" @click="pushChangeDise()">완료</div>
    <foody-nav />
</template>

<script>
import axios from 'axios';
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';


export default {
    name: 'ChangeDiseases',
    components: { FoodyHeader, FoodyNav,},
    data(){
    return{
        userIdx: this.$store.state.userId,
        selectedDiseases: [],
        diseasesSelected: false,
        selectedDiseaseCodes: [],
        }   
    },
    methods:{
    updateSelectedDiseases() {
            const selectedDiseasesElement = document.getElementById('selectedDiseases');
            if (this.selectedDiseases.length > 0) {
            // 배열이 비어있지 않으면 '#'을 포함하여 문자열로 변환
                selectedDiseasesElement.textContent = '#' + this.selectedDiseases.join(' #');
            } else {
             // 배열이 비어있으면 빈 문자열로 설정
                selectedDiseasesElement.textContent = '';
            }
        },
    addSelectedDisease(disease){
            if (!this.diseasesSelected) {
                if (!this.selectedDiseases.includes(disease)) {
                    this.selectedDiseases.push(disease);
                }else {
                 // 이미 선택된 질환인 경우 배열에서 제거
                    const index = this.selectedDiseases.indexOf(disease);
                    if (index !== -1) {
                        this.selectedDiseases.splice(index, 1);
                    }
                }
            this.updateSelectedDiseases();
            }
      //질환에 대한 코드를 추가
      let diseaseCode = '';
      switch (disease) {
        case '비만':
          diseaseCode = 'obse';
          break;
        case '고혈압':
          diseaseCode = 'hibp';
          break;
        case '당뇨':
          diseaseCode = 'diab';
          break;
        case '위염':
          diseaseCode = 'gast';
          break;
        default:
          break;
      }
      // 질환 코드를 새로운 배열에 추가
      this.selectedDiseaseCodes.push(diseaseCode);
    },
    pushChangeDise(){
        const userIdx = this.userIdx;
        const code = this.selectedDiseaseCodes.join('#');
      
      axios({
        method: 'post',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/diseasechange?',
        params: {
          userIdx,
          code,
        }
        })
        .then((res) => {
            const result = res.data;
            switch(result.rst_cd){
              case '200': console.log(result);
                          this.$store.commit('setCodeDise', result.foodName);
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
    getNewDisease(){
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
                          this.$store.commit('setDiseaseNm', result.disease);
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
        this.getNewDisease();
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

#Disease-container {
    display: flex;
    height: 40vh;
    width: 80vw;
    padding: auto;
    background-color: white;
    border: 1px solid none;
    border-radius: 5px;
    box-shadow: inset 3px 3px 3px #ccc;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: bold;
    margin-inline: auto;
    flex-wrap: wrap;
    justify-content: space-around;
}
.DiseaseBtn{
    background: #fff;
    width: 15vh;
    height: 15vh;
    line-height: 8vh;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 2px #ccc;
    border-radius: 5px;
    margin: auto;
    text-align: center;
    align-content: center;
}
#btn-Ob{
    color:#FF8B49;
    background: #fff;
}
#btn-Hyper{
    color:#FF5454;
    background: #fff;
}
#btn-Dia{
    color:#9AB200;
    background: #fff;
}
#btn-Gas{
    color:#630707;
    background: #fff;
}
#btn-Ob.selected{
    color:#fff;
    background: #3F72AF;
}
#btn-Hyper.selected{
    color:#fff;
    background: #3F72AF;
}
#btn-Dia.selected{
    color:#fff;
    background: #3F72AF;
}
#btn-Gas.selected{
    color:#fff;
    background: #3F72AF;
}
</style>