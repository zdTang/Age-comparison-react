import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="userName">Username</label>
      <input id="userName" text="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" text="text" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
