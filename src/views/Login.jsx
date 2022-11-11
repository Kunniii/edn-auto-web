import { Fragment, useState } from "react";

function saveToken(token) {
  if (token) {
    localStorage.setItem("userToken", token);
    window.location.reload();
  } else {
    localStorage.removeItem("userToken");
  }
}

export default function Login() {

  const [userToken, setUserToken] = useState('');

  return (
    <Fragment>
      <input placeholder="Enter your token..." onChange={e => {setUserToken(e.target.value)}}/>
      <button onClick={() => saveToken(userToken)}> Login </button>
    </Fragment>
  )
}