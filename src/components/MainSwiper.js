import { MainSwip } from "./PageStyle";

function MainSwiper() {
  return (
    <MainSwip>
      <div class="headBg">
        <div class="firstBg">
          <h2>당신이 원한다면<br />당신은 날수도 있다.<br />자신을 믿어라.</h2>
          <p>인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다.<br />즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.</p>
          <a href="#" class="ghostBtn">자세히 보기</a>
        </div>
        <div class="slideBtn leftBtn"><a href="#"><i class="ri-arrow-left-s-line"></i></a></div>
        <div class="slideBtn rightBtn"><a href="#"><i class="ri-arrow-right-s-line"></i></a></div>
        <a href="#"><i class="ri-arrow-down-line"></i></a>
      </div>
    </MainSwip>
  );
}

export default MainSwiper;