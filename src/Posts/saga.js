import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {  FETCH_PRODUCTS_STARTED,FETCH_USERS_STARTED } from "./constants";

import {
    fetchPostsData,
    fetchPostsDataFailed,
    fetchUsersData,
    fetchUsersDataFailed,
} from "./actions";


function* fetchPostsDataStarted() {
    try {
        const response = yield call(axios.get,"https://jsonplaceholder.typicode.com/posts");
        console.log("saga response",response);
        if(response && response.data)
        yield put(fetchPostsData({posts:response.data,postLoading:false,postSuccess:true}));
        else
        yield put(fetchPostsDataFailed());
    }
    catch(error) {
console.log("error",error);
    }
};

function* fetchUsersDataStarted() {
    try {
        const response = yield call(axios.get,"https://jsonplaceholder.typicode.com/users");
        console.log("saga response",response);
        if(response && response.data)
        yield put(fetchUsersData({users:response.data,userLoading:false,userSuccess:true}));
        else
        yield put(fetchUsersDataFailed());
    }
    catch(error) {
console.log("error",error);
    }
};

function* Saga() {
  yield takeLatest(FETCH_PRODUCTS_STARTED, fetchPostsDataStarted);
  yield takeLatest(FETCH_USERS_STARTED, fetchUsersDataStarted);
}

export default Saga;