import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { PopupBox } from "./PageStyle";
import PopupSwiper from './inner/PopupSwiper';

function MultiPopup() {
  return (
    <PopupBox>
      <div className="mainTitle">
        <p className="miniTitle">Multi Popup</p>
        <h3>우리는 놀라운 것을 만들고 싶습니다</h3>
      </div>
      <div className="popupContainer">
        <PopupSwiper />
      </div>
    </PopupBox>
  );
}

export default MultiPopup;