import { useState } from "react";
import axios from "axios";
import Userlist from "../userlist/userlist";

function Userform() {
  //component, controller
  //model
  const [userform, setUserform] = useState({
    name: "Ram",
    mobilenumber: "1",
  });

  const[users,setUsers] = useState([{name:'kunal' ,mobilenumber: 123456}]);
  const save = function (event) {
    console.log(userform.name);
    axios //fetch
      .post("http://localhost:8080/user", userform)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    //view , JSX
    <div>
      <input value={userform.name} name="name" onChange={updateState}></input>
      <input
        value={userform.mobilenumber}
        name="mobilenumber"
        placeholder="phone"
        onChange={updateState}
      ></input>
      <button onClick={save}>Save</button>
      <Userlist usersProp={users}></Userlist>
    </div>
  );

  function updateState(event) {
    const current = { ...userform //spread operator
        , [event.target.name]: event.target.value };
    console.log(current);
    setUserform(current);
  }
}

export default Userform;