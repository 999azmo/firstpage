import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

function PopupSwiper() {
  const path = process.env.PUBLIC_URL;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{height:"150px"}}>
          <div className="popupPlay">
            <img src={path + "/images/1205-02.jpg"} alt="Popup1" />
            <a href="#" className="iconBox">
              <i className="ri-add-line"></i>
            </a>
          </div>
          <h4>하나의 이미지</h4>
          <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popupPlay">
            <img src={path + "/images/1205-03.jpg"} alt="Popup2" />
            <a href="#" className="iconBox">
              <i className="ri-file-copy-line"></i>
            </a>
          </div>
          <h4>앨범 이미지</h4>
          <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popupPlay">
            <img src={path + "/images/1205-04.jpg"} alt="Popup3" />
            <a href="#" className="iconBox">
              <i className="ri-play-fill"></i>
            </a>
          </div>
          <h4>비디오 플레이</h4>
          <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="popupPlay">
            <img src={path + "/images/1205-05.jpg"} alt="Popup4" />
            <a href="#" className="iconBox">
              <i className="ri-link"></i>
            </a>
          </div>
          <h4>사이트 링크</h4>
          <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PopupSwiper;