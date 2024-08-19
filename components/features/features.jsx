import Heading from "@/components/ui/heading";
import { HeroAnimation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import FeatureImage from "@/public/svg/dashboard.svg";
import Image from "next/image";
const Features = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <HeroAnimation>
     <Heading title={' Start build your dream website'} textMedium/>
     <Wrapper>
     <div className="flex items-center justify-center mt-16">
          <Image src={FeatureImage} alt="feature image" className="w-11/12 max-lg:w-full"/>
        </div>
     </Wrapper>
      </HeroAnimation>
    </div>
  );
};

export default Features;
