import { FETCH_PRODUCTS_START,FETCH_PRODUCTS_STARTED,FETCH_PRODUCTS_FAILED,FETCH_USERS_START,FETCH_USERS_STARTED,FETCH_USERS_FAILED } from "./constants";

export const fetchPostsInProgress=()=>{
    return { 
        type: FETCH_PRODUCTS_STARTED
    }
}
export const fetchUsersInProgress=()=>{
    return {
        type: FETCH_USERS_STARTED
    }
}
export const fetchPostsData=(posts)=>{
return {
    type: FETCH_PRODUCTS_START,
    payload: posts
};
};
export const fetchUsersData=(users)=>{
    return {
        type: FETCH_USERS_START,
        payload: users
    };
    };
export const fetchPostsDataFailed=()=>{
    return {
        type: FETCH_PRODUCTS_FAILED
    };
    };
    export const fetchUsersDataFailed=()=>{
        return {
            type: FETCH_USERS_FAILED
        };
        };