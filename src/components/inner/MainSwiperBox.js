import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";


function MainSwiperBox() {
  return (
    <>
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
        className="mySwiper MainBox"
      >
        <SwiperSlide>
          <div className="headBg">
            <div className="firstBg bg1">
              <h2>당신이 원한다면<br />당신은 날수도 있다.<br />자신을 믿어라.</h2>
              <p>인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다.<br />즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.</p>
              <a href="#" className="ghostBtn">자세히 보기</a>
            </div>
            <div className="slideBtn leftBtn"><a href="#">
              <i className="ri-arrow-left-s-line"></i></a></div>
            <div className="slideBtn rightBtn"><a href="#"><i className="ri-arrow-right-s-line"></i></a></div>
            <a href="#"><i className="ri-arrow-down-line"></i></a>
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div className="headBg">
            <div className="firstBg bg2">
              <h2>YOU WILL BE ABLE<br />TO GO ANYWHERE.</h2>
              <p>Powerful Layout with Responsive functionality that can be adapted to any screen size.<br />Resize browser to view.</p>
              <a href="#" className="ghostBtn">MORE VIEW</a>
            </div>
            <div className="slideBtn leftBtn"><a href="#"><i className="ri-arrow-left-s-line"></i></a></div>
            <div className="slideBtn rightBtn"><a href="#"><i className="ri-arrow-right-s-line"></i></a></div>
            <a href="#"><i className="ri-arrow-down-line"></i></a>
          </div>          
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainSwiperBox;