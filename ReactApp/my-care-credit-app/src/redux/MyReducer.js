import SHOW_STATE from "./ActionTypes";

const initialState = {
  hospitalID: 10
};

const myReduce = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STATE:
      return {
        
        hospitalID: 20
      };
    default:
      return state;
  }
};

export default myReduce;
