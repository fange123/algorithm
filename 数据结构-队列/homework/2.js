// * 请用队列这个数据结构结合 React 或 Vue 写一个任务 App，包括添加任务和完成任务功能，要求任务只能先进先出

import React,{ useState,useRef } from 'react';

const App = () => {
  const [task,setTask] = useState([])
  const inputRef = useRef(null)

  const onKeyup = (e) => {
    if(e.keyCode === 13) {
      const newTask = [...task]
      newTask.push(inputRef.current.value)
      setTask(newTask)
      inputRef.current.value = null
    }
  }

  const handleComplete = (index) => {
    const newTask = [...task]
    newTask.shift(index)
    setTask(newTask)

  }


  return (
   <>
    <input ref={inputRef} onKeyUp={onKeyup} placeholder='请输入任务名称'/>
    <ul>
      {
        task.map((item,index)=>
        <li key={index}>
          {item}
          {task[0]=== item ?  <a href="#" onClick={()=>handleComplete(index)}>完成任务✅</a> : null}
          </li>)
      }
    </ul>
    </>
  );
};

export default App;
