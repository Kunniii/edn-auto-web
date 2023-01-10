import { Fragment } from "react";
import Header from "../components/Header";
import InteractiveDashboard from "../components/InteractiveDashboard";

export default function Dashboard() {
  return (
    <Fragment>
      <Header />
      <InteractiveDashboard />
    </Fragment>
  );
}