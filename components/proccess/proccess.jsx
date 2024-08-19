import { ProccessCard } from "@/components/ui/card";
import { proccessData } from "@/constants";
import Wrapper from "@/global/wrapper";
import { HeroAnimation as Animation } from "../../global/Animation";
import Heading from "../ui/heading";
const Proccess = () => {
  return (
    <div className="dark:bg-gray-900 py-12 text-black dark:text-white">
      <Animation>
        <Heading
          title={"The proccess"}
          textSmall
          borderSide
          description={"Three steps to build your dream website"}
          paragraph={"Turn your vision into reality in just 3 simple steps"}
        />

        <Wrapper>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {proccessData.map((item, index) => {
                return (
                  <ProccessCard
                    key={index}
                    title={item.title}
                    description={item.info}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </div>
        </Wrapper>
      </Animation>
    </div>
  );
};

export default Proccess;
