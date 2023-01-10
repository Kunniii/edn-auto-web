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
  const [userToken, setUserToken] = useState("");

  const handleSubmit = (e) => {
    saveToken(userToken);
    e.preventDefault();
  }

  return (
    <Fragment>
      <div className="text-center">
        <h1 className="text-center text-4xl font-bold mt-20 pb-10">EDN Auto</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 w-72 mb-2 border rounded-md"
            placeholder="Paste your token here"
            onChange={(e) => {
              setUserToken(e.target.value);
            }}
          />
          <br />
          <button
            className="bg-sky-500 border-2 border-sky-600 hover:duration-200 duration-200 hover:bg-transparent hover:border-sky-900 hover:text-sky-900 px-4 py-2 rounded-lg text-white font-bold hover:animate-pulse"
          >
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </Fragment>
  );
}
