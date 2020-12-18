
const comment = {

  state:{
     leftMenuCloseState:false,
  },
  getters:{
    GetLeftMenuCloseState: state => {
        return state.leftMenuCloseState;
    },

  },

   mutations:{
      SetLeftMenuCloseState(state,value){
        state.leftMenuCloseState = value;
      },
    },
    actions : {
      SetLeftMenuCloseStateAction({commit},value) {
        console.log(value)
        commit("SetLeftMenuCloseState",value);
      }
    }


}

export default comment
