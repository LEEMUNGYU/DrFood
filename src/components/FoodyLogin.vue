<template>
<foody-header />
  <h2>반갑습니다</h2>
<p class="p">Dr.Food 서비스를 이용하기 위해서는<br> 로그인이 필요합니다.</p>
<br><br>
  <main>
    <form @submit.prevent="fnLogin" method="get"><!--로그인 정보 DB 입력??-->
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input type="text" class="form-control" placeholder="아이디" aria-label="아이디" aria-describedby="basic-addon1" v-model="user_id">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input type="password" class="form-control" placeholder="비밀번호" aria-label="비밀번호"
          aria-describedby="basic-addon1" v-model="user_pw">
      </div>
    </form>
  </main>

  <label for="autologin"><input type="checkbox" id="autologin">자동 로그인</label>
  <router-link v-bind:to="'/SignInUser'" class="alink">회원가입</router-link><!--회원가입 주소 href에 입력-->
  <router-link v-bind:to="'/changePW'" class="alink">비밀번호 찾기</router-link><!--아이디 찾기 주소 href에 입력-->
  <button type="submit" class="btn" id="loginGo" v-on:click="fnLogin()">로그인</button>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';
import axios from 'axios';


export default {
  name: 'FoodyLogin',
  data() {
    return {
      user_id: '',
      user_pw: '',
    } 
  },
    props: {
    msg: String,
  },
  methods: {
    fnLogin() {
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
      const goMain = () => this.$router.push({path:'/board', name:'DashBoard',});
      const result = res.data;
            
        // 4. 로그인이 성공하면 다른 페이지로 이동한다.
        switch(result.rst_cd){
          case '-1': console.log(result);//"계정이 존재하지 않습니다."
            break;
          case '-2': console.log(result);//"비밀번호가 틀렸습니다."
            break;
          case '200': console.log(result);
                      this.$store.commit('setUserEmail', email);
                      this.$store.commit('setUserIdx', result.user_idx);
                      this.$store.commit('setUserName', result.nickNm);
                      this.$store.commit('setDiseaseNm', result.diseaseNm)
                      this.$store.commit('setAllergieList', result.allergieList);
                      goMain();
            break;
          default:  console.log(result);//"아이디와 비밀번호를 입력해주세요."
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
          }
    },
    components:{
      FoodyHeader,
    },
 } 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template{
    margin: 0;
    padding: 0; 
}

h2 {
    /*반갑습니다*/
    text-align: center;
    color: #001335;
    height: 40px;
    gap:calc(100vh-30px);
    justify-content: space-between;
}

p {
    /*Dr.Food 서비스를...*/
    font-size: 17px;
    color: #001335;
    text-align: center;
    font-weight: 550;
    justify-content: space-between;
}
a{
  color:#3f72af;
  text-decoration : none;
}


form {
    width: 100vw;
    margin: auto;
}

input[type="text"] {
    /*아이디*/
    box-sizing:border-box;
    width: 70vw;
    padding: 10px;
    border: 1px solid #3f72af;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
}

input[type="password"] {
    /*비밀번호*/
    box-sizing:border-box;
    width: 70vw;
    padding: 10px;
    border: 1px solid #3f72af;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
    margin-top: 5px;
}

input[id="autologin"] {
    /*체크박스*/
    margin-block: auto;
}

label { /*자동 로그인 글자*/
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
    color: #3F72AF;
}

table { /*회원가입, 아이디 찾기*/
    margin-left: auto;
    margin-right: auto;
    color: #3F72AF;
}

.alink { /*회원가입, 아이디 찾기*/
    color: #3F72AF;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 10%;
    text-decoration: none;
}
.btn{
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    height: 11%;
    background-color: #dbe2ef;
    color: #3F72AF;
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;
    border: none;
  }
</style>
