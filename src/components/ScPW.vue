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
    </div>
  <button type="submit" class="btn" id="pwChangeGo" v-on:click="PWchange()">비밀번호 변경</button>
  </template>
  
  <script>
  import axios from 'axios';
  import FoodyHeader from '@/layout/FoodyHeader.vue';
  
  export default {
    name:"scPW",
    data(){
      return{
        userId: '',
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