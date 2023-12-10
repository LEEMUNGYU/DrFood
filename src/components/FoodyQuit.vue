<template>
  <foody-header></foody-header>
    <div>
    <h3>회원탈퇴</h3>
    <hr id="first_line">
    <div id="sorry">
        <p id="main_text"><span id="accent">죄송합니다</span><br><br>
        저희와 함께하신 시간동안 만족스러운<br>
        서비스를 드리지 못한 것 같아 죄송합니다<br><br>
        다음에 다시 만나게 될 때까지<br>
        더 좋은 서비스를 제공할 수 있도록<br>
        노력하겠습니다<br><br>
        아래의 입력창에<br>
        보이는<span id="accent">탈퇴할래요</span>를 입력하시면<br>
        탈퇴버튼이 활성화됩니다.</p>
    </div>
    <form><input  v-model="userInput" v-on:input="toggleQuit()" type="text" class="quit_input" placeholder="탈퇴할래요" required></form>
    <button v-on:click="QuitComp()" id="quit_btn">회원탈퇴</button>
    </div>
  <foody-nav></foody-nav>
</template>

<script>
import FoodyHeader from '@/layout/FoodyHeader.vue'
import FoodyNav from '@/layout/FoodyNav.vue'
import axios from 'axios';

export default {
    name: 'FoodyQuit',
    data(){
        return{
        userInput: '',
        popupView: false,
        }
    },
    methods:{
        toggleQuit(){
            const quit_btn = document.getElementById('quit_btn');
            if(this.userInput === '탈퇴할래요'){
                quit_btn.style.visibility = 'visible';
            }else{
                quit_btn.style.visibility = 'hidden';
            }
        },
        QuitComp(){
            const userId = parseInt(this.$store.state.userId, 10);
            const confirmed = window.confirm('정말 탈퇴하시겠습니까?');
            

            if (confirmed) {
        // 서버로 데이터 전송
            axios.delete('https://port-0-food-bag-jvpb2alnlhtxnz.sel5.cloudtype.app/user/resign?idx='+userId)
            .then(res => {
                const result = res.data;
            // 성공 시 작업
            if(result==='200'){
                console.log(res.data);
                this.$router.push({path: '/QuitComp', name:'QuitComp'});
            }
            })
            .catch(err => {
                console.log('에러!!!');
                console.log(err);
            });
            }
        }    
    },
    components: { FoodyHeader, FoodyNav,},

}
</script>

<style scoped>

h3{
    text-align: left;
    margin-left: 3%;
    margin-top: 8%;
}

.sorry{
    text-align: center;
}

#first_line{
    border: solid 0.4vh;
    color:#3F72AF;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin: 3%;
}
#main_text{
    font-size: 1rem;
    padding: 9%;
    margin-top: 5%;
    color:#3F72AF;
}
#accent{
    font-size: 1.2rem;
    font-weight: bold;
}

.quit_input{
    box-sizing: border-box;
    width: 80vw;
    height: 6vh;
    line-height:6vh;
    font-size:1rem;
    font-weight: bold;
    padding-left: 3%;
    background: #FFFFFF;
    border: 1px solid #3F72AF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-top:4%;
}

button{
    visibility: hidden;
    border: #EE2A59;
    margin-top:5%;
    margin-bottom: 5%;
    width: 40vw;
    height: 7vh;
    line-height: 7vh;
    font-size: 1.2rem;
    font-weight: bold;
    background: #EE2A59;
    border-radius: 5px;
    color: #F1F1F1;
}
</style>