


const Filter = (props) => {
  return (
    <div>
        filters shown with a <input 
        value={props.newfilter} 
        onChange={(event)=> {
          props.setFilter(event.target.value)
        }} />
    </div>
  )
}

export default Filter
