import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InteractiveDashboard from "../components/InteractiveDashboard";

function removeToken() {
  localStorage.removeItem("userToken");
  window.location.reload();
}

export default function Dashboard() {
  return (
    <Fragment>
      <button onClick={removeToken}>Logout</button>
      <InteractiveDashboard />
    </Fragment>
  );
}