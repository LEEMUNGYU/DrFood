<template>
    <foody-header></foody-header>
    <div class="requestCompMessage">
        <h2>회원님의 문의가<br>
        정상적으로 수리되었습니다 </h2>
        <h4>답변까지 며칠의 기간이 소요될 수 있으며,<br>
        답변은 기입하신 이메일을 통해 전달됩니다</h4>
        <h4>메인화면으로 돌아가시려면<br>
        <img id="miniHome" src="../style/img/Menu/homeBTN.svg" />홈버튼을 눌러주세요</h4>
    </div>
    <foody-nav></foody-nav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue'
import FoodyNav from '@/layout/FoodyNav.vue'

export default {
    name:'RequestComp',
    components:{FoodyHeader,FoodyNav},
}
</script>

<style scoped>
.requestCompMessage{
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    color: #3F72AF;
    padding-left: 6%;
    padding-right: 6%;
    font-size:1rem;
    line-height: 1.8rem;
}
h2{
    font-weight: bold;
    line-height: 2rem;
}
#miniHome{
    width:6vw;
    vertical-align:text-bottom;
}
</style>