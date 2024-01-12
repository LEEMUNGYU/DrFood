<template>
  <foody-header />
  <div class="mainContents">
  <div class="goodbye">
    <p>그동안<br>
    Dr.Foody를<br>
  이용해주셔서 감사합니다</p>
  </div>
  </div>
  <button type="submit" class="btn" id="loginGo" v-on:click="fnBtoLogin()">로그인 화면으로</button>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue'

export default {
  name: 'QuitComp',
  data() {
  },
    props: {
    msg: String,
  },
  methods: {
    fnBtoLogin(){
      this.$router.replace({path:'/'});
    }
  },
  components: { FoodyHeader,}, 
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContents{
  box-sizing: border-box;
  padding-top: 50%;
  margin:0;
}

.goodbye{
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3F72AF;
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
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 1.8rem;
    font-weight: bold;
    border: none;
  }
</style>
