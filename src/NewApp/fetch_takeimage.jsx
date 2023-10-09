import axios from 'axios';
import { useEffect, useState } from "react";
import './fetch_takeimage.css';

let imagelist = [];
const ImageCom = () => {
  
  const [arry, setarry] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        imagelist = res.data.map((x) => x.url);
        
      })
      .catch(alert);

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setarry(res.data);
      })
      .catch(alert);
  }, []);
  const list = arry.map((x, index) =>   <div key={x.id} className='main'>
      <img src={imagelist[index]} alt="images" />
      <h5>{x.body}</h5>
    </div>
  );

  return <>
  <ul>{list}</ul></>;
};

export default ImageCom;
