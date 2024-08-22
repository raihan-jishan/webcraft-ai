import { HeroAnimation } from "@/global/Animation";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroTitle = () => {
  return (
    <div>
      <HeroAnimation className={"flex items-center justify-center"}>
        <h1 className="mb-4 w-2/3   text-4xl font-extrabold tracking-tight   text-gray-900 md:text-5xl lg:text-6xl dark:text-white max-lg:w-full ">
          <span className="text-primary">Unleash Your Creativity</span>{" "}
          <span className="text-gray-200">with AI-Powered Website builder</span>
        </h1>
      </HeroAnimation>
      <HeroAnimation>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Zero code, maximum speed. Make professional sites easy, fast and fun
          while delivering best-in-class SEO, performance.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 gap-2 border-primary border-t border-b max-lg:border-2"
          >
            Learn more
            <FaArrowRightLong size={25} />
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border  focus:ring-4    text-white  border-gray-700  hover:bg-gray-700 focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
      </HeroAnimation>
    </div>
  );
};

export default HeroTitle;
