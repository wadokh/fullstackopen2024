import Header from './Header.jsx'

import { useState } from 'react'
const Statistics=(props)=>{
  if(props.good==0 && props.neutral==0 && props.bad==0){
    return(
      <>
      <Header heading="statistics"/>
      <div>No feedback given</div>
      </>
    )
  }
      return(<>
        <Header heading="statistics"/>
        <div>good {props.good}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.bad}</div>
        <div>all {props.good+props.neutral+props.bad}</div>
        <div>average {(props.good-props.bad)/(props.good+props.neutral+props.bad)}</div>
        <div>positive {props.good/(props.good+props.neutral+props.bad)*100}%</div>
      </>
      )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue=(setterMethod, newValue)=>{
    setterMethod(newValue);
  }

  return (
    <div>
      <Header heading="give feedback"/>
      <button onClick={()=>setToValue(setGood,good+1)}>good</button>
      <button onClick={()=>setToValue(setNeutral,neutral+1)}>neutral</button>
      <button onClick={()=>setToValue(setBad,bad+1)}>bad</button>
      <Statistics good={good} neutral={neutral}  bad={bad}/>


    </div>
  )
}

export default App