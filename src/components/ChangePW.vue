<template><!--좀 더 진행-->
  <foody-header></foody-header>
  <main>
    <form>
      <div><select v-model="pw_question">
            <option selected>질문 유형 선택</option>
            <option value="1">본인의 어린시절 별명은?</option><!--인증질문 1-->
            <option value="2">본인의 어린시절 장래 희망은?</option><!--인증질문 2-->
            <option value="3">본인의 어린 시절에 존경 했던 인물은?</option><!--인증질문 3-->
            <!--추가 질문은 여기부터 추가하여 사용-->
      </select></div>
      <div>
        <input class="answer" placeholder="질문에 대한 답변" aria-label="기존 비밀번호" v-model="pw_answer">
      </div>
      <div class="changeForm">
      <div>
        <input type="password1" class="form-control" placeholder="변경할 비밀번호" aria-label="변경할 비밀번호"
          aria-describedby="basic-addon1" v-model="change_pw">
      </div>
          <p id="notice">*6~12자의 영문 대·소문자 및 숫자만 가능</p>
      <div>
        <input type="password" class="form-control" placeholder="변경할 비밀번호 확인" aria-label="비밀번호 확인"
          aria-describedby="basic-addon1" v-model="pw_check">
      </div>
      </div>
    </form>
  </main>
  <footer>
      <div><button type="submit" class="btn" id="pwChangeGo" v-on:click="PWchange()">비밀번호 변경</button></div>
  </footer>
</template>

<script>
import axios from 'axios';
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
  name:"changePW",
  data(){
    return{
      pw_question: '',
      pw_answer: '',
      change_pw:'',
      pw_check:'',

    }
  },
    props: {
    msg: String,
  },
  components:{ FoodyHeader, },
  method:{
    PWchange(){
      const idx = this.pw_question;
      const pwda = this.pw_answer;
      const newPwd = this.change_pw;
      axios({
        method: 'put',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/pwdchange',
        params: {
          idx,
          pwda,
          newPwd,
        }
      })
    }
  },
}
</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.changeForm{
  visibility:hidden;
}

#notice{
  width: 70vw;
  color: red;
  text-align: right;
  font-size: 0.8rem;
  margin-top: 0.4rem;
  margin-right: -0.6rem;
}
select{
    box-sizing:border-box;
    width: 70vw;
    padding: 10px;
    border: 1px solid #3f72af;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
    margin: 0.6rem;
}
.answer {
    box-sizing:border-box;
    width: 70vw;
    padding: 10px;
    border: 1px solid #3f72af;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
    margin: 0.6rem;
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
}
input[type="password1"] {
    /*비밀번호*/
    box-sizing:border-box;
    width: 70vw;
    padding: 10px;
    border: 1px solid #3f72af;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
}

footer {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    height: 8vh;
    position: relative;
    transform : translateY(0vh);
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100%;
    bottom: 0vh;
    padding-top: 2%;
    padding-bottom: 2%;
}

.btn{
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 30px;
    border: none;
  }
</style>