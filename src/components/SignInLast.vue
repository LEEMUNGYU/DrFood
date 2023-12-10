<template>
  <FoodyHeader></FoodyHeader>
    <div id="checkInfo">
        <h3 id="checkInfoTitle">아래의 정보로 회원가입이 진행됩니다.</h3>
        <div id="checkInfoText">질환과 알레르기 정보는 회원 정보 페이지에서 수정할 수 있습니다.</div>
    </div>
    <div id="SignUserInfo" class="SignUserInfo">
        <div id="UserId">이메일: {{ $store.state.email }}</div>
        <div id="UserNick">닉네임: {{ $store.state.nickNm }}</div>
    </div>
    <div id="SignUserDA" class="SignUserDA">
        <h4 id="SignUserDAT">보유 질환</h4>
        <div id="UserDiseases">{{ $store.state.codeDise.map(item => '#' + item).join(' ') }}</div>
        <h4 id="SignUserDAT">보유 알레르기</h4>
        <div id="UserAllergy">{{ $store.state.codeAlle.map(item => '#' + item).join(' ') }}</div>
    </div>
    
    <div @click="SignComp()"  id="SignComp-btn" class="SignComp-btn">확인</div>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import axios from 'axios';

export default {
    name: 'SignInLast',
    data() {
        return {
            allco:[],
            diseco:[],
        };
    },
    components:{
        FoodyHeader,
    },
    methods:{
        switchingCode(){
            const dieseCode = [
                {name: '비만', code: 'obse'},
                {name: '고혈압', code: 'hybp'},
                {name: '당뇨', code: 'diab'},
                {name: '위염', code: 'gast'},
                ];
            for(let i = 0; i < this.$store.state.codeDise.length; i++) {
                for (let j = 0; j < dieseCode.length; j++) {
                    if (this.$store.state.codeDise[i] === dieseCode[j].name) {
                        this.diseco.push(dieseCode[j].code);
                    }
                }
            }
            this.setDiseco(this.diseco.toString());


            const allergyCode = [
                {name: '달걀', code: 'egg'},
                {name: '유제품', code: 'milk'},
                {name: '콩', code: 'bean'},
                {name: '메밀', code: 'buckwheat'},
                {name: '밀', code: 'wheat'},
                {name: '새우', code: 'shrimp'},
                {name: '게', code: 'crab'},
                {name: '땅콩', code: 'peanut'},
                {name: '호두', code: 'walnut'},
                {name: '잣', code: 'pinenut'},
                {name: '고등어', code: 'mackerel'},
                {name: '그&nbsp외&nbsp생선', code: 'fish'},
                {name: '전복', code: 'abalone'},
                {name: '굴', code: 'oyster'},
                {name: '조개', code: 'clam'},
                {name: '닭고기', code: 'chicken'},
                {name: '돼지고기', code: 'pig'},
                {name: '쇠고기', code: 'cow'},
                {name: '낙지', code: 'smalloctopus'},
                {name: '문어', code: 'octopus'},
                {name: '오징어', code: 'squid'},
                {name: '깨', code: 'sesame'},
                ];
            for(let i = 0; i < this.$store.state.codeAlle.length; i++) {
                for (let j = 0; j < allergyCode.length; j++) {
                    if (this.$store.state.codeAlle[i] === allergyCode[j].name) {
                        this.allco.push(allergyCode[j].code);
                    }
                }
            }
            this.setAllco(this.allco.toString());
        },
        SignComp(){
            const email = this.$store.state.email;
            const pwd = this.$store.state.pwd;
            const nickNm = this.$store.state.nickNm;
            const pwdq = this.$store.state.pwdq;
            const pwda = this.$store.state.pwda;
            const codeDise = this.$store.state.Allco;
            const codeAlle = this.$store.state.Diseco;
            
        // 서버로 데이터 전송
            axios.post('https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/join?email='+email+'&pwd='+pwd
                        +'&nickname='+nickNm+'&pwdq='+pwdq+'&pwda='+pwda+'&codeDise='+codeDise+'&codeAlle='+codeAlle)
            .then(res => {
                const goComp = () => this.$router.push({path:'/SignInComp'});
                const result = res.data;
            // 성공 시 작업
            switch(result){
                case '200': console.log(res.data);
                            goComp();
                            break;
                default : console.log(res.data);
                            break;
            }
            })
            .catch(err => {
                console.log('에러!!!');
                console.log(err);
            });
        }
    },
}
</script>

<style scoped>
#checkInfoTitle{
    text-align: center;
    margin:auto;
    font-size: 1.2rem;
    margin-top: 10%;
    margin-bottom: 1%;
}
#checkInfoText{
    text-align: center;
    color:#777;
    font-size:0.7rem;
}

#SignComp-btn{
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    margin: 0 auto;
    background-color: #dbe2ef;
    color: #3f72af;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: bold;
}
#SignUserInfo{
    display: flex;
    color: #3f72af;
    margin-top:10%;
    height: 15vh;
    width: 80vw;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #ccc;
    flex-direction: column;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    line-height: 2.0rem;
    margin-inline: auto;
    text-indent: 1rem;
}
#SignUserDAT{
    color: #3f72af;
    text-align: left;
    margin-left: 10%;
    margin-bottom: 1%;
}
#UserDiseases{
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
    text-indent: 1.2rem;
    text-align: left;
    margin-inline: auto;
}
#UserAllergy{
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
    text-indent: 1.2rem;
    text-align: left;
    margin-inline: auto;
}
</style>