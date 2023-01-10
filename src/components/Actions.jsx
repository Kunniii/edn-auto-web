import { Fragment } from "react";

export default function Actions() {
  return (
    <Fragment>
      <div className="flex flex-col mt-8">
        <button className="hover:text-white font-bold bg-transparent hover:bg-blue-600 rounded-md px-4 py-2 my-2 mx-auto w-60 border-2 border-blue-600 text-blue-600 duration-150 hover:duration-150">Individual Grade</button>
        <button className="hover:text-white font-bold bg-transparent hover:bg-blue-600 rounded-md px-4 py-2 my-2 mx-auto w-60 border-2 border-blue-600 text-blue-600 duration-150 hover:duration-150">Presentation Grade</button>
        <button className="hover:text-white font-bold bg-transparent hover:bg-blue-600 rounded-md px-4 py-2 my-2 mx-auto w-60 border-2 border-blue-600 text-blue-600 duration-150 hover:duration-150">Answer Vote</button>
      </div>
    </Fragment>
  )
}