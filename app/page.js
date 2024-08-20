import {
  Discover,
  Features,
  Footer,
  Hero,
  Launch,
  Nav,
  NewsLetter,
  Pricing,
  Proccess,
  Reviews
} from "@/components";
import Blog from "@/components/blog/blog";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Proccess />
      <Discover />
      <Pricing />
      <Reviews />
      <Launch />
      <NewsLetter />
      <Blog /> 
      <Footer />
    </div>
  );
}
