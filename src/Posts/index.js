import React from "react";

const Posts=()=>{
    
    let arr=["Post 1","Post 2"];
     const finalJSX=arr.map(ar=> <h1>{ar}</h1>);
    return (
<div>
  {finalJSX}
</div>
    )
};
export default Posts;