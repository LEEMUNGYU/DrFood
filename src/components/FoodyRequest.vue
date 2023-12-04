<template>
<FoodyHeader link='FoodyHeader.vue' />
<h3>문의하기</h3><hr id="first_line">

<div>
  <span>E-mail</span>
  <input type="text" placeholder="이메일" aria-label="이메일" v-model="email">
</div>

<input type="text" placeholder="제목" aria-label="default input example" v-model="titleText">

<div>
    <span>내용</span>
    <textarea rows="8" aria-label="내용" v-model="contentText"></textarea>
</div>

<footer>
    <div><button type="submit" class="btn" id="requestSend" v-on:click="requestSend()">문의 전송</button></div>
</footer>
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
    font-family: 'NPSfontBold';
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 30px;
    border: none;
}

</style>