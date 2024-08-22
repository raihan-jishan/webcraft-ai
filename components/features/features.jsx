import Heading from "@/components/ui/heading";
import { HeroAnimation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import FeatureImage from "@/public/svg/dashboard.svg";
import Image from "next/image";
const Features = () => {
  return (
    <section className="bg-gray-900  text-white p-4" id="features">
      <HeroAnimation>
     <Heading title={' Start build your dream website'} textMedium/>
     <Wrapper>
     <div className="flex items-center justify-center mt-16">
          <Image src={FeatureImage} alt="feature image" className="w-11/12 max-lg:w-full"/>
        </div>
     </Wrapper>
      </HeroAnimation>
    </section>
  );
};

export default Features;
