import UserInputClasses from './UserInput.module.css';

const UserInput = (props) => {
const userInputHandler = (event) => {
    props.onChange(event);
}
    return (
      <input className={UserInputClasses.user_input} identifier={props.identifier} value={props.value} type={props.type} onChange={userInputHandler}></input>
    )
}

export default UserInput;