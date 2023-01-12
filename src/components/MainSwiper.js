import { MainSwip } from "./PageStyle";
import "./mainSwiper.scss";
import MainSwiperBox from "./inner/MainSwiperBox";

function MainSwiper() {
  // const path = process.env.PUBLIC_URL;
  
  return (
    <MainSwip className="mainSwip">
      <MainSwiperBox />
    </MainSwip>
  );
}

export default MainSwiper;