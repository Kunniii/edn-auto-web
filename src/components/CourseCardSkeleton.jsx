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
export default function CourseCardSkeleton(props) {
  return (
    <Fragment>
      <div
        className="animate-pulse w-72 h-64 border rounded-lg mx-auto p-4 px-a my-4 bg-slate-100 duration-100 hover:duration-100 hover:cursor-pointer hover:drop-shadow-lg hover:bg-white"
      >
        <h1 className="font-bold text-lg text-center bg-slate-200">
          &nbsp;
        </h1>
        <hr className="my-1" />
        <p className="h-36 overflow-clip bg-slate-200">&nbsp;</p>
        <p className="text-center font-bold bg-slate-200">
          &nbsp;
        </p>
      </div>
    </Fragment>
  );
}
