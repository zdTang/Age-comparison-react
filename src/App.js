import React from "react";
import AddUser from "./components/Users/AddUser"
import UsersList from "./components/Users/UsersList"
import Card from "./components/UI/Card";
import {useState} from 'react'

function App() {
  let dataCollection=[]

  const[database,setDatabase]=useState(dataCollection)
  const handleAddUser=(data)=>{
    console.log(data)

    setDatabase(preValue=>[...preValue,data])
  }



  return (
    <Card>
      <AddUser onAddUser={handleAddUser}/>
      <UsersList users={database} />
    </Card>
  )
}

export default App
