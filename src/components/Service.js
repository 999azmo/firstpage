import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { ServiceBox } from "./PageStyle";

function Service() {
  return (
    <ServiceBox>
      <div className="mainTitle">
        <p className="miniTitle">Service</p>
        <h3>우리의 프로젝트 <br />특징입니다</h3>
      </div>
      <div className="txtBox txt1">
        <i className="ri-award-line"></i>
        <h4>Branding</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
      <div className="txtBox txt2">
        <i className="ri-calculator-line"></i>
        <h4>Development</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
      <div className="txtBox txt3">
        <i className="ri-chat-smile-2-line"></i>
        <h4>HTML5 Video</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
      <div className="txtBox txt4">
        <i className="ri-crop-line"></i>
        <h4>Analysis</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
      <div className="txtBox txt5">
        <i className="ri-code-s-slash-line"></i>
        <h4>Marketing</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
      <div className="txtBox txt6">
        <i className="ri-fingerprint-line"></i>
        <h4>Grid System</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
      <div className="txtBox txt7">
        <i className="ri-coins-line"></i>
        <h4>Pixel Perfect</h4>
        <p>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.</p>
      </div>
    </ServiceBox>
  );
}

export default Service;