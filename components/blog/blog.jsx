import { blogData } from "@/constants";
import { HeroAnimation as Animation } from '@/global/Animation';
import { Heading } from "../ui";
import { BlogCard } from "../ui/card";
const Blog = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white" id="blog">
      <Animation>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Heading
          title={"blog"}
          textSmall
          borderSide
          description={"Our blog postes"}
          paragraph={
            "webcraft offers a range of features to help you build a stunning website in no time"
          }
        />
        <div className="grid gap-8 lg:grid-cols-2 mt-10">
          {blogData.map((item, index) => {
            return (
              <BlogCard
                key={index}
                authorName={item.authorName}
                blogDescription={item.description}
                blogTag={item.blogTag}
                avatarImage={item.imageUrl}
                blogTitle={item.title}
                publishedDate={item.postedDate}
              />
            );
          })}
        </div>
      </div>
      </Animation>
    </section>
  );
};

export default Blog;
