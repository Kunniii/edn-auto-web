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
  };

  return (
    <Fragment>
      <div className="text-center w-96 mx-auto">
        <h1 className="text-center text-4xl font-bold mt-52 pb-10">EDN Auto</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 w-72 mb-2 border rounded-md"
            placeholder="Paste your token here"
            onChange={(e) => {
              setUserToken(e.target.value);
            }}
          />
          <br />
          <button className="hover:bg-sky-600 border-2 hover:border-sky-600 hover:duration-200 duration-200 bg-transparent border-sky-600 text-sky-600 px-4 py-2 mb-52 mt-3 rounded-lg hover:text-white font-bold animate-pulse">
            Login
          </button>
          <span className="">
            <p>Don't know where to find your token?</p>
            <p>
              Donwload and install{" "}
              <a
                className="underline font-bold text-blue-500"
                href="/EDNTokenGetter.zip"
                download
              >
                this extension
              </a>
            </p>
            <p>
              Then go to{" "}
              <a
                className="underline font-bold text-blue-500"
                href="http://fu.edunext.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                EduNext
              </a>{" "}
              to get AccessToken.
            </p>
          </span>
        </form>
      </div>
    </Fragment>
  );
}
