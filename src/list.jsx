import { useState } from "react"
import'./list.css';

const ListItem = ({ listinput, setlistinput, taskmajorArry, settaskmajorArry }) => {
  // console.log(listinput)
  const [editinputvalue, seteditinputvalue] = useState("")// for edit input



  const handlecheckbox = (id) => {
    const newArry = listinput.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked:!data.ischecked }
      }
      else{
       return  data;
      }
    });
    const newlistArry = taskmajorArry.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked: !data.ischecked  }
      }
      else{
       return  data;
      }
    });
    setlistinput(newArry);
    settaskmajorArry(newlistArry);
  }



  const handleEditbtn=(id)=>{
const list=listinput.map((x)=>{
  if(x.id == id){
    if(x.isedited){
      return{...x,task:editinputvalue,isedited:!x.isedited}
    }
    return{...x,isedited:!x.isedited}
  }
  else {
    return x;
  }
})
  const listArry=taskmajorArry.map((x)=>{
    if(x.id==id){
      return{...x,task:editinputvalue}
    }else{
      return x;
    }
  })
  settaskmajorArry(listArry);
  setlistinput(list);
 
 }


//for deletebtn
const handaleDeletebtn=(id)=>{
const afterdeletlist = listinput.filter((x)=> x.id !== id);
const changedeleted=taskmajorArry.map((x)=>{
  if(x.id== id){
    const data ={...x,isdeleted:!x.isdeleted}
    return data;
  }
  return x;
})
settaskmajorArry(changedeleted);
setlistinput(afterdeletlist);

}


  //for editinput  task on change value
  const edittask = (e) => {
    seteditinputvalue(e.target.value)
  }

  
  const inputarry = listinput.map((x) => (
    <li key={x.id}>
      {!x.isedited && <input  className="chekint"type="checkbox"  onChange={() => {
        handlecheckbox(x.id)
      }} defaultChecked={x.ischecked? true : false} />}
      {!x.isedited && x.task}
      {x.isedited && <input className="txtint" type="text"  onChange={edittask} defaultValue={x.task} />}
      &nbsp;
     <br/>
    <button className="editbtn" onClick={() => { handleEditbtn(x.id) }}>Edit</button>
      <button className="deletbtn"onClick={()=>{handaleDeletebtn(x.id)}}>Delete</button></li>)
  )

  return <>
    <ul>{inputarry}</ul>
  </>
}
export default ListItem;
