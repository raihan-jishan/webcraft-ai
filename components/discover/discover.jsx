import { Heading } from "@/components/ui";
import { ProccessCard } from "@/components/ui/card";
import { discoverData } from "@/constants";
import { HeroAnimation as Animation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";

const Discover = () => {
  return (
    <div className="dark:bg-gray-900 py-12 text-black dark:text-white">
      <Animation>
        <Heading
          title={"Discover"}
          textSmall
          borderSide
          description={"Discover our powerful features"}
          paragraph={
            "webcraft offers a range of features to help you build a stunning website in no time"
          }
        />

        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {discoverData.map((item, index) => (
                <ProccessCard
                  key={index}
                  title={item.title}
                  description={item.info}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </Animation>
    </div>
  );
};

export default Discover;
