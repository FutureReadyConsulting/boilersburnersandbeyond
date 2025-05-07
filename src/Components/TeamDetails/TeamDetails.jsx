import BreadCumb from "../Common/BreadCumb";
import { useLayoutEffect } from "react";

const TeamDetails = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="team-details">
      <BreadCumb Title="Team"></BreadCumb>
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="cs_team_member_details">
          <div className="container">
            <div className="row align-items-center cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_team_member_thumb">
                  <img
                    src="https://boilersburnersandbeyond.vercel.app/assets/img/about-main-3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="cs_fs_48 cs_semibold cs_mb_8">Tyler McGrugan</h2>
                <p className="cs_member_designation cs_accent_color cs_mb_30">
                  Owner/Director
                </p>
                <div className="cs_social_btns cs_style_1 cs_type_1 cs_mb_35">
                  <a
                    href="https://www.facebook.com/boilersburnersandbeyond/"
                    className="cs_social_btn cs_center"
                  >
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.08398 7.9375H5.17969V13.625H2.64062V7.9375H0.558594V5.60156H2.64062V3.79883C2.64062 1.76758 3.85938 0.625 5.71289 0.625C6.60156 0.625 7.54102 0.802734 7.54102 0.802734V2.80859H6.5C5.48438 2.80859 5.17969 3.41797 5.17969 4.07812V5.60156H7.43945L7.08398 7.9375Z"
                        fill="#010F34"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tylermcgrugan/"
                    className="cs_social_btn cs_center"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.53906 12H0.177734V4.4082H2.53906V12ZM1.3457 3.39258C0.609375 3.39258 0 2.75781 0 1.99609C0 0.955078 1.11719 0.294922 2.03125 0.828125C2.46289 1.05664 2.7168 1.51367 2.7168 1.99609C2.7168 2.75781 2.10742 3.39258 1.3457 3.39258ZM11.3496 12H9.01367V8.31836C9.01367 7.42969 8.98828 6.3125 7.76953 6.3125C6.55078 6.3125 6.37305 7.25195 6.37305 8.24219V12H4.01172V4.4082H6.27148V5.44922H6.29688C6.62695 4.86523 7.38867 4.23047 8.53125 4.23047C10.918 4.23047 11.375 5.80469 11.375 7.83594V12H11.3496Z"
                        fill="#010F34"
                      />
                    </svg>
                  </a>
                </div>
                <p className="cs_mb_25">
                  Professional consultation services to help you choose the
                  right air and of conditioning system for your home or business
                  needs. Site evaluation, as load calculation,
                </p>
                <ul className="cs_mp_0 cs_member_info_list">
                  <li>
                    <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">
                      Phone Number:
                    </span>
                    <span>+1 (604) 703-9457</span>
                  </li>
                  <li>
                    <span className="cs_fs_18 cs_medium cs_heading_font cs_heading_color">
                      Email:
                    </span>
                    <a href="mailto:example@gmail.com">
                      : sales@boilersburnersandbeyond.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_height_72 cs_height_lg_72"></div>
            <div className="row">
              <div className="col-lg-6">
                <div className="cs_pr_30">
                  <h3 className="cs_fs_30 cs_semibold cs_mb_25">About Me</h3>
                  <p className="mb-0">
                    Professional consultation services Site evaluation, load
                    calculation, system recommendations, and detailed cost
                    estimates Rapid response, on-site an diagnostics, immediate
                    repairs, and follow-up check Fast and efficient is for
                    installation of new air conditioning units <br />
                    <br />
                    Comprehensive system scan, fault detection, detailed report,
                    and conditionin recommended solutions Precision calibration
                    services to ensure your air for conditioning system is
                    operating at its optimal settings for maximum comfort and
                    efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default TeamDetails;
