import { Fragment } from "react";
import { Base64 } from "js-base64";

export default function UserInfo() {
  let jwt = localStorage.getItem("userToken");

  let info = Base64.decode(jwt.split(".")[1]);
  let userInfo = JSON.parse(info);

  return (
    <Fragment>
      <h1 className="text-center text-4xl my-10 font-bold">{userInfo.FullName}</h1>
    </Fragment>
  );
}