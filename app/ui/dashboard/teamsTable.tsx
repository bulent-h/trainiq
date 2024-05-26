"use client";
import React, { useMemo, useState } from "react";
import Accordion from "../components/accordion";
import list, { List } from "postcss/lib/list";
import ActionButton from "../components/actionButton";
type Team = {
  description: string;
  employees: Employee[];
  overall_score: number;
  title: string;
  total_employee_count: number;
};
type Teams = {
  teams: Team[];
};
type Employee = {
  name: string;
  current_score: number;
  email: string;
  lessons_taken: number;
  skills_being_developed: string[];
  title: string;
};
const array1 = [1, 4, 9, 16, 3, 5, 8];
function TeamsTable({ teams }: Teams) {
  const [activeColumn, setActiveColumn] = useState(["overall_score"]);
  const [sortingColumn, setSortingColumn] = useState(["overall_score"]);
  const [sortingData, setSortingData] = useState(teams);

  const sortByColumn = (column: keyof Team) => {
    if (sortingColumn?.includes(column)) {
      const sortData = teams
        .slice()
        .sort((a, b) =>
          b[column].toString().localeCompare(a[column].toString())
        );
      setSortingData(sortData);
      setSortingColumn([]);
    } else {
      const sortData = teams
        .slice()
        .sort((a, b) =>
          a[column].toString().localeCompare(b[column].toString())
        );
      setSortingData(sortData);
      setSortingColumn([`${column}`]);
    }
    setActiveColumn([`${column}`]);
  };

  useMemo(() => {
    const sortedEmployees = teams
      .slice()
      .sort((a, b) => a.overall_score - b.overall_score);
    setSortingData(sortedEmployees);
  }, [teams]);
  return (
    <>
      <h3 className="sticky top-0 px-2 py-2 font-semibold text-gray-500 align-middle border-b-[1px] border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          <p>Teams</p>
          {/* <button className="border-2 text-gray-100 dark:text-gray-100 border-gray-300 dark:border-gray-700 bg-green-500 dark:bg-green-500 text-xs rounded-xl p-2 hover:bg-green-400 active:bg-gray-400 dark:active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300">Create New Team +</button> */}
          <ActionButton text="Create New Team +" />
        </div>
      </h3>
      <div className="overflow-auto ">
        <div className="min-w-[50rem] ">
          <div className="sticky top-0 flex flex-col bg-gray-50 dark:bg-gray-800  border-b-[1px] border-gray-200 dark:border-gray-700">
            <div className="flex flex-row justify-around text-sm">
              <span className="flex justify-start items-center lg:w-[15%] w-[20%] py-2 pl-2">
                <div className="flex items-center ">
                  <svg
                    className={`w-4 h-4 cursor-pointer  ${
                      activeColumn?.includes("title")
                        ? "text-blue-400"
                        : "text-[#BCBDBE] group-hover:text-black rotate-180"
                    } ${
                      sortingColumn?.includes("title")
                        ? "rotate-180"
                        : "rotate-0"
                    }
       `}
                    onClick={() => sortByColumn("title")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <span
                    className="cursor-pointer pl-1"
                    onClick={() => sortByColumn("title")}
                  >
                    Title
                  </span>
                </div>
              </span>
              <span className="flex justify-start items-center lg:w-[15%] w-[15%] py-2 pl-2">
                <div className="flex items-center">
                  <svg
                    className={`w-4 h-4 cursor-pointer  ${
                      activeColumn?.includes("total_employee_count")
                        ? "text-blue-400"
                        : "text-[#BCBDBE] group-hover:text-black rotate-180"
                    } ${
                      sortingColumn?.includes("total_employee_count")
                        ? "rotate-180"
                        : "rotate-0"
                    } `}
                    onClick={() => sortByColumn("total_employee_count")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <span
                    className="cursor-pointer pl-1"
                    onClick={() => sortByColumn("total_employee_count")}
                  >
                    Total Employees
                  </span>
                </div>
              </span>
              <span className="flex justify-start items-center lg:w-[15%] w-[10%] py-2 pl-2">
                <svg
                  className={`w-4 h-4 cursor-pointer  ${
                    activeColumn?.includes("overall_score")
                      ? "text-blue-400"
                      : "text-[#BCBDBE] group-hover:text-black rotate-180"
                  } ${
                    sortingColumn?.includes("overall_score")
                      ? "rotate-180"
                      : "rotate-0"
                  } `}
                  onClick={() => sortByColumn("overall_score")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span
                  className="cursor-pointer pl-1"
                  onClick={() => sortByColumn("overall_score")}
                >
                  Overall Score
                </span>
              </span>
              <span className="flex justify-start items-center lg:w-[55%] w-[50%] py-2 pl-2">
                <svg
                  className={`w-4 h-4 cursor-pointer   ${
                    sortingColumn?.includes("description")
                      ? "rotate-180"
                      : "rotate-0"
                  } ${
                    activeColumn?.includes("description")
                      ? "text-blue-400"
                      : "text-[#BCBDBE] group-hover:text-black rotate-180"
                  }`}
                  onClick={() => sortByColumn("description")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span
                  className="cursor-pointer pl-1"
                  onClick={() => sortByColumn("description")}
                >
                  Description
                </span>
              </span>
            </div>
          </div>
          <div className="">
            <ul className="w-full py-2 px-1 bg-white dark:bg-gray-900">
              {sortingData?.map((team, index) => (
                <li
                  key={index}
                  className="rounded-xl  text-gray-700 dark:text-gray-300  odd:bg-white dark:odd:bg-gray-900 even:bg-gray-50 dark:even:bg-gray-800"
                >
                  <Accordion team={team} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamsTable;
