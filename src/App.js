import React, { useState } from "react";
import './App.css';
function App (){
  const [name, setName] =useState();
  const [list, setList] = useState([])
  const [inputData, setInputData] = useState('')
   const addList=()=>{
    if(!inputData){
    }else{
      setList([...list, inputData]);
      setInputData('');
    }
}
const dataType = (event) => {
 setName(event.target.value)
}
const deleteData = (elem) => {
  setName (" ");
}

return(
        <>
        <div className="test">
          <h2 className="test1">Controls</h2>
            <input type="text" value={inputData} placeholder="Enter Task Name" onChange={(e) => setInputData(e.target.value) }/> 
              <button onClick={addList}>Create</button>
                <br/>
               <input type="text" value={name} placeholder="Selected Task" id="try"/>
              <button>Move Back</button>
            <button>Move Forword</button>
          <button onClick={deleteData}>Delete</button>
        </div>
        <div>
        <h2 >Kanban Board</h2>
        <div className="row test3">
          <div className="column test2">BackLog
        {
        list.map((elem, ind) =>{
          return (
            <>
          <div className=" test5" key={ind}>
            <ul className="test4">
              <option onClick={dataType}>{elem}</option>
              </ul>
          </div>
          </>
          )
        })
      }
      </div>
      <div className="column test2">ToDo
       <div >
         <ul>
              
         </ul>
       </div>
      </div>
      <div className="column test2">
        OnGoing
       <div >
          <ul>
         
          </ul>
       </div>
   </div>
        <div className="column test2">Done
          <div >
          <ul>
              
          </ul>
          </div>
        </div>
       </div>
    </div>
  </>
    )
}
export default App;