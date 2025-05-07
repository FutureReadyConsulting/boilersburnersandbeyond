import { Link } from "react-router-dom";

const About2 = ({Img,TitleUp,Title,Content,FeatureList,Experience,BioImg,BioName,BioContent}) => {
    return (
        <section>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="cs_about cs_style_1">
                <div className="container">
                <div className="row align-items-center cs_gap_y_40">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
                    <div className="cs_about_thumb">
                        <img src={Img} alt="About" />
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="cs_about_content">
                        <div className="cs_section_heading cs_style_1 cs_mb_22">
                        <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                            <img src="/assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" />
                            {TitleUp}
                        </h3>
                        <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">{Title}</h2>
                        </div>
                        <p className="cs_mb_30">{Content}</p>
                        {/* <div className="cs_list_2_wrap"> */}
                        <ul className="cs_list cs_style_2 cs_mp_0 cs_fs_24 cs_semibold cs_heading_font">
                        {FeatureList?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                       
                        {/* </div> */}
                        <div className="cs_height_40 cs_height_lg_30"></div>
                        <div className="cs_about_btns">
                         <Link to="/contact" className="cs_btn cs_style_1">
                            <span>Read More</span>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"></path>
                            </svg>                
                        </Link>   
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>



                <div className="container">
                <div className="row align-items-center cs_gap_y_40">
                    <br/><br/><br/><br/>
                    <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10" style={{fontSize: '30px'}}>
                           
                            More About Us
                        </h3>
                <p className="cs_mb_30">
                    

                Boilers, Burners, and Beyond is a reputable and trusted Metis-owned business that specializes in the servicing of a wide range of heating, venting, air conditioning (HVAC) systems, for clients in the Chilliwack, Abbotsford, Hope, Mission, and Langley areas. With a strong commitment to quality service, we offer expert services in installation, repair, servicing, and preventative maintenance for industrial, commercial, recreational, and residential settings. Our team is dedicated to providing high-quality, reliable, and fast services at reasonable prices.<br/><br/>

                In addition to our expertise in boilers and burners, we are also proud to offer comprehensive HVAC air conditioning services, including installation, repair, and maintenance. We understand the importance of a properly functioning HVAC system in maintaining a comfortable indoor environment, and we are committed to providing our clients with top-notch services to ensure their systems operate efficiently and effectively.

                <br/><br/>Our team of skilled technicians is highly experienced in working with a variety of HVAC systems and can provide expert guidance on optimizing your system to meet your specific needs. Whether you require a new installation, repairs, or regular maintenance, we have the knowledge and skills to deliver high-quality services that exceed your expectations.

                <br/><br/>At Boilers, Burners, and Beyond, we take pride in our ability to redesign systems and provide direction towards more efficient solutions to optimize the performance of your HVAC system. Our goal is to ensure that your system operates at peak efficiency, saving you money on energy costs and providing you with a comfortable indoor environment year-round.

                <br/><br/>In addition to our standard services, we also offer 24-hour emergency assistance for any sudden issues that may arise with your HVAC system. Our dedicated team is always on call, ready to provide prompt and reliable service to ensure that your system is back up and running smoothly as soon as possible.

                <br/><br/>As a fully insured business, we prioritize the security of our customers' investments and provide them with the peace of mind that comes with knowing their HVAC systems are in capable hands. Our commitment to quality, reliability, and customer satisfaction sets us apart as a trusted provider of HVAC services in the Chilliwack, Abbotsford, Hope, Mission, and Langley areas.

                <br/><br/>When you choose Boilers, Burners, and Beyond for your HVAC service needs, you can rest assured that you are receiving high-quality services from experts who are dedicated to delivering exceptional results. Contact us today to learn more about our services and discover how we can help optimize your HVAC system for maximum efficiency and comfort.
                </p>

                </div>
                </div>



            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
    );
};

export default About2;