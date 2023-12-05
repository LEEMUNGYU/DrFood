import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state () {
    return{
    nickNm: '',
    allergieNm: '',
    }
  },
  getters: {
    // username이 빈 문자열이면 로그인 안된상태
    // 로그인 되면(빈문자열이 아니면) getters가 true로 바뀜
    isLogin(state) {
      return state.result.nickNm !== '';
     // 로그인전엔 false, 로그인 후엔 true를 보내주는것  
    },
  },
  mutations:{
    setUserName(state, nickNm){
      state.nickNm = nickNm;
    },
    setAllergieNm(state, allergieNm){
      state.allergieNm = '#' + allergieNm.replace(/#/g, ' #');
    },
    resetState(state) {
      state.nickNm = '';
      state.allergieNm = '';
    },
  },
  plugins: [createPersistedState()],
});

export default store;