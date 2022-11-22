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
      <div className="w-72 h-64 border rounded-lg mx-auto p-4 px-a my-4" onClick={props.onClick}>
        <h1 className="font-bold text-lg text-center">
          {props.data.externalcode}
        </h1>
        <p className="">
          {props.data.title}
        </p>
        <button onClick={props.onClick} className="font-bold text-blue-600">Select Course</button>
      </div>
    </Fragment>

  )
}