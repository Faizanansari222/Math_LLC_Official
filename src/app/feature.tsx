"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  // CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    mainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4"
        />
        <path
          fill="currentColor"
          d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
        />
      </svg>
    ),
    icon: HeartIcon,
    title: "Business Formation",
    children:
      "Expert guidance on entity selection, registration procedures, compliance with federal and state regulation.",
  },
  {
    mainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 48 48"
      >
        <g fill="currentColor" fillRule="evenodd" clip-rule="evenodd">
          <path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" />
          <path d="M17 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2zm14 2H17v9h14zm-9.727 12.636a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0M24 26.273A1.636 1.636 0 1 0 24 23a1.636 1.636 0 0 0 0 3.273m6-1.637a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0m-10.364 6a1.636 1.636 0 1 0 0-3.272a1.636 1.636 0 0 0 0 3.272m6-1.636a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0m2.728 1.636a1.636 1.636 0 1 0 0-3.272a1.636 1.636 0 0 0 0 3.272M30 33.364a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0m-10.364-1.637a1.636 1.636 0 1 0 0 3.273H24a1.636 1.636 0 0 0 0-3.273z" />
        </g>
      </svg>
    ),
    icon: HeartIcon,
    title: "Accounting & Bookkeeping",
    children:
      "At MATH LLC, we meticulously maintain your financial records to accurate financial reporting for effective decision-making.",
  },
  {
    mainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M5 2a2 2 0 0 0-2 2v14l3.5-2l3.5 2l3.5-2l3.5 2V4a2 2 0 0 0-2-2zm2.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6.207.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414M12.5 10a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
          clip-rule="evenodd"
        />
      </svg>
    ),
    icon: LockClosedIcon,
    title: "Tax Services",
    children:
      "Trust MATH LLC for US Tax filing services, from expert tax planning and advisory to accurate and timely return filings.",
  },
  {
    mainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M3 20q-.825 0-1.412-.587T1 18V8q0-.425.288-.712T2 7t.713.288T3 8v10h16q.425 0 .713.288T20 19t-.288.713T19 20zm4-4q-.825 0-1.412-.587T5 14V6q0-.825.588-1.412T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.587 1.413T21 16zm2-2q0-.825-.587-1.412T7 12v2zm10 0h2v-2q-.825 0-1.412.588T19 14m-5-1q1.25 0 2.125-.875T17 10t-.875-2.125T14 7t-2.125.875T11 10t.875 2.125T14 13M7 8q.825 0 1.413-.587T9 6H7zm14 0V6h-2q0 .825.588 1.413T21 8"
        />
      </svg>
    ),
    icon: LightBulbIcon,
    title: "Payroll Management",
    children:
      "Streamline your payroll, from wage calculations to seamless tax filings, we ensure compliant, hassle-free service that support your business.",
  },
  {
    mainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="4"
        >
          <rect
            width="32"
            height="40"
            x="8"
            y="4"
            stroke-linejoin="round"
            rx="2"
          />
          <path
            fill="currentColor"
            stroke-linejoin="round"
            d="M16 4h9v16l-4.5-4l-4.5 4z"
          />
          <path d="M16 28h10m-10 6h16" />
        </g>
      </svg>
    ),
    icon: LightBulbIcon,
    title: "Compliances",
    children:
      "Stay Tax Compliant with Confidence and Maintain Your Business Legally with MATH LLC.",
  },
  {
    mainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M9 11a7 7 0 1 1 14 0a1 1 0 1 0 2 0a9 9 0 1 0-14.385 7.212a9 9 0 0 0 3.558 1.602a2 2 0 1 0 .216-2A7 7 0 0 1 9 11m1 0a6 6 0 1 1 7.913 5.689A3 3 0 0 0 16 16c-.727 0-1.393.259-1.913.689A6 6 0 0 1 10 11m6 11a3 3 0 0 0 2.83-4h5.67a3.5 3.5 0 0 1 3.5 3.5v.5c0 2.393-1.523 4.417-3.685 5.793C22.141 29.177 19.198 30 16 30s-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18h1.359a10 10 0 0 0 4.662 2.69c.54.791 1.45 1.31 2.479 1.31"
        />
      </svg>
    ),
    icon: LightBulbIcon,
    title: "Back Office Support",
    children:
      "Efficient operational support to streamline your business processes in one Window solution..",
  },
];

export function Features({ className }: any) {
  return (
    <section className={`${className}py-28 mt-10 px-4`}>
      <div className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold text-[#39b3e3] uppercase"
        >
          Your Business Ally
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-[#0c406e]"
        >
          Diverse Financial Solutions
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
