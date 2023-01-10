import { selectSlot } from "../utils/courseInteraction";


export default function CourseSession(props) {
  let sessionId = props.sessionId;
  let questions = props.questions;
  let slot = props.slot;
  return (
    <div
      className="w-72 border rounded-lg mx-auto p-4 px-a my-4 bg-slate-100 duration-100 hover:duration-100 hover:cursor-pointer hover:drop-shadow-lg hover:bg-white"
      onClick={() => selectSlot({id: sessionId, questions: questions})}
    >
      <div>
        <p className="my-auto text-center text-xl">Slot {slot}</p>
      </div>
    </div>
  );
}
