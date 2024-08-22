 
/* eslint-disable react/no-unescaped-entities */ 
import { HeroTitle, MessageTitle } from "@/components/ui";
import Featured from "../ui/featured";
 
const Hero = () => {
  return (
    <section className=" text-white bg-gray-900 mt-14">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       <MessageTitle />

      <HeroTitle /> 
      <Featured /> 
      </div>
    </section>
  );
};

export default Hero;
