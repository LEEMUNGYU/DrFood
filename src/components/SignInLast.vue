<template>
  
  <h2>아래의 정보로 회원가입이 진행됩니다.</h2>
    <div class="p1">질환과 알레르기 정보는 회원정보 페이지에서 수정할 수 있습니다.</div>

    <h3>회원가입 정보</h3>
    <p>
        아이디: # <br>
        비밀번호: # <br>
        닉네임: # <br>
    </p>
    <br><br>
    <h3>보유 질환</h3>
    <p id="selectedDiseases">#""</p>
    <br><br>
    <h3>보유 알레르기</h3>
    <p id="selectedAllergies">#""</p>
    <br><br>
    <footer>
        <div class="footer">
            <button class="btn" onclick="document.location.href='#'">회원 가입 완료</button> <!--#자리에 메인 대시보드 창 주소 입력해야됨-->
        </div>
    </footer>
</template>

<script>
export default {
    name:'SignLast',
}
</script>

<style>

</style>