// import React, { useState } from "react";
// function DropArea(){
//     var [setDrop,showDropFn]=useState(false);
//     var displayDrop=(e)=>{
    
//         Array.from(document.getElementsByClassName('showDrop'),(ele,idx)=>{
//             ele.classList.remove('showDrop');
//             ele.classList.add('hideDrop')

//         })
//     }
//     return(
//         <>
//         <div onDrop={displayDrop} onDragOver={(e)=>{e.preventDefault();showDropFn(true)}} onDragLeave={()=>showDropFn(false)} className={setDrop ? "showDrop":"hideDrop"}>DropHere</div>
//         </>
//     )
// }
// export default DropArea