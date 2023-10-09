// import { Form } from "react-router-dom"
import { useEffect, useState } from 'react' 
import axios from 'axios'
import './fetch_takeApi.css'


const Promisedata =()=>{
  const [api,setapi]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{setapi(res.data)})
    .catch(err=>console.log(err))
  },[])

  return(
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {api.map((x,i)=>(
            <tr key={i}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.username}</td>
              <td>{x.email}</td>

            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default Promisedata;