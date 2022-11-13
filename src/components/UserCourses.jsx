import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseCard from "./CourseCard";
import RequestHeader from "../utils/RequestHeader";
import * as courseInteraction from '../utils/courseInteraction';

const config = {
  headers: RequestHeader
}

export default function UserCourses() {
  const { isLoading, error, data, isFetching } = useQuery(["get-course-current-of-user"], () =>
    axios
      .get("https://fuapi.edunext.vn/learn/v2/classes/get-course-current-of-user", config)
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";
  if (isFetching) return "Fetching data...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {data.data.listCourseOfUser.map((c) => {
        return <CourseCard data={c} key={c.id} onClick={() => courseInteraction.enter(c)} />
      })}
    </div>
  );
}