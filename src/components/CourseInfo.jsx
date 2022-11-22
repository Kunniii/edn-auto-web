import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";
import { processSessions } from "../utils/courseInteraction";
import RequestHeader from "../utils/RequestHeader";
let course = JSON.parse(localStorage.getItem("selectedCourse"));
const config = {
  headers: RequestHeader,
  params: {
    courseId: course?.id,
    classId: course?.classId
  }
};
export default function CourseInfo(props) {
  const { isLoading, error, data, isFetching } = useQuery(["get-sessions-details"], () =>
    axios
      .get("https://fuapi.edunext.vn/learn/v2/classes/get-class-sessions-details", config)
      .then((res) => {
        processSessions(res.data);
        return res.data
      })
  );

  if (isLoading) return "Loading...";
  if (isFetching) return "Fetching data...";
  if (error) return "An error has occurred: " + error.message + ". You may need to logout and get a new TOKEN.";

  let activities = JSON.parse(localStorage.getItem("activities"));
  return activities.map(a => {
    return (
      <div>{a.description}</div>
    )
  })
}