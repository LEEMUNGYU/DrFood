<template>
  <FoodyHeader></FoodyHeader>
<h3>개인정보처리방침</h3><hr id="first_line">
<div id="rules">
    <p id="rulesTitle">1. 처리하는 개인정보 항목</p>
    <p id="smallTitle">1.1 회사는 원할환 고객상담, 각종 서비스의 제공을 위해 아래 와 같은 개인전보를 수집하고 있습니다.</p>
    <p id="text">각 서비스별 필수 정보</p>
        <ul id="detail_item">

          <li> 회원가입 : 이름, 이메일, 알레르기 및 질환 정보</li>
          <li> 문의하기 : 이름, 이메일</li>
        </ul>
      <p id="sub_text">'필수 정보 수집' 동의를 거부할 권리가 있으며, 필수 전보 외
      선택 정보의 수집에 동의를 거부할 수 있습니다. 필수 전보 수
      집 동의를 하지 않을 경우 서비스 이용이 제한 될 수 있습니
      다.
      </p>
      <p id="smallTitle">  1.2. 개인전보 수집 방법회사는 다음과 같은 방법으로 개인전 
        보를 수집합니다.
      </p>
        <ul id="detail_item">
          <li> 최초 가입시 가입 정보</li>
        </ul>
      
      <p id="rulesTitle">2. 개인정보의 처리 및 이용 목적</p>
      <p id="smallTitle">회사는 수집한 개인정보를 다음의 목적을 위해 처합니다.</p>
      <ul id="detail_item">
        <li> 고객문의에 대한 정보 제공 및 안내(답변) 및 현황관리</li>
        <li> 고객의 알레르기 및 질환에 따른 식단 추천 필터링</li>
      </ul>
</div>
<FoodyNav></FoodyNav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue'
import FoodyNav from '@/layout/FoodyNav.vue'

export default {
    name:'UserRule',
    components:{FoodyHeader,FoodyNav},
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
#rules{
  border: 1px solid none;
  display: block;
  width: 70vw;
  height: 70%;
  color:#3F72AF;
  text-align: left;
  margin: auto;
  overflow-y:scroll;
}
#rules::-webkit-scrollbar{
  display:none;
}

#rulesTitle{
  font-size: 1.2rem;
  font-weight: bold;
}
#smallTitle{
  text-indent: 1.0rem;
  font-size: 1.0rem;
}
#sub_text{
  text-indent: 0.8rem;
  font-size: 0.8rem;
  font-weight: lighter;
}
#text{
  text-indent: 1.0rem;
  font-weight: bold;
}
#detail_item{
  text-indent: 0.9rem;
  font-size: 0.9rem;
}
</style>