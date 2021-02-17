import {useEffect, useState} from "react"

import "./style.css"

function App() {
const [boxes, setBoxes] = useState([{bg: "#777"}])

useEffect(() => {

  const interval = setInterval(() => {
    setBoxes([...boxes, {bg: "#" + (( Math.random() * 0xffffff) << 0).toString(16) }])
  }, 500)

  return () => clearInterval(interval)
 
}, [boxes])

  return (
    <div className="hero">
      {boxes.map((box, i) => (
        <div key={i} className="box" style={{backgroundColor: box.bg}} >
          <p>{i}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
