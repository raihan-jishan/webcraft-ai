const Heading = ({ title, textLarge, textMedium, textSmall, borderSide , description, paragraph}) => { 
  return (
    <div className="text-center "> 
    <h1
      className={` ${textLarge ? "text-4xl" : ""} ${
        textMedium ? "text-3xl" : ""
      } ${
        textSmall ? "text-xl" : ""
      } font-bold   text-center capitalize tracking-wide `}
    >
      <span
        className={`${
          borderSide
            ? "border-2 text-gray-100 p-2 px-5   rounded-full border-primary"
            : ""
        }`}
      >
        {" "}
        {title}{" "}
     
      </span>
    </h1>
    <div className=" flex items-center justify-center">
    <h2 className="w-1/3 mt-8 text-4xl font-bold max-lg:w-full max-lg:p-4 max-lg:text-gray-200">{description}</h2>
    </div>
    <p className="mt-5 text-gray-200">{paragraph}</p>
    </div>
  );
};

export default Heading;
