import { BsWindowDesktop } from "react-icons/bs";
import { CiServer, CiShop } from "react-icons/ci";
import { FaPencilRuler } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSeoLine } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
export const navData = [
  { id: 0, name: "Pricing", path: "/#pricing" },
  { id: 1, name: "About", path: "/" },
  { id: 2, name: "Features", path: "/" },
  { id: 2, name: "Blog", path: "/" },
];

export const proccessData = [
  {
    icon: <SiGnuprivacyguard size={30} />,
    title: "Sign Up",
    info: "Create your free account to get started with webcraft.",
  },
  {
    icon: <FaPencilRuler size={30} />,
    title: "Customize",
    info: "Choose a template and customize it to fit your needs.",
  },
  {
    icon: <HiOutlineRocketLaunch size={30} />,
    title: "Launch",
    info: "Publish your website and share it with the world.",
  },
];

export const discoverData = [
  {
    icon: <LiaShippingFastSolid size={30} />,
    title: "Fast Setup",
    info: "Get your website up and running in minutes with our intuitive AI-powered builder.",
  },
  {
    icon: <IoColorPaletteOutline size={30} />,
    title: "Customizable Templates",
    info: "Choose from a variety of stunning templates and customize them to suit your brand.",
  },
  {
    icon: <RiSeoLine size={30} />,
    title: "SEO Optimized",
    info: "Choose from a variety of stunning templates and customize them to suit your brand.",
  },
  {
    icon: <BsWindowDesktop size={30} />,
    title: "Responsive Design",
    info: "Your website will look great on any device, from desktops to mobile phones.",
  },
  {
    icon: <CiShop size={30} />,
    title: "E-Commerce Ready",
    info: "Start selling online with our e-commerce features and integrations.",
  },
  {
    icon: <CiServer size={30} />,
    title: "Secure Hosting",
    info: "Enjoy peace of mind with secure and reliable hosting for your website.",
  },
];

export const pricingCards = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    buttonText: "Start for free",
    features: ["Limited projects", "1 Team member", "Basic features"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199",
    duration: "month",
    highlight: "Key features",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited projects",
      "5 Team members",
      "Advanced design tools",
      "Customizable domain",
    ],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Enterprise",
    description: "For serious agency owners",
    price: "$399",
    duration: "month",
    highlight: "Everything in Starter, plus",
    buttonText: "Upgrade to Enterprise",
    features: [
      "Unlimited projects",
      "Unlimited Team members",
      "Custom branding",
      "Priority support (24/7)",
    ],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];

export const clientReviewsData = [
  {
    name: " Emily H.  ",
    twitterHandle: "emilydesigns",
    review:
      "🚀 Just built my portfolio site with @WebCraftAI, and I'm amazed! Super easy, customizable templates, and the AI suggestions were spot on. My site is live and looking sleek! 🎨✨ #WebDesign #AI #Portfolio",
  },
  {
    name: "Mark T",
    twitterHandle: "@MarkT_SmallBiz",
    review:
      "🙌 Huge thanks to @WebCraftAI for making my business website a breeze to create. No coding needed and it looks professional! Already getting positive feedback from clients. Highly recommend! 💼👏 #SmallBusiness #WebsiteBuilder",
  },
  {
    name: "Sarah L",
    twitterHandle: "@SarahOnlineStore",
    review:
      "🛒 Loving @WebCraftAI for setting up my online store! The AI-driven design and setup were so easy and efficient. My store looks fantastic and runs smoothly. Thanks for making e-commerce simple! 🌟📦 #OnlineStore #Ecommerce",
  },
  {
    name: "David R",
    twitterHandle: "@DavidWrites",
    review:
      "📚 Just launched my new writer’s site with @WebCraftAI! The AI helped with design and SEO, making it look professional and effective. Excited for the new opportunities this site will bring! ✍️🚀 #FreelanceWriter #WebDesign",
  },
  {
    name: " Karen J",
    twitterHandle: "KarenEvents",
    review:
      "🎉 Just launched my event planning website with @WebCraftAI and it's stunning! The AI helped design a site that truly represents my brand. User-friendly and efficient. So excited! 🎊💻 #EventPlanning #WebsiteBuilder",
  },
  {
    name: " Lisa M",
    twitterHandle: "LisaMarketing",
    review:
      "🔥 Can’t get over how @WebCraftAI transformed my website! AI features are smart and user-friendly. My site looks amazing and attracts more clients. If you need a website, this is it! 🌟📈 #Marketing #WebsiteBuilder",
  },
];
