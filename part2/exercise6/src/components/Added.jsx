const Added = ({ message, error }) => {
    if (message === null && error===null) {
      return null
    }
    else if(message!==null && error===null){
        return(
            <div className='added'>{message}</div>
        )
    }
    else{
        return (
            <div className="error">{error}</div>
        )
    }
  }
  export default Added