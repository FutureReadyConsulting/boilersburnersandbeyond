import BreadCumb from "../Components/Common/BreadCumb";
import ContactCard from "../Components/ContactCard/ContactCard"
import Form3 from "../Components/Form/Form3";
import { useLayoutEffect } from 'react';

const Contact = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    
    return (
        <div className="contact-page">
            <BreadCumb Title="Contact Us"></BreadCumb>
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_gap_y_50">
                    <div className="col-xxl-6 col-lg-7">
                        <h2 className="cs_fs_48 cs_semibold cs_mb_22">Contact Information</h2>
                        <p className="cs_mb_30">At Boilers Burners and Beyond, we’re here to help you with all your HVAC needs! Whether you have questions about our services, need a free quote, or want to schedule a maintenance appointment, our friendly team is ready to assist you.</p>
                        <div className="row cs_gap_y_30 cs_row_gap_30">
                        <a href="https://maps.app.goo.gl/stUPksVEFPtvhp4c8"><ContactCard
                            img="/assets/img/icons/contact_icon_1.svg"
                            Title="Our Address"
                            Content="5355 Chinook St. Chilliwack, <br>British Columbia V2R 0A4"
                        >
                        </ContactCard></a>
                        <a href="tel:+16046368877"> <ContactCard
                            img="/assets/img/icons/contact_icon_2.svg"
                            Title="Phone Number"
                            Content="+1 (604) 636 8877"
                        >
                        </ContactCard></a>
                        <a href="mailto:sales.boilersburnersandbeyond@gmail.com">
                        <ContactCard
                            img="/assets/img/icons/contact_icon_3.svg"
                            Title="Email Address"
                            Content="sales.boilersburnersandbeyond@ gmail.com"
                        >
                        </ContactCard></a>
                                           
                        </div>
                        <div className="cs_height_35 cs_height_lg_35"></div>
                        <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow Our Facebook:</h3>
                        <div className="cs_social_btns cs_style_1 cs_type_1">
                        <a href="https://www.facebook.com/boilersburnersandbeyond/" className="cs_social_btn cs_center">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75391 8.625H5.70312V14.75H2.96875V8.625H0.726562V6.10938H2.96875V4.16797C2.96875 1.98047 4.28125 0.75 6.27734 0.75C7.23438 0.75 8.24609 0.941406 8.24609 0.941406V3.10156H7.125C6.03125 3.10156 5.70312 3.75781 5.70312 4.46875V6.10938H8.13672L7.75391 8.625Z" fill="#010F34"/>
                                </svg>
                        </a>
                        </div>
                    </div>
                    <div className="col-xxl-5 offset-xxl-1 col-lg-5">
                        <Form3></Form3>
                    </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
                </section>
                {/* <div className="cs_map">
                    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd" allowfullscreen></iframe>
                </div> */}

        </div>
    );
};

export default Contact;