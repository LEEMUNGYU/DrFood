<template>
<FoodyHeader link='FoodyHeader.vue' />
<h3>문의하기</h3><hr id="first_line">

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">E-mail</span>
  <input type="text" class="form-control" placeholder="이메일" aria-label="이메일" aria-describedby="basic-addon1">
</div>

<input class="form-control" type="text" placeholder="제목" aria-label="default input example">

<div class="input-group">
    <span class="input-group-text">내용</span>
    <textarea class="form-control h-25" rows="8" aria-label="내용"></textarea>
</div>


<router-link to="/RequestComp" class="request_btn">문의 전송</router-link>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue';

export default {
    name:'FoodyRequest',
    components: { FoodyHeader,},
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

.request_btn{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    height: 8vh;
    position: relative;
    transform : translateY(0vh);
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100vw;
    bottom: 0vh;
    text-decoration: none;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 30px;
}

</style>