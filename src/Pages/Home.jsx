import About from "../Components/Home/About";
import Blog from "../Components/Home/Blog";
import Choose from "../Components/Home/Choose";
import Faq from "../Components/Home/Faq";
import HomeSlider from "../Components/Home/HomeSlider";
import Process from "../Components/Home/Process";
import Services from "../Components/Home/Services";
import Team from "../Components/Home/Team";
import Testimonial from "../Components/Home/Testimonial";
import { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="home-area">
      <HomeSlider></HomeSlider>
      <About
        Img="/assets/img/about-main-3.jpg"
        TitleUp="About us"
        Title="Our Commitment to Comfort"
        Content="Our mission is to create comfortable living spaces through expert HVAC solutions, ensuring your family stays cozy year-round. Boilers, Burners, and Beyond is a Metis owned and operated servicer of a variety of heating, venting, and air conditioning systems for the Chilliwack, Abbotsford, Hope, Mission, and Langley area. We offer expert services in installation, repair, servicing, and preventative maintenance for industrial, commercial, recreational and residential settings."
        FeatureList={[
          "Air Conditioning",
          "Unit Heaters",
          "Make Up Air Systems",
          "Instant Hot Water Systems",
          "Heat Pumps and Furnaces",
          "Boilers",
        ]}
        NumberContent="CALL US 24/7 Line"
        Number="+1 (604) 703-9457"
      ></About>
      <Services></Services>
      <Team></Team>
      <Choose></Choose>
      {/* <Pricing></Pricing> */}
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Process></Process>
      <Blog></Blog>
    </div>
  );
};

export default Home;
