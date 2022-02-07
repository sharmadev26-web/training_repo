import React, {useState} from 'react';
import AddUserLabel from '../UI/AddUserLabel';
import PrimaryButton from '../UI/PrimaryButton';
import UserInput from '../UI/UserInput';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
const AddUser = (props) => {
let userItem = {};
const [userName, setUserName] = useState('');
const [userAge, setUserAge] = useState('');
const [error, setError] = useState();
const userAdditionHandler = () => {
    userItem["id"] = Math.random();
    userItem["name"] = userName;
    userItem["age"] = userAge;
    if(userName === '' || userAge == ''){
        setError({title:'Empty Error', content:'Please enter value'});
        return;
    }
    if(userAge < 1){
        setError({title:'min error', content:'Please enter value > 0'});
        return;
    }
    
    props.AddUserHandler(userItem);
    setUserName('');
    setUserAge('');
}
const userInputHandler = (event) => {
    if(event.target.type === 'text'){
       setUserName(event.target.value);
    } else{
       setUserAge(event.target.value);
    }
}
const errorHideHandler = () => {
    setError();
}

return (
    <React.Fragment>
        { error && <ErrorModel title={error.title} content={error.content} errorHideHandler= {errorHideHandler} /> } 
        <Card>
            <div>
                <AddUserLabel user_label="User Name"></AddUserLabel>
                <UserInput type="text" identifier="Name" value={userName} onChange={userInputHandler}></UserInput>
            </div>
            <div>
                <AddUserLabel user_label="Age (Years)"></AddUserLabel>
                <UserInput type="number" identifier="Age" value={userAge} onChange={userInputHandler}></UserInput>
            </div>
            <div>
                <PrimaryButton value="Add User" onClick={userAdditionHandler}></PrimaryButton>
            </div>
        </Card>
        
    </React.Fragment>
)
}
export default AddUser;