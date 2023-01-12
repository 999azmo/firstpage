import 'remixicon/fonts/remixicon.css';
import { Mock } from './PageStyle';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

function MockUp() {
  const path = process.env.PUBLIC_URL;

  return (
    <Mock>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mockupSwiper"
      >
        <SwiperSlide>
          <div className="mockupFlex">
            <div className="mockupLine line1">
              <div className="mainTitle">
                <p className="miniTitle">01</p>
                <h3>행복한 세상을 <br />위해 달려온 길</h3>
              </div>
              <div className="checkTxt">
                <i className="ri-check-line"></i>
                <p>Thinking at the junction of beauty and elegance to create strong, lasting and remarkable design and products.</p>
              </div>
              <div className="checkTxt">
                <i className="ri-check-line"></i>
                <p>Thinking at the junction of beauty and elegance to create strong, lasting and remarkable design and products.</p>
              </div>
            </div>
            <div className="mockupLine line2">
              <img src={path + "/images/1205-mockup.png"} alt="mockup" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="mockupFlex">
            <div className="mockupLine line1">
              <div className="mainTitle">
                <p className="miniTitle">02</p>
                <h3>Digital Marketing and Consulting</h3>
              </div>
              <div className="checkTxt">
                <p>Thinking at the junction of beauty and elegance to create strong, lasting and remarkable design and products.</p>
              </div>
              <div className="checkTxt">
                <p>Thinking at the junction of beauty and elegance to create strong, lasting and remarkable design and products.</p>
              </div>
            </div>
            <div className="mockupLine line2">
              <img src={path + "/images/1205-mockup.png"} alt="mockup" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Mock>
  );
}

export default MockUp;