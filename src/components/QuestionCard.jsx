export default function QuestionCard(props) {
  let question = props.question;
  return (
    <div className="border px-2 py-1 rounded-md shadow-md my-10">
      <h1 className="font-bold">{question.title}</h1>
      <p className="mb-3">{question.description}</p>
      <hr />
      <p className="px-1 mt-3 underline">Answer:</p>
      <input type="text" className="h-20 border rounded-md mb-2 w-full" />
      <div>
        <button className="px-2 py-1 rounded bg-transparent border-2 duration-200 hover:duration-200 hover:text-white hover:bg-green-600 border-green-600 font-bold text-green-600 mb-1">Submit</button>
      </div>
    </div>
  );
}
