import { useState } from 'react'


const Header =(props)=>{
  return(<h1> {props.text} </h1>)
}
const Button =(props)=>{
  return(
    <button onClick={props.clickFunc} >{props.text} </button>
  )

}
const ResultHeading = (props)=>{
  if (props.good == 0 && props.bad==0 && props.neutral==0) {
return(
  <>
  <h1>{props.text}</h1>
  <h2> no feed backs given</h2>
  </>
)      
  }

 
 return(<>
    <h1>{props.text}</h1>
   <table>
    <Result text = "good" val= {props.good}/>
    <Result text = "neutral" val= {props.neutral}/>
    <Result text = "bad" val= {props.bad}/>
    <Result text="all"  val={props.all}/>
    <Result text="average" val={props.average}/>
    <Result text="positive" val={props.positive} symbol="%"/>
   </table>
  </>
  )
}


const Result = (props)=>{
  return(<>
  <tr>
  <td>{props.text} </td> <td> {props.val} {props.symbol}</td>
  </tr>
  </>
)}



function App() {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const[all, setall]=useState(0)
  const [average,setAverage]=useState(0)
  const [positive, setPositive]=useState(0)

  function handleGoodRev(){
    setGood(good+1)
    setall(all+1)
    setAverage((good-bad)/all)
    setPositive(good/all *100)
  }
  function handleNeutralRev(){
    setNeutral(neutral+1)
    setall(all+1)
    setAverage((good-bad)/all)
    setPositive(good/all*100)
  }
  function handleBadRev(){
    setBad(bad+1)
    setall(all+1)
    setAverage((good-bad)/all)
    setPositive(good/all*100)
    
  }
  return(
  <>
  <Header text =" Give Feedback "/>
  <br />
  <Button clickFunc={handleGoodRev} text="Good" />
  <Button clickFunc={handleNeutralRev} text="Neutral" />
  <Button clickFunc={handleBadRev} text="bad" />
  <br />
  <br />
<ResultHeading text ="statistic " good={good} neutral={neutral} bad ={bad} all={all} 
  average={average} positive={positive} />


  </>
  )
}

export default App
