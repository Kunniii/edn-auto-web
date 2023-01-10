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
  if (error) return "An error has occurred: " + error.message + ". You may need to logout and get a new TOKEN.";

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-4 w-[75vw] mx-auto">
      {data.data.listCourseOfUser.map((c) => {
        return <CourseCard data={c} key={c.id} onClick={() => courseInteraction.enter(c)} />
      })}
    </div>
  );
}