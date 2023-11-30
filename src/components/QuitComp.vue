<template>
  <div class="header">
    <h1>Dr.Foody</h1>
   </div>
  <div class="goodbye">
    <p>그동안<br>
    Dr.Foody를<br>
  이용해주셔서 감사합니다</p>
  </div>
  <footer>
      <div><button type="submit" class="btn" id="loginGo" v-on:click="fnBtoLogin()">로그인 화면으로</button></div>
  </footer>
</template>

<script>
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
} } 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: 'NPSfontBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

template{
    font-family: 'NPSfontBold';
    margin: 0;
    padding: 0; 
}
.header{ 
    display: flex;
    position: relative;
    justify-content: center;
    background-color: #dbe2ef;
    color: #3f72af;
    width: 100vw;
    height: 8vh;
    line-height:100%;
}

h1{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.goodbye{
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #3F72AF;
    height: 80vh;
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
    width: 100vw;
    bottom: 0vh;
    padding-top: 2%;
    padding-bottom: 2%;
}

.btn{/*로그인 글자*/
    font-family: 'NPSfontBold';
    background-color: #dbe2ef;
    color: #3F72AF;
    font-size: 30px;
    border: none;
  }
</style>
