"use client";
import React, { useMemo, useState } from "react";

type Employee = {
  current_score: number;
  email: string;
  name: string;
  title: string;
};

type TopEmployeesTableProps = {
  topEmployeesData: Employee[];
};

function TopEmployeesTable({ topEmployeesData }: TopEmployeesTableProps) {
  const [activeColumn, setActiveColumn] = useState(["current_score"]);
  const [sortingColumn, setSortingColumn] = useState(["current_score"]);
  const [sortingData, setSortingData] = useState(topEmployeesData);
  const [isOpen, setIsOpen] = useState(false);

  const sortByColumn = (column: keyof Employee) => {
    if (sortingColumn?.includes(column)) {
      const sortData = topEmployeesData
        .slice()
        .sort((a, b) =>
          b[column].toString().localeCompare(a[column].toString())
        );
      setSortingData(sortData);
      setSortingColumn([]);
    } else {
      const sortData = topEmployeesData
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
    const sortedEmployees = topEmployeesData
      .slice()
      .sort((a, b) => a.current_score - b.current_score);
    setSortingData(sortedEmployees);
  }, []);
  return (
    <>
      <h3 className="sticky top-0 px-2 py-2 font-semibold text-gray-500 align-middle border-b-[1px] border-gray-200 dark:border-gray-700">
        Top Employees
      </h3>

      <div className="overflow-auto ">
        <div className="min-w-[40rem] ">
          <div className="sticky top-0 flex flex-col bg-gray-50 dark:bg-gray-800 border-b-[1px] border-gray-200 dark:border-gray-700">
            <div className="flex flex-row justify-around text-sm">
              <span className="flex justify-start items-center w-[30%] py-2 pl-2 ">
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
              <span className="flex justify-start items-center w-[25%] py-2 pl-2 ">
                <svg
                  className={`w-4 h-4 cursor-pointer  ${
                    activeColumn?.includes("name")
                      ? "text-blue-400"
                      : "text-[#BCBDBE] group-hover:text-black rotate-180"
                  } ${
                    sortingColumn?.includes("name") ? "rotate-180" : "rotate-0"
                  } `}
                  onClick={() => sortByColumn("name")}
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
                  onClick={() => sortByColumn("name")}
                >
                  Name
                </span>
              </span>
              <span className="flex justify-start items-center w-[30%] py-2 pl-2 ">
                <div className="flex items-center">
                  <svg
                    className={`w-4 h-4 cursor-pointer  ${
                      activeColumn?.includes("email")
                        ? "text-blue-400"
                        : "text-[#BCBDBE] group-hover:text-black rotate-180"
                    } ${
                      sortingColumn?.includes("email")
                        ? "rotate-180"
                        : "rotate-0"
                    } `}
                    onClick={() => sortByColumn("email")}
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
                    onClick={() => sortByColumn("email")}
                  >
                    Email
                  </span>
                </div>
              </span>
              <span className="flex justify-start items-center w-[15%] py-2 pl-2 ">
                <svg
                  className={`w-4 h-4 cursor-pointer   ${
                    sortingColumn?.includes("current_score")
                      ? "rotate-180"
                      : "rotate-0"
                  } ${
                    activeColumn?.includes("current_score")
                      ? "text-blue-400"
                      : "text-[#BCBDBE] group-hover:text-black rotate-180"
                  }`}
                  onClick={() => sortByColumn("current_score")}
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
                  onClick={() => sortByColumn("current_score")}
                >
                  Current Score
                </span>
              </span>
            </div>
          </div>
          <div className="">
            <ul className="w-full py-2 px-1 bg-white dark:bg-gray-900">
              {sortingData?.map((data, index) => (
                <li
                  key={index}
                  className="flex flex-col font-light hover:bg-blue-50 text-gray-700 dark:text-gray-300 dark:hover:bg-[#444455]  xtransition ease-in delay-50  odd:bg-white dark:odd:bg-gray-900 even:bg-gray-50 dark:even:bg-gray-800  "
                >
                  <div className="flex flex-row justify-around text-sm overflow-auto h-full">
                    <span className="flex justify-start items-center w-[30%] py-2 pl-2 my-1.5 ">
                      {data?.title}
                    </span>
                    <span className="flex justify-start items-center w-[25%] py-2 pl-2 my-1.5 ">
                      {data?.name}
                    </span>
                    <span className="flex justify-start items-center w-[30%] py-2 pl-2 my-1.5 ">
                      {data?.email}
                    </span>
                    <span className="flex justify-center items-center w-[15%] py-2 pl-2 my-1.5 ">
                      {data?.current_score}
                    </span>
                  </div>
                </li>
              ))}
           
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopEmployeesTable;
