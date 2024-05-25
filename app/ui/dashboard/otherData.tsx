"use client";

type DataProps = {
  total_employees: number;
  total_completed_courses: number;
  average_employee_score: number;
};
function OtherData({ data,lang }: { data: DataProps,lang:any }) {
  return (
    <>
      <div className="p-1 h-full overflow-auto">
        <div className="flex sm:gap-2 gap-1.5 h-full sm:flex-row flex-col rounded-xl text-base text-gray-700 dark:text-gray-300">
          <div className="flex flex-col w-full p-1 justify-between items-center gap-1 bg-indigo-200  dark:bg-gray-800 dark:to-gray-950  border  border-gray-300 dark:border-gray-800 rounded-xl ">
            <div className=" text-center">{lang.data.total_completed_courses} </div>
            <div className="font-semibold">{data.total_completed_courses}</div>
          </div>
          <div className="flex flex-col w-full p-1 justify-between items-center gap-1 bg-indigo-200  dark:bg-gray-800 dark:to-gray-950  border  border-gray-300 dark:border-gray-800 rounded-xl ">
            <div className=" text-center">{lang.data.average_employee_score}</div>
            <div className="font-semibold">{data.average_employee_score}</div>
          </div>
          <div className="flex flex-col w-full p-1 justify-between items-center gap-1 bg-indigo-200  dark:bg-gray-800 dark:to-gray-950  border  border-gray-300 dark:border-gray-800 rounded-xl ">
            <div className=" text-center">{lang.data.total_employees}</div>
            <div className="font-semibold">{data.total_employees}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherData;
