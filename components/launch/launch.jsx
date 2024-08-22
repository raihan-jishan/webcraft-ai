import { navigateBtn as NavBtn } from '@/components/ui/button';
import { HeroAnimation as Animation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import Heading from "../ui/heading";

const Launch = () => {
  return (
    <div className=" bg-gray-900 py-12  text-white">
      <Animation>
        <Heading title={"Launch"} textSmall borderSide />

        <Wrapper className="flex flex-col text-center  items-center justify-center  ">
          <h2 className="text-[3rem] mt-2 leading-snug text-primary font-bold w-1/2 max-lg:w-full">
            From Idea to Launch Faster Than Ever
          </h2>

          <NavBtn text={'Get start'} path={'/'}   />
        </Wrapper>
      </Animation>
    </div>
  );
};

export default Launch;
