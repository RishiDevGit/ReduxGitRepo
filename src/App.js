import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios';
import { fetchPostsData, fetchPostsDataStarted } from "./Posts/actions";
import PostsAndUsersPage from "./PostsAndUsersPage";
 
const App=()=>{
  return (
    <div className="App">
      <PostsAndUsersPage/>
    </div>
   
  );
}
 
export default App;