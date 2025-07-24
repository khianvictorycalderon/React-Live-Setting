import { useEffect, useState } from "react"

export default function App() {

  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  useEffect(() => {
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
  }, [red, green, blue]);

  return (
    <>
      <div className="container">
        <span>Adjust Background Color: </span><br/>
        <br/>
        Red: <br/>
        <input type="range" min={0} max={255} value={red} onChange={(e) => setRed(parseInt(e.target.value))}/><br/>
        Green: <br/>
        <input type="range" min={0} max={255} value={green} onChange={(e) => setGreen(parseInt(e.target.value))}/><br/>
        Blue: <br/>
        <input type="range" min={0} max={255} value={blue} onChange={(e) => setBlue(parseInt(e.target.value))}/><br/>
        <br/>
        <br/>
        Value: rgb({red}, {green}, {blue});
      </div>
    </>
  )
}