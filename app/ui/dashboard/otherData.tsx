"use client";

type DataProps = {
  total_employees: number;
  total_completed_courses: number;
  average_employee_score: number;
};
function OtherData({ data,lang }: { data: DataProps,lang:any }) {
  console.log(lang.data)
  return (
    <>
      <div className="p-2 h-full">
        <div className="flex gap-4 h-full rounded-xl text-gray-800 dark:text-gray-300">
          <div className="flex flex-col w-full py-1 justify-between items-center  gap-2 text-lg bg-indigo-200  dark:bg-indigo-950 dark:to-gray-950  border  border-gray-300 dark:border-gray-800 rounded-xl ">
            <div className="font-light text-center">{lang.data.total_completed_courses} </div>
            <div>{data.total_completed_courses}</div>
          </div>
          <div className="flex flex-col w-full py-1 justify-between items-center  gap-2 text-lg bg-indigo-200  dark:bg-indigo-950 dark:to-gray-950  border  border-gray-300 dark:border-gray-800 rounded-xl ">
            <div className="font-light text-center">{lang.data.average_employee_score}</div>
            <div>{data.average_employee_score}</div>
          </div>
          <div className="flex flex-col w-full py-1 justify-between items-center  gap-2 text-lg bg-indigo-200  dark:bg-indigo-950 dark:to-gray-950  border  border-gray-300 dark:border-gray-800 rounded-xl ">
            <div className="font-light text-center">{lang.data.total_employees}</div>
            <div>{data.total_employees}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherData;
