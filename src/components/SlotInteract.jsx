import Actions from "./Actions";
import QuestionCard from "./QuestionCard";

export default function SlotInteract() {
  let slotData = JSON.parse(localStorage.getItem("selectedSlot"));
  let questions = slotData.questions;
  return (
    <>
    <div></div>
    <div className="">
      {questions.map((q) => (
        <QuestionCard question={q} />
      ))}
    </div>
    <Actions />
    </>
  );
}
