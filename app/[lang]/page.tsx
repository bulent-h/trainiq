import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import ActivityHoursChart from "@/app/ui/dashboard/activity-hours-chart";
import TopEmployeesTable from "@/app/ui/dashboard/topEmployeesTable";
import { Suspense, useCallback, useEffect, useState } from "react";
import { TopEmployeesTableSkeleton } from "../ui/skeletons";
import LocaleSwitcher from "@/app/ui/buttons/LocaleSwitcher";
import TeamsTable from "../ui/dashboard/teamsTable";
import OtherData from "../ui/dashboard/otherData";
import TopSkillsTable from "../ui/dashboard/skillsTable";
import CoursesTable from "../ui/dashboard/coursesTable";
import { i18n } from "@/i18n.config";
import { getDictionary } from "../lib/dictionaries";

const fetchDataWithDelay = async (
  url = "https://demotrainiq.com/case/dashboard",
  delayTime = 4000
) => {
  const delay = (delayTime: number) =>
    new Promise((resolve) => setTimeout(resolve, delayTime));

  await delay(delayTime);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

export async function generateStaticParams() {
  return Object.keys(i18n.locales).map((locale) => ({ lang: locale }));
}
export default async function Page(props: any) {
  const res = await fetchDataWithDelay(
    "https://demotrainiq.com/case/dashboard",
    10
  );
  const { dashboard } = await getDictionary(props.params.lang);

  const {
    activity_hours,
    average_employee_score, //one data piece
    in_progress_courses,
    skills_in_development,
    teams,
    top_employees,
    top_skills,
    total_completed_courses, //one data piece
    total_employees, //one data piece
    upcoming_courses,
  } = res.data;

  return (
    <>
      <div className="lg:ml-[5rem] ml-0 px-6 py-6 overflow-hidden ">
        <div className="flex items-center justify-between rounded-xl shadow-xl bg-white dark:bg-gray-900 px-4 py-2">
          <h1 className="font-bold text-lg">Dashboard</h1>
          <div className="">
            <LocaleSwitcher svgSize={"w-[28px] h-[28px] "} />
          </div>
        </div>

        <div className="">
          <div className="overflow-hidden drop-shadow-lg h-full border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl mt-4">
            <div className="h-full flex flex-col px-1 py-1 ">
              <Suspense fallback={<TopEmployeesTableSkeleton />}>
                <OtherData
                lang={dashboard}
                  data={{
                    total_employees,
                    total_completed_courses,
                    average_employee_score,
                  }}
                />
              </Suspense>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 auto-rows-[minmax(auto,25rem)] gap-4 py-4">
            <div className="overflow-hidden drop-shadow-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl lg:col-span-6 ">
              <div className="h-full flex flex-col px-1 py-1 ">
                <Suspense fallback={<TopEmployeesTableSkeleton />}>
                  <ActivityHoursChart activityHours={activity_hours} />
                </Suspense>
              </div>
            </div>
            <div className="overflow-hidden drop-shadow-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl lg:col-span-6">
              <div className="h-full flex flex-col px-1 py-1 ">
                <Suspense fallback={<TopEmployeesTableSkeleton />}>
                  <CoursesTable
                    courses={[...in_progress_courses, ...upcoming_courses]}
                  />
                </Suspense>
              </div>
            </div>
            <div className="overflow-hidden drop-shadow-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl lg:col-span-6 ">
              <div className="h-full flex flex-col px-1 py-1 ">
                <Suspense fallback={<TopEmployeesTableSkeleton />}>
                  <TopEmployeesTable topEmployeesData={top_employees} />
                </Suspense>
              </div>
            </div>
            <div className="overflow-hidden drop-shadow-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl lg:col-span-3 ">
              <div className="h-full flex flex-col px-1 py-1 ">
                <Suspense fallback={<TopEmployeesTableSkeleton />}>
                  <TopSkillsTable
                    header={"Top Skills"}
                    topSkills={top_skills}
                  />
                </Suspense>
              </div>
            </div>
            <div className="overflow-hidden drop-shadow-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl lg:col-span-3 ">
              <div className="h-full flex flex-col px-1 py-1 ">
                <Suspense fallback={<TopEmployeesTableSkeleton />}>
                  <TopSkillsTable
                    header={"Skills in development"}
                    topSkills={skills_in_development}
                  />
                </Suspense>
              </div>
            </div>
            <div className="overflow-hidden drop-shadow-lg border bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-800 rounded-xl lg:col-span-9 ">
              <div className="h-full flex flex-col px-1 py-1 ">
                <Suspense fallback={<TopEmployeesTableSkeleton />}>
                  <TeamsTable teams={teams} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <main className=" max-w-7xl mx-auto my-12 bg-white dark:bg-gray-700 drop-shadow-lg p-6 rounded-xl">
<div>
  <p className="text-black dark:text-red-500">
    fkeopwkopfwk opwkefop
  </p>
     <TopEmployeesTable />
        <ActivityHoursChart />
</div>
</main> */
}
