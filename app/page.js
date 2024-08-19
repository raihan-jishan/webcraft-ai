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
  Reviews,
} from "@/components";
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
      <Footer />
    </div>
  );
}
