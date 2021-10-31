import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [isShowNameError, setIsShowNameError] = useState(false);
  const [isShowAgeError, setIsShowAgeError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(!enterUsername);
    // no username
    if (enterUsername.trim().length === 0) {
      setIsShowNameError(true);
    }
    // no age
    if (enterAge <= 0) {
      setIsShowAgeError(() => true);
    }
    // All OK
    if (enterUsername.trim().length > 0 && enterAge > 0) {
      console.log(enterUsername, enterAge);
      console.log("ready to submit");
      setEnterUsername("");
      setEnterAge("");
      let item = { name: enterUsername, age: enterAge,id:Math.random().toString() };

      // trigger Event to notify parent component
      props.onAddUser(item);
    }
  };

  //userName
  const usernameChangeHandler = (e) => {
    if (isShowNameError) {
      setIsShowNameError(() => false);
    }
    setEnterUsername(e.target.value);
  };

  //age
  const ageChangeHandler = (e) => {
    if (isShowAgeError) {
      setIsShowAgeError(() => false);
    }
    setEnterAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={enterUsername}
          className={isShowNameError ? classes.error : null}
          onChange={usernameChangeHandler}
          required
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enterAge}
          className={isShowAgeError ? classes.error : null}
          onChange={ageChangeHandler}
          required
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
