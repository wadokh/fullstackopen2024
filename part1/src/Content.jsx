

const Part=(props)=>{
    return(
        <p>{props.part} {props.exercise}</p>
    )
}

const Content= (props)=>{
    return(
        <>
            <Part part={props.part1} exercise={props.exercise1}/>
            <Part part={props.part2} exercise={props.exercise2}/>
            <Part part={props.part3} exercise={props.exercise3}/>

        </>
    )
}

export default Content