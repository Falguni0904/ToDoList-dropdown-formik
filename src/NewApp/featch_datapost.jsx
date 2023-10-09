import axios from'axios'

 export const PostData=()=>{
const handlesubmit= async ()=>{
    try{
        let result=await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(result.data);
        let response=await axios.post("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)
    }catch(err){
        console.log(alert)
    }
}
    
    return(
    <>
    <button onClick={handlesubmit}>submit</button>
    </>)
}