import { ReviewCard } from "@/components/ui/card";
import { clientReviewsData } from "@/constants";
import { HeroAnimation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import Heading from "../ui/heading";

const Reviews = () => {
  return (
    <div className=" bg-gray-900 text-white p-4">
      <HeroAnimation>
        <Heading
          title={"reviews"}
          textSmall
          borderSide
          description={"What people are saying"}
          paragraph={
            "See how webcraft.ai empowers businesses of all sizes. Here's what real people are saying on Twitter"
          }
        />
        <Wrapper className="flex flex-col items-center justify-center py-12 relative">
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:gap-28 py-10 md:py-20 flex-wrap max-w-4xl max-lg:gap-8">
            {clientReviewsData.map((item, index) => {
              return (
                <ReviewCard
                  key={index}
                  name={item.name}
                  handle={item.twitterHandle}
                  review={item.review}
                  Avatar={item.imageUrl}
                />
              );
            })}
          </div>
        </Wrapper>
      </HeroAnimation>
    </div>
  );
};

export default Reviews;
