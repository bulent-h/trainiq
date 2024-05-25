"use client";
import React, { useMemo, useState } from "react";

type Skill = {
  employees: number;
  skill: string;
};

function TopSkillsTable({
  topSkills,
  header,
}: {
  topSkills: Skill[];
  header: string;
}) {
  const [activeColumn, setActiveColumn] = useState(["employees"]);
  const [sortingColumn, setSortingColumn] = useState(["employees"]);
  const [sortingData, setSortingData] = useState(topSkills);
  const [isOpen, setIsOpen] = useState(false);

  const sortByColumn = (column: keyof Skill) => {
    if (sortingColumn?.includes(column)) {
      const sortData = topSkills
        .slice()
        .sort((a, b) =>
          b[column].toString().localeCompare(a[column].toString())
        );
      console.log(sortData);
      setSortingData(sortData);
      setSortingColumn([]);
    } else {
      const sortData = topSkills
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
    const sortedEmployees = topSkills
      .slice()
      .sort((a, b) => a.employees - b.employees);
    setSortingData(sortedEmployees);
  }, []);
  return (
    <>
      <h3
        className="sticky top-0 px-2 py-2 font-semibold text-gray-500 align-middle border-b-[1px] border-gray-200 dark:border-gray-700"
      >
        {header}
      </h3>
      <div className="overflow-auto ">
        <div className="min-w-[15rem] ">
          <div className="sticky top-0 flex flex-col bg-gray-50 dark:bg-gray-800 border-b-[1px] border-gray-200 dark:border-gray-700">
            <div className="flex flex-row justify-around text-sm">
              <span className="flex justify-start items-center w-[60%] py-2 pl-2 ">
                <svg
                  className={`w-4 h-4 cursor-pointer  ${
                    activeColumn?.includes("skill")
                      ? "text-blue-400"
                      : "text-[#BCBDBE] group-hover:text-black rotate-180"
                  } ${
                    sortingColumn?.includes("skill") ? "rotate-180" : "rotate-0"
                  } `}
                  onClick={() => sortByColumn("skill")}
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
                  onClick={() => sortByColumn("skill")}
                >
                  Skill
                </span>
              </span>
              <span className="flex justify-start items-center w-[40%] py-2 pl-2 ">
                <svg
                  className={`w-4 h-4 cursor-pointer   ${
                    sortingColumn?.includes("employees")
                      ? "rotate-180"
                      : "rotate-0"
                  } ${
                    activeColumn?.includes("employees")
                      ? "text-blue-400"
                      : "text-[#BCBDBE] group-hover:text-black rotate-180"
                  }`}
                  onClick={() => sortByColumn("employees")}
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
                  onClick={() => sortByColumn("employees")}
                >
                  Employees
                </span>
              </span>
            </div>
          </div>
          <div className=" ">
            <ul className="w-full py-2 px-1 bg-white dark:bg-gray-900">
              {sortingData?.map((data, index) => (
                <li
                  key={index}
                  className="flex flex-col font-light hover:bg-blue-50 text-gray-700 dark:text-gray-300 dark:hover:bg-[#444455]  xtransition ease-in delay-50 odd:bg-white dark:odd:bg-gray-900 even:bg-gray-50 dark:even:bg-gray-800  "
                >
                  <div className="flex flex-row justify-around text-sm">
                    <span className=" w-[60%] py-2 pl-4 my-1.5 ">
                      {data?.skill}
                    </span>

                    <span className=" w-[40%] py-2 pl-4 my-1.5 ">
                      {data?.employees}
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
export default TopSkillsTable;
