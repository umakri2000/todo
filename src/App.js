
import './App.scss';
import DisplayList from './todo-li';
import { useState } from 'react';
import TodoInput from './todoInput';
function App() {
  console.log('parent component Calls')
  var [currentTheme,changeTheme]=useState('dark');
  console.log(currentTheme);
  document.getElementsByTagName('body')[0].classList.add('dark')
 function toogleTheme(){
  let getBody=document.getElementsByTagName('body')[0];
 if(currentTheme  === 'dark'){
  getBody.classList.remove('light');
  getBody.classList.add('dark');
  Array.from(document.getElementsByClassName('cs-lightSwitch'),(element,_idx)=>{ element.style.display ='block'  });
  Array.from(document.getElementsByClassName('cs-darkSwitch'),(element,_idx)=>{ element.style.display ='none'  })
  changeTheme('light')
 }
 else{
  getBody.classList.remove('dark');
  getBody.classList.add('light');
  changeTheme('dark');
  Array.from(document.getElementsByClassName('cs-darkSwitch'),(element,_idx)=>{ element.style.display ='block'});
  Array.from(document.getElementsByClassName('cs-lightSwitch'),(element,_idx)=>{ element.style.display ='none'  });

 } 
 }
  return (
    <>
    <div className="todoParent">
      <h1 className='center'>
        <span className='inline todo-width'>TODO</span>
        <svg xmlns="http://www.w3.org/2000/svg" className='pointer cs-lightSwitch' width="26" height="26" onClick={toogleTheme}>
        <path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415
         0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 
        1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className='cs-darkSwitch pointer' width="26" height="26" onClick={toogleTheme} style={{display:'none'}}>
        <path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996
         0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
      </h1>
       {<TodoInput/>}
      
    </div>
    </>

  );
}

export default App;
