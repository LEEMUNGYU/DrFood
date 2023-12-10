<template>
    <foody-header></foody-header>
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
    <foody-nav></foody-nav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import FoodyNav from '@/layout/FoodyNav.vue';


export default {
    name: 'ChangeDiseases',
    components: { FoodyHeader, FoodyNav,},
    data(){
    return{
        selectedDiseases: [],
        diseasesSelected: false,
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
        },
    },
}
</script>

<style scoped>

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