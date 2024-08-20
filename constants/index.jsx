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
  { id: 1, name: "About", path: "/aboutus" },
  { id: 2, name: "Features", path: "/#features" },
  { id: 2, name: "Blog", path: "/#blog" },
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
    imageUrl:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
    twitterHandle: "emilydesigns",
    review:
      "🚀 Just built my portfolio site with @WebCraftAI, and I'm amazed! Super easy, customizable templates, and the AI suggestions were spot on. My site is live and looking sleek! 🎨✨ #WebDesign #AI #Portfolio",
  },
  {
    name: "Mark T",
    imageUrl:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
    twitterHandle: "@MarkT_SmallBiz",
    review:
      "🙌 Huge thanks to @WebCraftAI for making my business website a breeze to create. No coding needed and it looks professional! Already getting positive feedback from clients. Highly recommend! 💼👏 #SmallBusiness #WebsiteBuilder",
  },
  {
    name: "Sarah L",
    imageUrl:
      "https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=",
    twitterHandle: "@SarahOnlineStore",
    review:
      "🛒 Loving @WebCraftAI for setting up my online store! The AI-driven design and setup were so easy and efficient. My store looks fantastic and runs smoothly. Thanks for making e-commerce simple! 🌟📦 #OnlineStore #Ecommerce",
  },
  {
    name: "David R",
    imageUrl:
      "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    twitterHandle: "@DavidWrites",
    review:
      "📚 Just launched my new writer’s site with @WebCraftAI! The AI helped with design and SEO, making it look professional and effective. Excited for the new opportunities this site will bring! ✍️🚀 #FreelanceWriter #WebDesign",
  },
  {
    name: " Karen J",
    imageUrl:
      "https://media.istockphoto.com/id/1367421610/photo/view-of-young-man-using-a-smartphone-at-night-time-with-city-view-landscape-in-the-background.jpg?s=612x612&w=0&k=20&c=R-xLj6I24tWVuOrO2qHVwnmyILwCXmcHVQk9MAr4bmg=",
    twitterHandle: "KarenEvents",
    review:
      "🎉 Just launched my event planning website with @WebCraftAI and it's stunning! The AI helped design a site that truly represents my brand. User-friendly and efficient. So excited! 🎊💻 #EventPlanning #WebsiteBuilder",
  },
  {
    name: " Lisa M",
    twitterHandle: "LisaMarketing",

    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeTmFOlKte5xg6QX4HMdYjD9wLaUWLl5bbA&s",
    review:
      "🔥 Can’t get over how @WebCraftAI transformed my website! AI features are smart and user-friendly. My site looks amazing and attracts more clients. If you need a website, this is it! 🌟📈 #Marketing #WebsiteBuilder",
  },
];

export const blogData = [
  {
    title:
      "Revolutionizing Website Creation: How AI is Shaping the Future of Web Design",
    blogTag: "ai webcraft",
    description:
      "In the rapidly evolving digital landscape, the way we create websites is undergoing a significant transformation. Traditional web design, once dominated by hand-coding and extensive design processes, is being revolutionized by artificial intelligence (AI) ....",
    imageUrl:
      "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
    postedDate: "13days ago",
    authorName: "lily goe",
  },
  {
    title: " Automated Design Generation",
    blogTag: "ai webcraft",
    description:
      "AI-powered website builders are making it easier than ever to create stunning designs. Tools like Wix’s ADI (Artificial Design Intelligence) and Bookmark’s AIDA use AI to generate custom website designs based on user input. By analyzing your content and preferences, these platforms can produce a design that reflects your brand's identity and meets your needs without requiring manual coding.....",
    imageUrl:
      "https://i.pinimg.com/736x/b6/5e/ed/b65eed9bc16a890d4105fe285dbd81b1.jpg",
    postedDate: "13days ago",
    authorName: "sonr lee",
  },
];
