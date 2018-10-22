import {SCROL_PAGE} from './actions'

const initialState = {
  home :0 ,
  about:0 ,
  work:0,
  education:0 ,
  skills:0,
  portfilio:0,
  refrence:0

}


const reducer = (state = initialState, action) => {
switch (action.type) {
  case SCROL_PAGE:
    console.log(state);
    return {
      ...state,
      home : action.home,
      about: action.about,
      work:action.work,
      education: action.education,
      skills:action.skills,
      portfilio: action.portfilio,
      refrence:action.refrenceaction


    }
  default:
    return state;
}
};

export default reducer;
