import { FETCH_PRODUCTS_START,FETCH_PRODUCTS_STARTED,FETCH_PRODUCTS_FAILED,FETCH_USERS_START,FETCH_USERS_STARTED,FETCH_USERS_FAILED } from "./constants";

 
const reducer=(state = {users: [],posts:[],userLoading:true,userSuccess:true,postLoading:true,postSuccess:true}, action)=>{
switch (action.type) {
    case FETCH_PRODUCTS_STARTED: 
       return {...state,postSuccess:false};
 case FETCH_PRODUCTS_START:
     return {...state,...action.payload};
     case FETCH_PRODUCTS_FAILED:
       return {...state,postLoading:false,postSuccess:false}
       case FETCH_USERS_STARTED: 
       return {...state,userSuccess:false};
 case FETCH_USERS_START:
     return {...state,...action.payload};
     case FETCH_USERS_FAILED:
       return {...state,userLoading:false,userSuccess:false}
    default:
      return state;
  }
}
 
export default reducer;