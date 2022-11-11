import { Fragment } from "react";
import UserInfo from "./UserInfo";
import * as courseInteraction from "../utils/courseInteraction";
import CourseInteract from "./CourseInterac";
import UserCourses from "./UserCourses";

export default function InteractiveDashboard() {
  return (
    <Fragment>
      <UserInfo />
      {
        courseInteraction.courseSelected() ?
          <CourseInteract /> :
          <UserCourses />
      }
    </Fragment>
  )
}