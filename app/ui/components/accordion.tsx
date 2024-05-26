import { List } from "postcss/lib/list";
import React, { useState } from "react";
import ActionButton from "./actionButton";
type Team = {
  description: string;
  employees: Employee[];
  overall_score: number;
  title: string;
  total_employee_count: number;
};
type Employee = {
  name: string;
  current_score: number;
  email: string;
  lessons_taken: number;
  skills_being_developed: string[];
  title: string;
};
interface TeamProps {
  team: Team;
}
0;
const Accordion = ({ team }: TeamProps) => {
  const [isActive, setIsActive] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="overflow-auto h-full">
      <h2 className="flex flex-col font-light text-gray-700  xtransition ease-in delay-50 rounded-xl ">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="w-full p- font-medium border-b-0 border-gray-200 rounded-xl  dark:border-gray-700 "
        >
          <div className="flex flex-col font-light text-gray-700 dark:text-gray-300  rounded-xl  ">
            <div className="flex flex-row justify-around ">
              <span className="flex justify-start items-center lg:w-[15%] w-[20%] py-2 pl-2 text-sm my-1.5   ">
                {team.title}
              </span>
              <span className="flex justify-center items-center lg:w-[15%] w-[15%] py-2 pl-2 text-sm my-1.5   ">
                {team.total_employee_count}
              </span>
              <span className="flex justify-center items-center lg:w-[15%] w-[10%] py-2 pl-2 text-sm my-1.5   ">
                {team.overall_score}
              </span>

              <span className="flex justify-start items-center lg:w-[50%] w-[40%] py-2 pl-2 text-sm my-1.5   ">
                <div className="text-start ">
                  {isActive
                    ? team.description
                    : `${team.description.substring(0, 70)}`}
                  {team.description.length > 70 && (
                    <div className=" text-xs inline ">
                      ...
                      <div className="text-blue-400 dark:text-blue-700   hover:text-blue-500 dark:hover:text-blue-500">
                        {isActive ? " show less" : " show more"}
                      </div>
                    </div>
                  )}
                </div>
              </span>
              <span className="flex justify-start items-center w-[5%] py-3 px-4 text-sm my-1.5   ">
                <svg
                  className={`" w-3 h-3 shrink-0  ${
                    isActive ? "rotate-0" : "rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </button>
      </h2>

      {isActive && (
        <div className=" text-sm ">
          <div className="flex justify-end">
            <ActionButton text="Add New Employee" className="mx-3 w-fit" />
          </div>
          <div className="m-3 rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col bg-gray-50 dark:bg-gray-700  border-b-[1px] border-gray-200 dark:border-gray-700">
              <div className="flex flex-row justify-around text-sm">
                <span className="flex justify-start items-center w-[15%] py-1 pl-2">
                  Name
                </span>
                <span className="flex justify-start items-center w-[20%] py-1 pl-2">
                  Title
                </span>
                <span className="flex justify-start items-center w-[25%] py-1 pl-2">
                  Email
                </span>
                <span className="flex justify-start items-center w-[7.5%] py-1 pl-2">
                  Current Score
                </span>
                <span className="flex justify-start items-center w-[7.5%] py-1 pl-2">
                  Lessons Taken
                </span>
                <span className="flex justify-start items-center w-[40%] py-1 pl-2">
                  Skills Being Developed
                </span>
              </div>
            </div>
            {team?.employees.map((employee, index) => (
              <div
                key={index}
                className="flex flex-col font-light  text-gray-700 dark:text-gray-300   xtransition ease-in delay-50 odd:bg-white dark:odd:bg-gray-900 even:bg-gray-50 dark:even:bg-gray-800  "
              >
                <div className="flex flex-row justify-around text-sm">
                  <span className="flex justify-start items-center w-[15%] break-words py-1.5 pl-2  my-1">
                    {employee.name}
                  </span>
                  <span className="flex justify-start items-center w-[20%] break-words py-1.5 pl-2  my-1">
                    {employee.title}
                  </span>
                  <span className="flex justify-start items-center w-[25%] break-all py-1.5 pl-2  my-1">
                    {employee.email}
                  </span>
                  <span className="flex justify-start items-center w-[7.5%]  break-words py-1.5 pl-2  my-1">
                    {employee.current_score}
                  </span>
                  <span className="flex justify-start items-center w-[7.5%]  break-words py-1.5 pl-2  my-1">
                    {employee.lessons_taken}
                  </span>
                  <span className="flex justify-start items-center w-[40%] break-words py-1.5 pl-2  my-1">
                    {employee.skills_being_developed.map((skill, index) => (
                      <div key={index}>
                        {index == 0 ? " " : ", "}

                        {skill}
                      </div>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
