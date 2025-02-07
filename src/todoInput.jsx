import {React,useMemo,useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import check from './todo-app-main/images/icon-check.svg'
import DisplayList from "./todo-li"; 
import './App.scss';
function TodoInput(){
    var createJson=[{"name":'','id':''}];
    var[storeId,generateId]=useState(1);


    console.log('Input container calls')
    var[changeValue,setValue]=useState(createJson);
    console.log(changeValue);
    
    function addCuurentActivity(e){
        var getAvtivity=document.getElementById('addAcivity');
        getAvtivity.classList.add('active');
        getAvtivity.innerHTML=`<img src="${check}">`;
        generateId(storeId+1);
       Array.from(getAvtivity.parentElement.getElementsByClassName('textBoxStyle'),(ele,idx)=>{
        setValue((prev)=>[...prev,{'name':ele.value,id: storeId,'status':'active'}]);
        //  ele.value=''
        
       })   
       getAvtivity.classList.remove('active');
        getAvtivity.innerHTML='';
    }
    //  let avoidRender = useMemo(()  => addCuurentActivity(), [changeValue]);
    //  if(changeValue!=''){
    //     avoidRender()
    //  }
    
    return(
        <>
        <div className="center inputparent">
            
            <div className="input_wrapper">
              <div  className="checkBoxStyle"  id="addAcivity"  onClick={addCuurentActivity}></div>
                <input type="text" className="textBoxStyle" placeholder="Create your activity" /></div>
                
            
        </div>
        {<DisplayList prop={changeValue} />}
        </>
    )
}
export default TodoInput