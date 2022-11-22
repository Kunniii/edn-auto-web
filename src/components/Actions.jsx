import { Fragment } from "react";

export default function Actions() {
  return (
    <Fragment>
      <div className="flex flex-col">
        <button className="text-white font-bold bg-blue-500 hover:bg-blue-800 rounded-full px-4 py-2 my-2 mx-auto">Individual Grade</button>
        <button className="text-white font-bold bg-blue-500 hover:bg-blue-800 rounded-full px-4 py-2 my-2 mx-auto">Presentation Grade</button>
        <button className="text-white font-bold bg-blue-500 hover:bg-blue-800 rounded-full px-4 py-2 my-2 mx-auto">Answer Vote</button>
        <button className="text-white font-bold bg-blue-500 hover:bg-blue-800 rounded-full px-4 py-2 my-2 mx-auto">Answer Question - Manual</button>
        <button className="text-white font-bold bg-blue-500 hover:bg-blue-800 rounded-full px-4 py-2 my-2 mx-auto">Answer Question - Copy</button>
      </div>
    </Fragment>
  )
}