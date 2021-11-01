import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  // const [enterUsername, setEnterUsername] = useState("");
  // const [enterAge, setEnterAge] = useState("");


  const [isShowNameError, setIsShowNameError] = useState(false);
  const [isShowAgeError, setIsShowAgeError] = useState(false);
  const [error,setError]=useState({})

  const myName=useRef()
  const myAge=useRef()

  const addUserHandler = (event) => {
    event.preventDefault();

    const username=myName.current.value
    const age=myAge.current.value





    console.log(username,age);
    // no username
    if (username.trim().length === 0) {
      setIsShowNameError(true);
      setError({
        title:'Invalid name',
        message:'Please enter a valid name'
      })
    }
    // no age
    if (age <= 0) {
      setIsShowAgeError(() => true)
      setError({
        title:'Invalid age',
        message:'Please enter a valid age'
      })
    }
    // All OK
    if (username.trim().length > 0 && age > 0) {
      console.log(username, age);
      console.log("ready to submit");

      myName.current.value=''
      myAge.current.value=''

      let item = {
        name: username,
        age: age,
        id: Math.random().toString(),
      };

      // trigger Event to notify parent component
      props.onAddUser(item);
    }
  };



  const errorHandler=()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"

            className={isShowNameError ? classes.error : null}
            ref={myName}
            required
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"

            className={isShowAgeError ? classes.error : null}
            ref={myAge}
            required
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
