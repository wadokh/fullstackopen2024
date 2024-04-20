import Header from './Header.jsx'

import { useState } from 'react'

const StatisticLine=(props)=>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

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
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good}></StatisticLine>
            <StatisticLine text="neutral" value={props.neutral}></StatisticLine>
            <StatisticLine text="bad" value={props.bad}></StatisticLine>
            <StatisticLine text="all" value={props.good+props.neutral+props.bad}></StatisticLine>
            <StatisticLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}></StatisticLine>
            <StatisticLine text="positive" value={props.good/(props.good+props.neutral+props.bad)*100+" %"}></StatisticLine>
          </tbody>
        </table>
      </>
      )
}

const Button=(props)=>{
  return(
    <button onClick={()=>props.setter(props.value+1)}>{props.btnName}</button>
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
      <Button setter={setGood} value={good} btnName="good"></Button>
      <Button setter={setNeutral} value={neutral} btnName="neutral"></Button>
      <Button setter={setBad} value={bad} btnName="bad"></Button>

      <Statistics good={good} neutral={neutral}  bad={bad}/>


    </div>
  )
}

export default App