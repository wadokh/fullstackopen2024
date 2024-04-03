

const Part=(props)=>{
    return(
        <p>{props.part} {props.exercise}</p>
    )
}

const Content= (props)=>{
    return(
        <>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>

        </>
    )
}

export default Content