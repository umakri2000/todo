import React, { createElement, useEffect, useRef, useState } from "react";
import cross from './todo-app-main/images/icon-cross.svg';
import check from './todo-app-main/images/icon-check.svg'
import './App.scss';
import DropArea from "./droparea";

function DisplayList({prop}){
    var [getLi,lifn]=useState(prop);
    var [getCount,countfn]=useState(0);
    var[getActiveDrag,activeDrag]=useState(null)
    console.log(getLi)
    console.log('lis component calls')
    console.log('getData...',prop);
    var removeAcivity=(e)=>{
    console.log('remove Activity Calls');
  var removedIems=  prop.filter(element => {
        if(!(element.id == Number(e.target.closest('li').getAttribute('id')))){
            return element
        }
        else{
            element.status ='removed'
        }
        
    });
    lifn(removedIems)
    calc_lenngth()
    
   }
    useEffect(()=>{   
        lifn(prop)
        Array.from(document.getElementsByClassName('displayListUl'),(ele,idx)=>{
                ele.classList.remove('hide'); 
                Array.from(document.getElementsByClassName('textBoxStyle'),(ele,idx)=>{ele.value='' })     
        });
    
       calc_lenngth()
       
    // console.log(activelength)
    },[prop])
    function calc_lenngth(){
        var activelen = prop.filter((val)=> {
            if((val.status !=undefined  && val.status == 'active')){
             return  val
            }
          
        });
        countfn(activelen.length)
    }
// logic ENDS

var setasactive=(e)=>{ 
    console.log(e.target);
    var getList= e.target.closest('li');
    getLi.map(function(searchActive){
        console.log(searchActive.id)
       if(searchActive.id==getList.getAttribute('id')){
        searchActive.status='completed'
       }
    console.log(prop)
    })
    console.log(getLi)
    getList.classList.add('strike');
Array.from(document.getElementsByClassName('checkBoxStyle'),(thisinst,idx)=>{
    e.target.classList.add('active');
    e.target.parentElement.classList.add('thisLiisSelected')
    e.target.innerHTML=`<img src="${check}"/>`
})
calc_lenngth()
}
var dragStartFn=(e,getId)=>{

    activeDrag(getId);
    e.target.classList.add('dragStart')
}
var dropFunction =(e, id)=>{
    console.log(getLi);

    console.log(typeof(getLi))
   
        const draggedItem = getLi.find((item) => item.id === getActiveDrag);
        const droppedOnItem = getLi.find((item) => item.id === id);
    console.log('draggedItem....',draggedItem);
    console.log('droppedItem....',droppedOnItem);
    console.log('typeofgetlI...',typeof(getLi));   // in javascript array are objects...

        if (draggedItem && droppedOnItem) {
          const draggedIndex = getLi.indexOf(draggedItem);
          const droppedOnIndex = getLi.indexOf(droppedOnItem);
          let updatedList = [...getLi];
          updatedList.splice(draggedIndex, 1);
           updatedList.splice(droppedOnIndex, 0, draggedItem);
    
          lifn(updatedList);
        }
      
}
var DragEndfn=(e)=>{
    e.target.classList.remove('dragStart')
    
}
var AllAcivity=(e)=>{
    console.log('.....e',e)
    cuurentActive(e);
    console.log(prop);
    var dispActivity=prop.filter((val)=>{
        if(val.status!="removed"){
            return val
        }
    })
     lifn(dispActivity)

}
function cuurentActive(e){
    Array.from(document.getElementsByClassName('footertab'),(thisactive,idx)=>{
        thisactive.classList.remove('text-active')
    })
    e.target.classList.add('text-active')
}
var displayCompleted=(e)=>{
   var displayitemsCompleted= prop.filter(function(completedVal){
    if(completedVal.status == 'completed'){
        return completedVal
    }

   })
   lifn(displayitemsCompleted);
   cuurentActive(e)

}
var clearCompleted=()=>{
    var clearItemsCompleted= prop.filter(function(clearItems){
        if(clearItems.status == 'completed'){
            clearItems.status = 'removed';
            
        }
        return clearItems
       });
       lifn(clearItemsCompleted)
}
var displayActive=(e)=>{
    var activieArray=[];
    prop.map(function(active){
        if(active.status == 'active'){
            activieArray.push(active);

        }
  lifn(activieArray)
    })
cuurentActive(e);
}
var activelength=(e)=>{
  
      
}
    return(
        <>
        <div className="relative">
        <div className="center">
        <ul className="displayListUl hide">
       {getLi.map(function(val){
        if(val.status == 'removed'){
            return false
        }
           if(val.status == 'completed'){
             var activeclass= 'strike thisLiisSelected'
             var checkclass=<img src={check}/>;
             var checkActive='active';
             
           }
           else{
            activeclass='';
            checkclass=''
            checkActive=''
           }
        return(
            val.name !=''&&
            (
                <>
            <li id={val.id} className={activeclass} draggable
             onDragOver={(e) => e.preventDefault()}
             onDragStart={(e)=>dragStartFn(e,val.id)}
             onDragEnd={(e)=>DragEndfn(e)}
              onDrop={(e)=>dropFunction(e,val.id)}>
                    <span className={`checkBoxStyle ${checkActive}`}  onClick={setasactive}>{checkclass}</span>
            <span className="listmaxwidth activityname">{val.name}</span>
            <span className="crossimg float_right" onClick={removeAcivity}><img src={cross}/></span>
            </li> 
            {/* <DropArea/> */}
              </>
            )
        )

    
    
    
       })
       
       }  
       <div className="footer">
            <div className="footerMenu">
            <span className="pointer">{getCount} items left</span>
            <div className="inline">
                <span className="hspad pointer footertab"  onClick={(e)=>AllAcivity(e)}>All</span>
                <span  className="hspad pointer footertab" onClick={(e)=>displayActive(e)}>Active</span>
                <span  className="hspad pointer footertab" onClick={(e)=>displayCompleted(e)}>Completed</span>
            </div><div className="inline pointer">
                <span className="inline pointer" onClick={clearCompleted}>Clear Completed</span>
            </div>
            </div>
        </div>
        </ul>
        </div>
        
       
        </div>
        </>
    )

}
export default React.memo(DisplayList)


//<li><span class="checkBoxStyle"></span>
    //        <span class="listmaxwidth activityname">${prop}</span>
    //        <span class="crossimg float_right"><img src="${cross}"/></span>
   // </li>
//
//