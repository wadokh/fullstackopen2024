import Header from './Header.jsx'

import { useState } from 'react'

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
      <Header heading="statistics"/>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good+neutral+bad}</div>
      <div>average {(good-bad)/(good+neutral+bad)}</div>
      <div>positive {good/(good+neutral+bad)*100}%</div>


    </div>
  )
}

export default App