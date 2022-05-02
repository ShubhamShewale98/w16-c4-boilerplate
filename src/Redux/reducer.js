import { getError, getLoading, getSucess } from "./actions";
import { GET_ERROR, GET_LOADING, GET_SUCCES } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_SUCCES :
      return {
       ...state,
        data: payload,
        isLoading: false,
        isError: false,
        filterData: [],
        products: [],
      }
      case GET_ERROR :
        return {
          ...state,
          data: [],
          isLoading: false,
          isError: true,
          filterData: [],
          products: [],
        }
        case GET_LOADING :
          return {
            ...state,
            data: [],
            isLoading: true,
            isError: false,
            filterData: [],
            products: [],
          }
          default : {
            return state;
          }
  }
};
export { reducer };
