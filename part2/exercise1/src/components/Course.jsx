const Header = (props) => {
    return <h2>{props.course}</h2>
  }
  
const Total = (props) => {
return <h2>total of {props.sumOfExercises} exercises</h2>
}

const Part = (props) => {
return (
    <p key={props.id}>
    {props.part} {props.exercises}
    </p>
)
}

const Content = ({parts}) => {
return (
    <div>
    {
        parts.map(part=><Part part={part.name} exercises={part.exercises} key={part.id} />)
    }
    </div>
)
}

const Course = ({course}) =>{
const total = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0,
);
    return (
    <div key={course.id}>
    <Header course={course.name} />
    <Content
        parts={course.parts}
    />
    <Total sumOfExercises={total} />
    </div>
)
}

  export default Course