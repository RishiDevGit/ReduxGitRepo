import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios';
import {Grid,Button,Box} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {fetchPostsInProgress, fetchUsersInProgress } from "../Posts/actions";
const PostsAndUsersPage =(props)=>{
    const postLoading = useSelector(state => state.postLoading);
    const userLoading = useSelector(state => state.userLoading);
    const userSuccess= useSelector(state => state.userSuccess);
    const posts= useSelector(state => state.posts);
    const users= useSelector(state => state.users);
    const postSuccess=useSelector(state=>state.postSuccess);
    const dispatch=useDispatch();
    const fetchPostsApiStart=()=>{
        dispatch(fetchPostsInProgress());
    };
    const fetchUsersApiStart=()=>{
     dispatch(fetchUsersInProgress());
    };
    let postsContent;
    if(postLoading && !postSuccess)
    postsContent=<CircularProgress/>;
    else if(!postLoading && postSuccess)
    postsContent=posts.map(d=>(<h1>{d.title}</h1>))
    else if(!postLoading && !postSuccess)
    postsContent=(<h3>Posts Data Not Available</h3>)
    let usersContent;
    if(userLoading && !userSuccess)
    usersContent=<CircularProgress/>;
    else if(!userLoading && userSuccess)
    usersContent=users.map(d=>(<h1>{d.name}</h1>))
    else if(!userLoading && !userSuccess)
    usersContent=(<h3>Users Data Not Available</h3>)


/*  
Promises Example
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        resolve({
            users: [
                { name: "Michael" },
                { name: "Sarah" },
                { name: "Bill" },
            ]
        })
    })
}

getAllUsers()
    .then(data => console.log(data))
     .catch(err => console.log(err))
*/





    return (
        <Grid container spacing={2}>
        <Grid item xs={6}>
    <Box textAlign="center">    <Button variant="contained" style={{marginBottom: "20px"}} color="success" onClick={fetchPostsApiStart}>
  Fetch Posts
</Button><br/>
{
postsContent
      }
</Box>
  
       
        </Grid>
        <Grid item xs={6}>  <Box textAlign="center"> 
         <Button variant="contained" color="success" style={{marginBottom: "20px"}} onClick={fetchUsersApiStart}>
  Fetch Users
</Button><br/>
{
usersContent
      }</Box>
        </Grid>
      
      </Grid>
);
};
export default PostsAndUsersPage;