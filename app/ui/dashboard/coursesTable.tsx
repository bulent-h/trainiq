"use client";
import React, { FC, useEffect, useState } from "react";

interface Course {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
}

const colorMap = new Map([
    ["Upcoming", "text-blue-700 dark:text-blue-400 bg-blue-300 dark:bg-blue-900"],
    ["In Progress", "text-green-700 dark:text-green-400 bg-green-300 dark:bg-green-900"]
  ]);

function CoursesTable({ courses }: { courses: Course[] }) {
  const [sortedCourses, setSortedCourses] = useState<Course[]>([]);

  useEffect(() => {
    const sorted = [...courses].sort(
      (a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime()
    );
    setSortedCourses(sorted);
  }, [courses]);
  return (
    <>
      <h3 className="px-2 py-2 font-semibold text-gray-500 align-middle border-b-[1px] border-gray-200 dark:border-gray-700">
        Cousres 
      </h3>

      <div className="overflow-auto h-full p-5">
        <ol className="flex flex-row w-full h-full ">
          {sortedCourses.map((course, index) => (
            <li key={index} className="relative min-w-[15rem] ">
              <div className="flex items-center">
                <div className={`${colorMap.get(course.status)} z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white  dark:ring-gray-900 shrink-0`}>
                  <svg
                    className="w-3 h-3 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className={`${colorMap.get(course.status)} hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700`}></div>
              </div>
              <div className="mt-3 pr-4">
                <h3 className="text-base mb-2  font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {course.due_date}{" - " + course.status}
                </time>
                <p className="text-sm font-normal bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-1.5 rounded-xl text-gray-500 dark:text-gray-400">
                  {course.description}
                </p>
              </div>
            </li>
          ))}

        </ol>
      </div>
    </>
  );
}
export default CoursesTable;
