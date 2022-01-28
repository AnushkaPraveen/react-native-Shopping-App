const SET_NAME = 'SET_NAME';
const SET_PRODUCTA_COUNT = 'productACount';
const SET_PRODUCTB_COUNT = 'productBCount';
const SET_TOTAL='total'
const SET_INCREMENT='increment';
const SET_DECREMENT='decrement';
const SET_INCREMENTB='incrementB';
const SET_DECREMENTB='decrementB';

export const SetName = name => ({
  type: SET_NAME,
  payload: name,
});
export const SetProductACount = count => ({
  type: SET_PRODUCTA_COUNT,
  payload: count,
});
export const SetProductBCount = count => ({
  type: SET_PRODUCTB_COUNT,
  payload: count,
});
export const SetTotal= () => ({
    type: SET_TOTAL,
  });
  export const SetIncrement=()=>({
    type:SET_INCREMENT
  });
  export const SetDecrement=()=>({
    type:SET_DECREMENT
  });
  export const SetIncrementB=()=>({
    type:SET_INCREMENTB
  });
  export const SetDecrementB=()=>({
    type:SET_DECREMENTB
  });
const initialState = {
  counter: 50,
  name: 'anushka',
  countA: 0,
  countB: 0,
  ProductA:20,
  ProductB:30,
  Total:0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_PRODUCTA_COUNT:
      return {...state, countA: action.payload};
    case SET_PRODUCTB_COUNT:
      return {...state, countB: action.payload};
    case SET_TOTAL:
        return {...state, Total:(state.countA*state.ProductA)+(state.countB*state.ProductB)}; 
    case SET_INCREMENT:
        return {...state, countA: state.countA + 1};  
    case SET_DECREMENT:
        return {...state, countA: state.countA - 1};  
    case SET_INCREMENTB:
        return {...state, countB: state.countB + 1};  
    case SET_DECREMENTB:
        return {...state, countB: state.countB - 1};                
    default:
      return state;
  }
};

export default rootReducer;
