import { useEffect } from "react";
import ProcessCard from "../ProcessCard/ProcessCard";
import ProcessCard2 from "../ProcessCard/ProcessCard2";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";

const Process = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_bg_filed"
      data-background="/assets/img/how_to_work_bg.svg"
    >
      <div className="cs_height_115 cs_height_lg_70"></div>
      <div className="container">
        <div className="cs_section_heading_1_with_sub">
          <div className="cs_section_heading cs_style_1">
            <SectionTitle
              Title="Our Simple Process"
              SubTitle="How it works"
            ></SectionTitle>
          </div>
        </div>
        <div className="cs_height_45 cs_height_lg_45"></div>
        <div className="cs_card_1_wrap">
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Free Evaluation"
              Content="Our team will evaluate your needs and provide a comprehensive assessment of your HVAC system. Our quotes are free and come with no pressure—just honest advice tailored to your situation. We’ll recommend the best options for your home or business, ensuring optimal comfort and efficiency."
              Img="/assets/img/icons/why_chose_us_3.svg"
            ></ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
              Title="System Purchase and Installations"
              Content="Our certified technicians are trained in the latest installation techniques. We handle everything from equipment setup to ductwork modifications, ensuring that your new system operates flawlessly. We offer a range of high-efficiency HVAC systems from trusted brands, providing you with reliable options that enhance comfort and reduce energy costs."
              Img="/assets/img/icons/how_to_work_icon_2.svg"
            ></ProcessCard2>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard
              Title="Maintenance & Warranty"
              Content="We perform essential maintenance tasks, including cleaning coils, checking refrigerant levels, inspecting electrical connections, and replacing air filters to ensure optimal system performance. After your system is installed, we provide guidance on operation and maintenance, ensuring you get the most out of your investment."
              Img="/assets/img/icons/how_to_work_icon_3.svg"
            ></ProcessCard>
          </div>
          <div className="cs_card_1_col">
            <ProcessCard2
              Title="Emergency Service"
              Content="Our team is available around the clock to handle HVAC emergencies. Just give us a call, and we’ll dispatch a qualified technician to your location as quickly as possible. We carry a wide range of replacement parts and equipment to ensure prompt repairs. Our goal is to restore your comfort quickly and efficiently, minimizing downtime."
              Img="/assets/img/icons/why_chose_us_1.svg"
            ></ProcessCard2>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_70"></div>
    </section>
  );
};

export default Process;
