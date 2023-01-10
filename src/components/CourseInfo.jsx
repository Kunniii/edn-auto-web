import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { processSessions, slotSelected } from "../utils/courseInteraction";
import RequestHeader from "../utils/RequestHeader";
import CourseSession from "./CourseSession";
import SlotInteract from "./SlotInteract";

let course = JSON.parse(localStorage.getItem("selectedCourse"));
const config = {
  headers: RequestHeader,
  params: {
    courseId: course?.id,
    classId: course?.classId,
  },
};
export default function CourseInfo(props) {
  const { isLoading, error, isFetching } = useQuery(
    ["get-sessions-details"],
    () =>
      axios
        .get(
          "https://fuapi.edunext.vn/learn/v2/classes/get-class-sessions-details",
          config
        )
        .then((res) => {
          processSessions(res.data);
          return res.data;
        })
  );

  if (isLoading) return "Loading...";
  if (isFetching) return "Fetching data...";
  if (error)
    return (
      "An error has occurred: " +
      error.message +
      ". You may need to logout and get a new TOKEN."
    );

  let sessions = JSON.parse(localStorage.getItem("sessions"));

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-4 w-[75vw] mx-auto">
      {slotSelected() ? (
        <SlotInteract />
      ) : (
        Object.keys(sessions).map((group) => (
          <CourseSession sessionId={sessions[group].id} slot={group} questions={sessions[group].questions} />
        ))
      )}
    </div>
  );
}
