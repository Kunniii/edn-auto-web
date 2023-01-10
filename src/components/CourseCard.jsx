import { Fragment } from "react";
/*
{
  "id": 717,
  "owner_Id": 7679,
  "owner": "huonglh3@fpt.edu.vn",
  "title": "Malware Analysis and Reverse Engineering_Phân tích mã độc và kỹ thuật dịch ngược",
  "permalink": "malware-analysis-and-reverse-engineering-iam302",
  "thumbnail": "",
  "summary": "Malware Analysis and Reverse Engineering_Phân tích mã độc và kỹ thuật dịch ngược",
  "externalcode": "IAM302",
  "price": 0,
  "classId": 2665,
  "listSlotSession": [],
  "totalSession": 0,
  "totalClass": 0,
  "totalStudent": 15,
  "totalActivity": 0
}
*/
export default function Course(props) {
  return (
    <Fragment>
      <div
        className="w-72 h-64 border rounded-lg mx-auto p-4 px-a my-4 bg-slate-100 duration-100 hover:duration-100 hover:cursor-pointer hover:drop-shadow-lg hover:bg-white"
        onClick={props.onClick}
      >
        <h1 className="font-bold text-lg text-center">
          {props.data.externalcode}
        </h1>
        <hr className="my-1" />
        <p className="h-36 overflow-clip">{props.data.title}</p>
        <p className="text-center font-bold border border-blue-500 rounded text-blue-600 px-5 py-2 hover:bg-blue-500 hover:text-white">
          Go to this course
        </p>
      </div>
    </Fragment>
  );
}
