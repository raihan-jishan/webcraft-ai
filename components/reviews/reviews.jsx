import { ReviewCard } from "@/components/ui/card";
import { clientReviewsData } from "@/constants";
import { HeroAnimation } from "@/global/Animation";
import Wrapper from "@/global/wrapper";
import Avatar from "@/public/images/man.jpg";
import Heading from "../ui/heading";

const Reviews = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
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
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
            {clientReviewsData.map((item, index) => {
              return (
                <ReviewCard
                  key={index}
                  name={item.name}
                  handle={item.twitterHandle}
                  review={item.review}
                  Avatar={Avatar}
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
