<template>
    <FoodyHeader></FoodyHeader>
    <div class="main">
    <div>
        <h3>보유 질환</h3>
        <p id="selectedDiseases"></p>
    </div>
    <div id="Disease-container">
        <div id="btn-Ob" class="DiseaseBtn" v-on:click="addSelectedDisease('비만')">비만</div>
        <div id="btn-Hyper" class="DiseaseBtn" v-on:click="addSelectedDisease('고혈압')">고혈압</div>
        <div id="btn-Dia" class="DiseaseBtn" v-on:click="addSelectedDisease('당뇨')">당뇨</div>
        <div id="btn-Gas" class="DiseaseBtn" v-on:click="addSelectedDisease('위염')">위염</div>
    </div>
    <button id="completeBtn1" class="btn" style="display: none; text-align: center;" v-on:click="showAllergyContainer()">선택 완료</button>
    
    <div id="allergyContainer" style="display: none;">
    <h3>알레르기 선택</h3>
    <p id="selectedAllergies"></p>
    <br>
    <div id="Allergy-container">
        <div id="egg" class="allergy-btn" v-on:click="addSelectedAllergy('달걀')">달걀</div>
        <div id="milk" class="allergy-btn" v-on:click="addSelectedAllergy('유제품')">유제품</div>
        <div id="bean" class="allergy-btn" v-on:click="addSelectedAllergy('콩')">콩</div>
        <div id="buckwheat" class="allergy-btn" v-on:click="addSelectedAllergy('메밀')">메밀</div>
        <div id="wheat" class="allergy-btn" v-on:click="addSelectedAllergy('밀')">밀</div>
        <div id="shrimp" class="allergy-btn" v-on:click="addSelectedAllergy('새우')">새우</div>
        <div id="crab" class="allergy-btn" v-on:click="addSelectedAllergy('게')">게</div>
        <div id="peanut" class="allergy-btn" v-on:click="addSelectedAllergy('땅콩')">땅콩</div>
        <div id="walnut" class="allergy-btn" v-on:click="addSelectedAllergy('호두')">호두</div>
        <div id="pinenut" class="allergy-btn" v-on:click="addSelectedAllergy('잣')">잣</div>
        <div id="mackerel" class="allergy-btn" v-on:click="addSelectedAllergy('고등어')">고등어</div>
        <div id="fish" class="allergy-btn" v-on:click="addSelectedAllergy('그 외 생선')">그 외 생선</div>
        <div id="abalone" class="allergy-btn" v-on:click="addSelectedAllergy('전복')">전복</div>
        <div id="oyster" class="allergy-btn" v-on:click="addSelectedAllergy('굴')">굴</div>
        <div id="clam" class="allergy-btn" v-on:click="addSelectedAllergy('조개')">조개</div>
        <div id="chicken" class="allergy-btn" v-on:click="addSelectedAllergy('닭고기')">닭고기</div>
        <div id="pig" class="allergy-btn" v-on:click="addSelectedAllergy('돼지고기')">돼지고기</div>
        <div id="cow" class="allergy-btn" v-on:click="addSelectedAllergy('쇠고기')">쇠고기</div>
        <div id="smalloctopus" class="allergy-btn" v-on:click="addSelectedAllergy('낙지')">낙지</div>
        <div id="octopus" class="allergy-btn" v-on:click="addSelectedAllergy('문어')">문어</div>
        <div id="squid" class="allergy-btn" v-on:click="addSelectedAllergy('오징어')">오징어</div>
        <div id="sesame" class="allergy-btn" v-on:click="addSelectedAllergy('깨')">깨</div>
    </div>
</div>
</div>
<footer id="footer"><router-link v-bind:to="'/SignLast'"  id="registerBtn" class="btn-signGo" style="display: none; text-align: center;">회원가입</router-link></footer>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
    name:'checkDA',
    data(){
    return{
        selectedDiseases: [],
        diseasesSelected: false,
    }
  },
  components:{
    FoodyHeader
  },
  methods:{
    updateSelectedDiseases() {
            const selectedDiseasesElement = document.getElementById('selectedDiseases');
            selectedDiseasesElement.textContent = '#'+ this.selectedDiseases.join(' #');
        },
    addSelectedDisease(disease){
            if (!this.diseasesSelected) {
                if (!this.selectedDiseases.includes(disease)) {
                    this.selectedDiseases.push(disease);
                }
            this.updateSelectedDiseases();
                // 질환 선택을 마치면 선택완료 버튼 블록
            const completeBtn = document.getElementById('completeBtn1');
            completeBtn.style.display = 'block';
            }
        },
    showAllergyContainer() {
            // 선택 완료 버튼을 클릭하면 알레르기 선택 창을 표시
            const allergyContainer = document.getElementById('allergyContainer');
            allergyContainer.style.display = 'block';

            // 질환 선택 완료되면 더 이상 수정할 수 없도록 플래그 설정
            this.diseasesSelected = true;

            // 선택 완료 버튼 비활성화
            const completeBtn = document.getElementById('completeBtn1');
            completeBtn.disabled = true;

            // 질병 선택 버튼들 비활성화
            document.getElementById('btn-Ob').disabled = true;
            document.getElementById('btn-Hyper').disabled = true;
            document.getElementById('btn-Dia').disabled = true;
            document.getElementById('btn-Gas').disabled = true;
            document.getElementById('Disease-container').style.display = 'none';
            // "회원가입하기" 버튼 표시
            const registerBtn = document.getElementById('registerBtn');
            registerBtn.style.display = 'block';
            const footer = document.getElementById('footer');
            footer.style.display = 'block';
        },
        addSelectedAllergy(allergy) {
            const selectedAllergiesElement = document.getElementById('selectedAllergies');
        // 현재 선택된 알레르기 목록을 가져오기
            let selectedAllergies = selectedAllergiesElement.textContent.split(' ');
        // 이미 선택된 알레르기인지 확인
        if (selectedAllergies.includes("#" + allergy)) {
            // 이미 선택된 알레르기를 배열에서 제거
            selectedAllergies = selectedAllergies.filter(item => item !== "#" + allergy);
            // 선택된 알레르기 업데이트
            selectedAllergiesElement.textContent = selectedAllergies.join(' ');
            } else {
            // 중복 확인 없이 추가
                if (selectedAllergiesElement.textContent === '#""') {
                    selectedAllergiesElement.textContent = '';
                }
            selectedAllergiesElement.textContent += "#" + allergy + " ";
            }
        },
    },
}
</script>

<style>
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h3 {
    color: #3F72AF;
    text-align: left;
    margin-left: 8%;
    margin-top: 8%;
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

form {
    width: 100%;
    margin: auto;
}

footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20vw;
    background-color: #dbe2ef;
    color: #3f72af;
    line-height: 20px;
    text-align: center;
    margin: 0 auto;
}

.btn {
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 1em;
    border: none;
    text-align: center;
}

/*버튼들*/
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
#btn-Ob{
    color:#630707;
    background: #fff;
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
.allergy-btn{
    background: #fff;
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
#egg{
    color:#FF8B49;
}
#milk{
    color:#02601C;
}
#bean{
    color:#000000;
}
#buckwheat{
    color:#722A01;
}
#wheat{
    color:#BC9300;
}
#shrimp{
    color:#FF5454;
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

footer{
    display: none;
    flex-direction: column; 
    justify-content: center;
    height: 8vh;
    position: relative;
    transform : translateY(0vh);
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100%;
    bottom: 0vh;
    margin-top:3%;
    padding-top: 2%;
    padding-bottom: 2%;
}
.btn-signGo{
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 30px;
    border: none;
    text-decoration: none;
}
</style>