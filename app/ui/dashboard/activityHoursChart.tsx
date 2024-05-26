"use client";
import * as React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

type ActivityHours = {
  date: string;
  exams_completed: number;
  hours: number;
  lessons_taken: number;
};
type ActivityHoursList = {
  activityHours: ActivityHours[];
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  tension: 0.333,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    // title: {
    //   display: true,
    //   text: "Activity Chart",
    // },
  },
  scales: {
    y: {
      display: true,
      beginAtZero: true,
      grid: {
        drawOnChartArea: false,
        color: "rgba(128, 128, 128, 128)",
        tickColor: "rgba(128, 128, 128, 128)",
      },
      ticks: {
        backdropColor: "rgba(128, 128, 128, 128)",
        color: "rgba(128, 128, 128, 128)",
        textStrokeColor: "rgba(128, 128, 128, 128)",
      },
      border: {
        color: "rgba(128, 128, 128, 128)",
      },
    },
    x: {
      display: true,
      grid: {
        drawOnChartArea: false,
        color: "rgba(128, 128, 128, 128)",
        tickColor: "rgba(128, 128, 128, 128)",
      },
      ticks: {
        backdropColor: "rgba(128, 128, 128, 128)",
        color: "rgba(128, 128, 128, 128)",
        textStrokeColor: "rgba(128, 128, 128, 128)",
      },
      border: {
        color: "rgba(128, 128, 128, 128)",
      },
    },
  },
};

export default function ActivityHoursChart({
  activityHours,
}: ActivityHoursList) {
  const labels = activityHours?.map((entry) => entry.date);
  const exams_completed = activityHours?.map((entry) => entry.exams_completed);
  const hours = activityHours?.map((entry) => entry.hours);
  const lessons_taken = activityHours?.map((entry) => entry.lessons_taken);

  const data = {
    labels,
    datasets: [
      {
        label: "exams completed",
        data: exams_completed,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "hours",
        data: hours,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
      {
        label: "lessons taken",
        data: lessons_taken,
        borderColor: "rgb(25, 244, 25)",
        backgroundColor: "rgba(25, 244, 25, 0.5)",
        yAxisID: "y",
      },
    ],
  };
  return (
    <>
      <h3
        className="px-2 py-2 font-semibold text-gray-500 align-middle border-b-[1px] border-gray-200 dark:border-gray-700">
        Activity Chart
      </h3>
      <div className="overflow-auto h-full ">
        <div className="min-w-[40rem]  h-full">
          <div className="flex justify-center items-center h-full w-full">
            <Line
              options={options}
              data={data}
              className="min-w-[20rem] min-h-[20rem] max-w-full max-h-full p-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
