<template><!--좀 더 진행-->
    <foody-header />
    <div class="mainContents">
      <h3>비밀번호 찾기</h3><hr id="first_line">
      <form>
        <div>
          <input class="userId" placeholder="아이디" aria-label="아이디" v-model="userId">
        </div>
        <div><select v-model="pw_question">
              <option selected>질문 유형 선택</option>
              <option value="본인의 어린시절 별명은?">본인의 어린시절 별명은?</option><!--인증질문 1-->
              <option value="본인의 어린시절 장래 희망은?">본인의 어린시절 장래 희망은?</option><!--인증질문 2-->
              <option value="본인의 어린 시절에 존경 했던 인물은?">본인의 어린 시절에 존경 했던 인물은?</option><!--인증질문 3-->
              <!--추가 질문은 여기부터 추가하여 사용-->
        </select></div>
        <div>
          <input class="answer" placeholder="질문에 대한 답변" aria-label="기존 비밀번호" v-model="pw_answer">
        </div>
        <div v-if="checkCode===false" @click="QAcheck()" id="checkQnA">확인</div>
        <checkQAPopUp  v-if="this.openModal == true" @closePopup="closeModalView" />
        <div v-if="checkCode===true" id="noticeCheck">본인확인이 완료 되었습니다.</div>
        <div>
          <input type="password1" class="form-control" placeholder="변경할 비밀번호" aria-label="변경할 비밀번호"
            aria-describedby="basic-addon1" v-model="change_pw">
        </div>
            <p id="notice">*6~12자의 영문 대·소문자 및 숫자만 가능</p>
        <div>
          <input type="password" class="form-control" placeholder="변경할 비밀번호 확인" aria-label="비밀번호 확인"
            aria-describedby="basic-addon1" v-model="pw_check">
        </div>
      </form>
      <compleatePW v-if="openModal2==true" @Good='good()' />
    </div>
  <button type="submit" class="btn" id="pwChangeGo" v-on:click="PWchange()">비밀번호 변경</button>
  </template>
  
  <script>
  import axios from 'axios';
  import FoodyHeader from '@/layout/FoodyHeader.vue';
  import checkQAPopUp from './checkQAPopUp.vue';
  import compleatePW from './compleatePW.vue';
  
  export default {
    name:"scPW",
    data(){
      return{
        userId: '',
        pw_question: '',
        pw_answer: '',
        change_pw:'',
        pw_check:'',
        checkCode:false,
        openModal:false,
        openModal2:false,
  
      }
    },
      props: {
      msg: String,
    },
    components:{ FoodyHeader,checkQAPopUp,compleatePW, },
  methods:{
    QAcheck(){
      const email = this.email;
      const pwdq = this.pw_question;
      const pwda = this.pw_answer;

      axios({
        method: 'post',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/checkpwdqa?',
        params: {
          email,
          pwdq,
          pwda,
        }
      })
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-1': console.log(result);//"계정이 존재하지 않습니다."
                  this.openModal = true;
            break;
          case '200': console.log(result);
              this.checkCode = true;
            break;
          default:  console.log(result);
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
    },
    PWchange(){
      if(this.checkCode === true){
      const email = this.email;
      const pwd = this.change_pw;
      axios({
        method: 'put',
        url: 'https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/replacepwd?',
        params: {
          email,
          pwd,
        }})
        .then((res) => {
        const result = res.data;

        switch(result.rst_cd){
          case '-3': console.log(result);
            break;
          case '200': console.log(result);
              this.openModal2 = true;
            break;
          default:  console.log(result);
            break;
            }
            })
            .catch(err => {
              console.log('에러!!!');
              console.log(err);
            })
    }else{
      //입력한 정보를 확인해 주세요 popup(그냥 띄워주고 확인버튼만 있으면 될 듯)//
    }},
    closeModalView(data){
            this.openModal = data;
    },
    good(){
      this.$router.push({path : '/'});
    }
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
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  #notice{
    width: 70vw;
    color: red;
    text-align: right;
    font-size: 0.8rem;
    margin-top: 0.4rem;
    margin-right: -0.6rem;
  }
  #noticeCheck{
  width: 70vw;
  color: red;
  text-align: right;
  font-size: 0.8rem;
  margin-right: -0.6rem;
  margin-bottom: 0.8rem;
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

  .userId{
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
  
#checkQnA{
      width: 15vw;
      height: 4vh;
      line-height: 4vh;
      font-size: 1rem;
      color: #fff;
      border: none;
      border-radius: 5px;
      background: #3f72af;
      margin-bottom:3%;
      margin-left: auto;
      margin-right: 15%;
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
  
  
  .btn{
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
    }
  </style>