import { PricingCard } from "@/components/ui/card";
import { pricingCards } from "@/constants";
import { HeroAnimation as Animation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import Heading from "../ui/heading";

const Pricing = () => {
  return (
    <section className=" bg-gray-900 py-12  text-white" id="pricing">
      <Animation>
        <Heading
          title={"Pricing"}
          textSmall
          borderSide
          description={"Unlock the right plan for your business"}
          paragraph={
            "Choose the best plan for your business and start building your dream website today"
          }
        />
        <div className="flex items-center justify-center overflow-x-hidden">
          <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
              {pricingCards.map((card, index) => (
                <PricingCard key={index} card={card} />
              ))}
            </div>
          </Wrapper>
        </div>
      </Animation>
    </section>
  );
};

export default Pricing;
