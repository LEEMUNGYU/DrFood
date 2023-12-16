<template>
<FoodyHeader></FoodyHeader>
<div class="mainContents">
<h3>회원가입</h3><hr id="first_line">
<form class="container">
<div class="id">
    <input v-model="NewEmail" type="text" class="inputBox" placeholder="이메일" required><!-- ★아이디 중복확인은 script작업 필요-->
    <p id="checkID">*이메일를 다시 한번 확인해주세요</p>
    <input v-model="NewPwd" type="text" class="inputBox" placeholder="비밀번호" required> <!-- ★비밀번호 가리는 것도 script작업 필요-->
    <p id="notice">*비밀번호는 6~12자리로 입력해주세요</p>
    <input v-model="PwdAccess" type="password access" class="inputBox" placeholder="비밀번호 확인" required>
    <p id="checkPW">*비밀번호가 일치하지 않습니다</p>
    <p id="checkPW1">*비밀번호의 길이를 확인해주세요</p>
    <div>
        <select v-model="userQuestion" class="form-select" id="inputGroupSelect02">
            <option selected>질문 유형 선택</option>
            <option value="1">본인의 어린시절 별명은?</option><!--인증질문 1-->
            <option value="2">본인의 어린시절 장래 희망은?</option><!--인증질문 2-->
            <option value="3">본인의 어린 시절에 존경 했던 인물은?</option><!--인증질문 3-->
            <!--추가 질문은 여기부터 추가하여 사용-->
        </select>
    </div>
    <input v-model="userAnswer" type="AnsWer" class="inputBox" placeholder="비밀번호 확인 질문 답변" required>
    <input v-model="NewNickName" type="NickName" class="inputBox" placeholder="닉네임" required>
    <div id="personalInfoCheck">
        <h4>개인정보활용동의</h4><a href="#" id="detail">자세히</a><!--#에 개인정보처리방침 삽입-->
    </div>
    <div id="checkBox">
        <input type="checkbox" name="consent" value="yes" ref="consent"><label for="consent">동의함</label>
    </div>
    <div><p id="checkYES">*개인정보처리방침에 동의해주세요</p></div>
</div>
</form>
</div>
<div @click="nextPage()" class="btn" id="nextPage">다음</div>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
    name:'SignInUser',
    components:{ FoodyHeader, },
    data() {
        return {
            NewEmail: '',
            NewPwd: '',
            PwdAccess:'',
            userQuestion: '',
            userAnswer: '',
            NewNickName: '',
        };
    },
    methods:{
    nextPage() {
        let email_format = /^[0-9a-zA-Z._-]+@[0-9a-zA-Z_-]+\.[a-zA-Z]{2,4}$/;
        let lenPW = this.NewPwd.length;
        let check = this.$refs.consent.checked;
        
        if((email_format.test(this.NewEmail)!=false) && (this.NewPwd===this.PwdAccess) && (lenPW>5 && lenPW<12) && (check!=false)){
            this.$store.dispatch('updateUserData', {
                email: this.NewEmail,
                pwd: this.NewPwd,
                pwdq: this.userQuestion,
                pwda: this.userAnswer,
                nickname: this.NewNickName,
            });
            this.$router.push({ path: '/checkda' });
        }else{
            document.getElementById("checkID").style.display = 'none';
            document.getElementById("checkPW").style.display = 'none';
            document.getElementById("checkPW1").style.display = 'none';
            document.getElementById("checkYES").style.display = 'none';
            if(email_format.test(this.NewEmail)!=true){
                document.getElementById("checkID").style.display = 'flex';
            }
            if(this.NewPwd!=this.PwdAccess){
                document.getElementById("checkPW").style.display = 'flex';
            }
            if(lenPW<5 || lenPW>12){
                document.getElementById("checkPW1").style.display = 'flex';
            }
            if(check!=true){
                document.getElementById("checkYES").style.display = 'flex';
            }
        }
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

h3{
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
.container{
    overflow:scroll;
    width:100%;
    padding-bottom:5%;
}

form{
    display: flex;
}
.inputBox{
    box-sizing:border-box;
    width: 70vw;
    padding: 10px;
    border: 1px solid #3f72af;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
    margin-top: 5px;
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

#personalInfoCheck{
    display: flex;
    width: 70vw;
    padding: 10px;
    font-weight: bold;
    border-radius: 5px;
    margin-inline: auto;
    margin-top: 5px;
}
h4{
    color:#3f72af;
    margin: 0;
}
#detail{
    color:#3f72af;
    font-size: 0.8rem;
    text-indent: 0.8rem;
    text-decoration: none;
}
#notice{
    box-sizing:border-box;
    display: flex;
    width: 70vw;
    color: red;
    font-size: 0.8rem;
    margin-inline: auto;
    margin-top: 0.4rem;
    justify-content: right;
}
#checkID{
    display:none;
    box-sizing:border-box;
    width: 70vw;
    color: red;
    font-size: 0.8rem;
    margin-inline: auto;
    margin-top: 0.4rem;
    justify-content: right;
}

#checkPW{
    display:none;
    box-sizing:border-box;
    width: 70vw;
    color: red;
    font-size: 0.8rem;
    margin-inline: auto;
    margin-top: 0.4rem;
    justify-content: right;
}
#checkPW1{
    display:none;
    box-sizing:border-box;
    width: 70vw;
    color: red;
    font-size: 0.8rem;
    margin-inline: auto;
    margin-top: 0.4rem;
    justify-content: right;
}

#checkYES{
    display:none;
    box-sizing:border-box;
    width: 70vw;
    color: red;
    font-size: 0.8rem;
    margin-inline: auto;
    margin-top: 0.4rem;
    justify-content: right;
}

#checkBox{
    box-sizing:border-box;
    display: flex;
    width: 70vw;
    margin-inline: auto;
    color:#3f72af;
    font-weight: bold;
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