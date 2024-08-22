import { IoIosReturnRight } from "react-icons/io";

const MessageTitle = () => {
  return (
    <div>
      <a
        href="#"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm   rounded-full  bg-gray-800  text-white    hover:bg-gray-700 gap-1"
        role="alert"
      >
        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 ">
          New
        </span>{" "}
        <span className="text-sm font-medium max-lg:text-[0.9rem]">
          WebCraft.AI for all your website needs.
        </span>
        <IoIosReturnRight size={25} />
      </a>
      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
      </button>
    </div>
  );
};

export default MessageTitle;
