<template>
  <FoodyHeader />
  <div class="mainContents">
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
</div>
    <div @click="SingInComp()"  id="SignComp-btn" class="SignComp-btn">확인</div>
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
            signInCount: this.$store.state.signInCount,
        };
    },
    components:{
        FoodyHeader,
    },
    mounted(){
        this.switchingCode();
        console.log(this.$store.state.Diseco);
        console.log(this.$store.state.Allco);
    },
    methods:{
        switchingCode(){
            const dieseCode = [
                {name: '비만', code: 'obes'},
                {name: '고혈압', code: 'hibp'},
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
            this.$store.commit( 'setDiseco', this.diseco.join('#'));


            const allergyCode = [
                {name: '달걀', code: 'egg'},
                {name: '유제품', code: 'dairy'},
                {name: '콩', code: 'bean'},
                {name: '메밀', code: 'buck'},
                {name: '밀', code: 'flour'},
                {name: '새우', code: 'shrimp'},
                {name: '게', code: 'crab'},
                {name: '땅콩', code: 'peanut'},
                {name: '호두', code: 'walnut'},
                {name: '잣', code: 'pinnut'},
                {name: '고등어', code: 'macke'},
                {name: '그&nbsp외&nbsp생선', code: 'fish'},
                {name: '전복', code: 'abal'},
                {name: '굴', code: 'oyster'},
                {name: '조개', code: 'clam'},
                {name: '닭고기', code: 'chick'},
                {name: '돼지고기', code: 'pork'},
                {name: '쇠고기', code: 'beef'},
                {name: '낙지', code: 'kocto'},
                {name: '문어', code: 'octo'},
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
            this.$store.commit( 'setAllco', this.allco.join('#'));
        },
        SingInComp(){
            if(this.signInCount === 1){
                this.$store.commit('setSignInCount', 0);
                this.SignComp();
            }
        },
        SignComp(){
            const email = this.$store.state.email;
            const pwd = this.$store.state.pwd;
            const nickname = this.$store.state.nickNm;
            const pwdq = this.$store.state.pwdq;
            const pwda = this.$store.state.pwda;
            const codeDise = this.$store.state.Diseco;
            const codeAlle = this.$store.state.Allco;
            
        // 서버로 데이터 전송
            axios({
                method: 'post',
                url:'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/join?',
                params: {
                email,
                pwd,
                nickname,
                pwdq,
                pwda,
                codeDise,
                codeAlle,
                }})
            .then((res) => {
                const result = res.data;
                const goToDrFoody = this.$router.push({ name: 'SignInComp', path:'/SignInComp'});
            // 성공 시 작업
            switch(result){
                case '200': console.log(res.data);
                            goToDrFoody;
                            break;
                case '-1': console.log(res.data);
                            this.$store.commit('setSignInCount', 1);
                            break;
                default : console.log(res.data);
                            break;
            }
            })
            .catch(err => {
                console.log('에러!!!');
                console.log(err);
            })
        },
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
    display: flex;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    justify-content: center;
    height: 8vh;
    width: 100vw;
    overflow:hidden;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 1.8rem;
    font-weight: bold;
    border: none;
    text-decoration: none;
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