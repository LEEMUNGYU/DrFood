<template>
 <!--타이틀바-->
 <nav class="navbar fixed-top bg-body-tertiary">
    <div class="container-fluid" id="brand-title">
      <div class="row flex-nowrap justify-content-btween align-items-center">
        <div class="col-4 justify-content-center"><a href="#"><img id="back" src="img/back.svg"></a></div>
      </div>
      <div class="row flex-nowrap justify-content-btween align-items-center">
        <div class="col-4 text-center"><h1 id="brand">Dr.Foody</h1></div>
      </div>
      <div class="row flex-nowrap justify-content-btween align-items-center">
        <div class="col-4 justify-content-center"><a href="#"><img id="home" src="img/Home.svg"></a></div>
      </div>
    </div>
  </nav>
<!--타이틀바 끝-->
<!-- 내용 기입은 여기서 부터-->
<div id="scroll">
  <div class="grid text-center" id="content-main" style="--bs-rows: 2; --bs-columns: 2;">
    <div><h2>님의 건강정보</h2></div>
    <div class="g-start-2" style="grid-row: 2">
      <ul class="p-2 list-group list-group-horizontal justify-content-center">
        <li class="col-3 list-group-item" id="fix-name">질환</li>
        <li class="col-8 list-group-item" id="some-item">A second item</li>
      </ul>
      <ul class="p-2 list-group list-group-horizontal justify-content-center">
        <li class="col-3 list-group-item" id="fix-name">알레르기</li>
        <li class="col-8 list-group-item" id="some-item">A second item</li>
      </ul>
    </div>
  </div>
  <div class="card border-0 text-center mx-auto p-2" style="width: 20rem;">
    <div class="card-header border-0"  id="diet-list-title">
      <table class="col-12">
          <tr>
            <td class="text-center" rowspan="2" width="40%"><img src="img/dietList.svg"></td>
            <td class="text-start" width="60%">date</td>
          </tr>
          <tr>
            <td class="text-start" id="diet-list-main" width="60%">추천식단</td>
          </tr>
      </table>
    </div>
    <ul class="list-group list-group-flush" id="dash-list-tbt"  style="margin-top: 10px;">
      <li class="list-group-item" id="dash-list-table">A item</li>
      <li class="list-group-item" id="dash-list-table">A item</li>
      <li class="list-group-item" id="dash-list-table">A item</li>
      <li class="list-group-item" id="dash-list-table">A item</li>
      <li class="list-group-item" id="dash-list-table">A item</li>
      <li class="list-group-item" id="dash-list-table">A item</li>
    </ul>
  </div>
</div>
<!--내용 기입 마지막은 여기-->

<!--메뉴바-->
<nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid" id="nav-style">
    <div class="col-3 d-flex flex-column mb-2" id="icon-box">
          <div class="d-flex justify-content-evenly">식단추천</div>
          <div class="d-flex justify-content-evenly"><img id="icon1" src="img/dietList.svg" href="#"></div>
    </div>
    <div class="col-3 d-flex flex-column mb-2" id="icon-box">
      <div class="d-flex justify-content-evenly">식단관리</div>
      <div class="d-flex justify-content-evenly"><img id="icon2" src="img/dietManage.svg" href="#"></div>
    </div>
    <div class="col-3 d-flex flex-column mb-2" id="icon-box">
      <div class="d-flex justify-content-evenly">회원정보</div>
      <div class="d-flex justify-content-evenly"><img id="icon3" src="img/info.svg" href="#"></div>
    </div>
    <div class="col-3 d-flex flex-column mb-2" id="icon-box">
      <div class="d-flex justify-content-evenly">로그아웃</div>
      <div class="d-flex justify-content-evenly"><img id="icon4" src="img/logout.svg" href="#"></div>
    </div>
  </div>
</nav>
<!--메뉴바 끝-->

</template>

<script>
export default {
  name: 'DashBoard',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
