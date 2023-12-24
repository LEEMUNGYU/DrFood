import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import {getUserFromCookie,getAuthFromCookie} from'@/utils/cookies';

const store = createStore({
  state () {
    return{
    email: '',
    cookieID: (getAuthFromCookie() || ''),
    userId: '',
    cookiePWD: (getUserFromCookie() ||  ''),
    diseaseNm:[],
    allergieList:[],
    pwd: '',
    pwdq: '',
    pwda: '',
    codeAlle: [],
    codeDise: [],
    Allco:'',
    Diseco:'',
    DietList:[],
    FoodsNutri:[],
    TodayList:'',
    todayOccasion:'',
    MealItems:[],
    showSituation:[],
    visibleSituation:[],    
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
    setUserEmail(state, userEmail){
        state.email = userEmail;
    },
    setUserIdx(state,userId){
        state.userId = userId;
    },
    setUserName(state, nickNm){
      state.nickNm = nickNm;
    },
    setDiseaseNm(state, diseaseNm){
      state.diseaseNm = '#' + diseaseNm.replace(/#/g, ' #');
    },
    setToken(state, token){
      state.token = token;
    },
    resetState(state) {
      const getDefaultState =() => {
        return {
          email: '',
          token: '',
          userId: '',
          nickNm: '',
          diseaseNm:'',
          allergieList:[],
          pwd: '',
          pwdq: '',
          pwda: '',
          codeAlle: [],
          codeDise: [],
          Allco:'',
          Diseco:'',
          todayOccasion:'',
          DietList:[],
          FoodsNutri:'',
          TodayList:'',
          MealItems:[],
          showSituation:[],
          visibleSituation:[],    
        };
      };
      Object.assign(state, getDefaultState());
    },
    setAllergieList(state, allergieList){
        state.allergieList = allergieList.map(item => ' #' + item.name);
    },
    setCreateUserData(state, data) {
      state.email = data.email;
      state.pwd = data.pwd;
      state.pwdq = data.pwdq;
      state.pwda = data.pwda;
      state.nickNm = data.nickname;
    },
    setCodeDise(state, selectedDiseases) {
      state.codeDise = selectedDiseases;
    },
    setDiseco(state, diseco) {
      state.Diseco = diseco;
    },
    setCodeAlle(state, selectedAllergies) {
      state.codeAlle = selectedAllergies;
    },
    setAllco(state, allco) {
      state.Allco = allco;
    },
    setDietList(state, DietList){
      state.DietList = DietList;
    },
    setFoodsNutri(state, FoodsNutri){
      state.DietList = FoodsNutri;
    },
    setTodayList(state, List){
      state.TodayList = List;
    },
    setTodayOccasion(state, occ){
      state.todayOccasion = occ;
    },
    updateMyMealItems(state, MealItems){
      state.MealItems = MealItems;
    },
    updateShowSituation(state, showSituation){
      state.showSituation = showSituation;
    },
    updateVisibleSituation(state, visibleSituation){
      state.visibleSituation = visibleSituation;
    }

  },
  actions: {
    updateUserData({ commit }, data) {
      commit('setCreateUserData', data);
    },
  },
  plugins: [createPersistedState()],
});

export default store;