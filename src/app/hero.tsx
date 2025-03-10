"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function  Hero({className, imgAnimation}:any) {
  return (
    <div className={` relative min-h-screen w-full`}>
      <header className="grid !min-h-[49rem] bg-[#0c406e] px-8">
        <div className={`${className}container mx-auto grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2`}>
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              YOUR PERFECT <br /> FINANCIAL ADVISE <br />{" "}
              <span className="text-white bg-[#b3201d] px-3 rounded-lg">
                MATH LLC
              </span>
              <div className="flex items-center">
                <div className="h-1 rounded-full mt-3 bg-white w-1/4"></div>
                <span className="h-2 ml-3 rounded-full mt-3 bg-gray-300 w-2"></span>
              </div>
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              MATH LLC empowers businesses with accurate bookkeeping, reliable
              financial reporting, and expert tax services for efficient
              compliance and strategic planning.
            </Typography>
            {/* <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography> */}
            {/* <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div> */}
          </div>
          {/* <Image
            width={570}
            height={676}
            src="/image/accountant"
            alt="team work"
            className={`col-span-1 mb-56   h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0 ${imgAnimation}`}
          /> */}
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3 text-[">
            Learning App
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
