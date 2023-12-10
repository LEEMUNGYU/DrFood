<template>
<FoodyHeader></FoodyHeader>
<h3>회원가입</h3><hr id="first_line">
<form class="container">
<div class="id">
    <input v-model="NewEmail" type="text" class="inputBox" placeholder="이메일" required><!-- ★아이디 중복확인은 script작업 필요-->
    <input v-model="NewPwd" type="text" class="inputBox" placeholder="비밀번호" required> <!-- ★비밀번호 가리는 것도 script작업 필요-->
    <p id="notice">*비밀번호는 6~12자리로 입력해주세요</p>
    <input type="password access" class="inputBox" placeholder="비밀번호 확인" required>
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
        <input type="checkbox" name="consent" value="yes"><label for="consent">동의함</label>
    </div>
</div>
</form>
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
            userQuestion: '',
            userAnswer: '',
            NewNickName: '',
        };
    },
    methods:{
    nextPage() {
        this.$store.dispatch('updateUserData', {
            email: this.NewEmail,
            pwd: this.NewPwd,
            pwdq: this.userQuestion,
            pwda: this.userAnswer,
            nickname: this.NewNickName,
        });
        this.$router.push({ path: '/checkda' });
        },
    },
}
</script>

<style>

h3{
    text-align: left;
    margin-left: 3%;
    margin-top: 8%;
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
    height:80vh;
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
    flex-direction: column; 
    justify-content: center;
    height: 8vh;
    position: relative;
    transform : translateY(0vh);
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 30px;
    border: none;
    text-decoration: none;
    }

</style>