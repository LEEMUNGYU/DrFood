<template>
<FoodyHeader />
<div class="mainContents">
<h3>문의하기</h3><hr id="first_line">
<div class="total-contents">
<div id="mail">
  <input type="text" placeholder="이메일" aria-label="이메일" v-model="email">
</div>
<div id="title">
  <input type="text" placeholder="제목" aria-label="default input example" v-model="titleText">
</div>
<div id="contents">
  <textarea rows="8" placeholder="내용"  aria-label="내용" v-model="contentText"></textarea>
</div>
</div>
</div>
<button type="submit" class="btn" id="requestSend" @click="requestSend()">문의 전송</button>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
    name:'FoodyRequest',
    components: { FoodyHeader,},
    data() {
        return {
        email: '',
        titleText: '',
        contentText: '',
        } 
    },
    methods: {
        requestSend(){
        const email=this.email;
        const titleText=this.titleText;
        const contentText=this.contentText;
        const requestComp = () => this.$router.push({path:'/RequestComp', name:'RequestComp',});

        if(email!='' && titleText!='' && contentText!=''){
            requestComp();
        }
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


input {
    display: flex;
    justify-content: center;
    margin:auto;
    margin-bottom:5%;
    color: #222222;
    font-size: 1.1rem;
    font-weight: bold;
    width: 80%;
    height: 4vh;
    border: 1px solid #3f72af;
    border-radius: 5px;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    z-index: 5;
}
#mail{
    margin-top:8%;
}
#mail input{
    background-image: url(../style/img/otherBTN/mailBTN.svg);
    background-position: 2% center;
    background-repeat: no-repeat;
    text-indent: 2rem;
}
textarea{
    font-family: 'NotoSansKR';
    display: flex;
    justify-content: center;
    margin:auto;
    margin-bottom:5%;
    color: #222222;
    width: 80%;
    height: 35vh;
    font-size: 1.1rem;
    font-weight: bold;
    border: 1px solid #3f72af;
    border-radius: 5px;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    resize: none;
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