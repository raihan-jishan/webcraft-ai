import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CiTwitter } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      props.className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", props.className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef((props, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      props.className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef((props, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", props.className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef((props, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", props.className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", props.className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const PricingCard = ({ card }) => {
  return (
    <Card
      key={card.title}
      className={cn(
        "flex flex-col w-full border-neutral-700 p-6 bg-gray-800",
        card.title === "Unlimited Saas" && "border-2 border-primary"
      )}
    >
      <CardHeader className="  border-border">
        <span className="text-xl  ">{card.title}</span>
        <CardTitle
          className={cn(
            card.title !== "Unlimited Saas  " && "text-muted-foreground"
          )}
        >
          <span className="mt-5 text-3xl font-bold tracking-tight text-gray-50">
            {card.price}
          </span>
        </CardTitle>
        <div className="mt-2 text-xl font-normal text-gray-200">
          <CardDescription>{card.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-10 space-y-2">
        {card.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="w-4 h-4 fill-primary text-primary">
              <IoMdCheckmarkCircleOutline size={20} />
            </span>
            <p>{feature}</p>
          </div>
        ))}
      </CardContent>
      <div className="mt-auto">
        <CardFooter className=" mt-10 ">
          <Link
            href={"/"}
            className={cn(
              "w-full text-center flex items-center justify-center font-semibold  bg-white text-black  p-2 rounded-md text-sm hover:scale-95 transition-all ",
              card.title === "Unlimited Saas" && "bg-primary text-black"
            )}
          >
            {card.buttonText}
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

const ProccessCard = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 transition-all hover:bg-gray-800 rounded-2xl    ">
      <div className="flex items-center justify-center text-primary hover:animate-pulse">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-200 mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2 text-start lg:text-start text-gray-400">
        {description}
      </p>
    </div>
  );
};

const ReviewCard = ({ name, handle, review, Avatar }) => {
  return (
    <div class="flex flex-col justify-between rounded-md    bg-gray-800  p-5 shadow-sm max-w-sm mx-auto mt-24 ">
      <div class="mt-6 flex items-center gap-6 ">
        <div class="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
          <div class="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <Image
              alt=""
              src={Avatar}
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              class="inline-block "
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h2 class="leading-relaxed tracking-wide text-xl text-gray-200">
            {name}
          </h2>
          <p class="text-[1rem] leading-relaxed tracking-wide text-gray-400 flex gap-3">
            <CiTwitter size={25} className="text-primary " /> @{handle}
          </p>
        </div>
      </div>
      <p class="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
        {review}
      </p>
    </div>
  );
};

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  PricingCard,
  ProccessCard,
  ReviewCard
};

