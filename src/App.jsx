import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ListItem from "./list";


const Arry = [
  { id: 0, task: "eating", ischecked: false ,isedited:false,isdeleted:false},
  { id: 1, task: "writing", ischecked: false ,isedited:false,isdeleted:false},
  { id: 2, task: "reading", ischecked: false ,isedited:false,isdeleted:false},
];

function App() {
  const [filinput, setfilinput] = useState(Arry);
  const[newid,setnewid]=useState(2);
  const[majorarry,setmajorarry]=useState(Arry);
  const[add,setadd]=useState('');
  // this state for dropdown//


    
  //for add newinput
const handlerinput=(e)=>{
setadd(e.target.value),
setnewid(newid+1)
}
// for add button
const addClick=()=>{
  setfilinput([...filinput,{id:newid,task:add,ischecked:false,isedited:false,isdeleted:false}]);
  setmajorarry([...majorarry,{id:newid,task:add,ischecked:false,isedited:false,isdeleted:false}]);
  setadd('');
}
//for completed list
const handleCompleted=()=>{
  const Completelist=majorarry.filter((x)=>x.ischecked && !x.isdeleted)
  setfilinput(Completelist);
}

//for notcomplete list
const handlenotCompleted=()=>{
 const Notcompletedlist=majorarry.filter((x)=>x.ischecked == false && x.isdeleted==false);
setfilinput(Notcompletedlist);
}
//for all complted and not completed list
const handleAlltask=()=>{
  const Allcompleted=majorarry.filter((x)=>!x.isdeleted);
  setfilinput(Allcompleted)};



  return (
    <>
      <div className="todo">
     <h1>React To do app</h1>
      <input className="inputadd" type='text' value={add} onChange={handlerinput} placeholder="enter task" />
        <button className="addbtn" onClick={addClick}>Add</button>
        <br/>
        <button className="task" onClick={handleAlltask}>All</button>
         <button className="task" onClick={handleCompleted}>Completed</button>
         <button  className="task" onClick={handlenotCompleted}>NotCompleted</button>
         <div className="heading">
       <h2>Task Remaining  </h2>
         <ListItem listinput={filinput} setlistinput={setfilinput} taskmajorArry={majorarry} 
        settaskmajorArry={setmajorarry}/>
       </div> 
     </div>
      
    
    </>
  );
}

export default App;
