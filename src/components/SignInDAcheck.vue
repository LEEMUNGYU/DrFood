<template>
    <FoodyHeader></FoodyHeader>
    <div class="main">
    <div>
        <h3>보유 질환</h3>
        <p id="selectedDiseases"></p>
    </div>
    <div id="Disease-container">
        <div id="btn-Ob"  :class="{ 'selected': selectedDiseases.includes('비만') }"  class="DiseaseBtn" @click="addSelectedDisease('비만')">비만</div>
        <div id="btn-Hyper"  :class="{ 'selected': selectedDiseases.includes('고혈압') }"  class="DiseaseBtn" @click="addSelectedDisease('고혈압')">고혈압</div>
        <div id="btn-Dia"  :class="{ 'selected': selectedDiseases.includes('당뇨') }"  class="DiseaseBtn" @click="addSelectedDisease('당뇨')">당뇨</div>
        <div id="btn-Gas"  :class="{ 'selected': selectedDiseases.includes('위염') }"  class="DiseaseBtn" @click="addSelectedDisease('위염')">위염</div>
    </div>
    <button id="completeBtn1" class="btn" style="display: none; text-align: center;" v-on:click="showAllergyContainer()">선택 완료</button>
    
    <div id="allergyContainer" style="display: none;">
    <h3>알레르기 선택</h3>
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
</div>
</div>
<footer id="footer"><router-link v-bind:to="'/SignLast'"  id="registerBtn" class="btn-signGo" style="display: none; text-align: center;">회원가입</router-link></footer>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import { mapMutations } from 'vuex';

export default {
    name:'checkDA',
    data(){
    return{
        selectedDiseases: [],
        diseasesSelected: false,
        selectedAllergies: [],
        allergiesSelected: false,
        }
    },
    components:{
        FoodyHeader
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
            this.setCodeDise(this.selectedDiseases);
        },
        addSelectedAllergy(allergy) {       
            const index = this.selectedAllergies.indexOf(allergy);
            if (index !== -1) {
                // 이미 선택된 알레르기인 경우 제거
                this.selectedAllergies.splice(index, 1);
            } else {
                // 선택되지 않은 경우 추가
                this.selectedAllergies.push(allergy);
            }
            this.setCodeAlle(this.selectedAllergies);
        },
        ...mapMutations(['setCodeDise', 'setCodeAlle']),
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