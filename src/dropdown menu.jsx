import { useState } from "react";
import './drop.css';


const Option = [
  {
    value: "Phone call ",
    emoji: "📞"
  },
  {
    value: "Message ",
    emoji: "📧"
  },
  {
    value: "Note ",
    emoji: "📝"
  },
  {
    value: "meeting ",
    emoji: "🤝"
  }
];
let id=0;
const Dropdownmenu = () => {
  const [active, setactive] = useState(false)
  const [arry, setarry] = useState("choose one")
  
  return (
    <div className="dropdown">
      <div className="dropbtn" onClick={e => setactive(!active)}>
        { typeof arry !== 'object'? arry:<>
        {arry.emoji}{arry.value}</>}
        <span>{active ?"🔼":"🔽"} 
</span>
      </div>
      {active  && (
        <div className="dropcon">
          {Option.map((x) => (
            <div onClick={e => {
          setarry(x)
          setactive(false)}
            }className="dropitem"
            key={id++}>
              
              {x.emoji} {x.value}</div>
      ))}


    </div>)
}
    </div >
  )
}


export default Dropdownmenu;