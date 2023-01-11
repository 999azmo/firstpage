import React from 'react';
import { TabBox } from "./PageStyle";

function TabSection() {
  return (
    <TabBox>
      <div className='mainTitle'>
        <p className="miniTitle">Tab Section</p>
        <h3>삶 전체에 있어 일이란 큰 비중을 차지한다.</h3>
      </div>
      <div className="tabContents">
        <div className="tabClick">
          <div className="branding tab">
            <h4>브랜딩</h4>
            <p>이 테마는 원하는 모든 작업을 수행하며 아름답게 디자인되었습니다.</p>
          </div>
          <div className="program tab">
            <h4>프로그램</h4>
            <p>이 테마는 원하는 모든 작업을 수행하며 아름답게 디자인되었습니다.</p>
          </div>
          <div className="publishing tab">
            <h4>퍼블리싱</h4>
            <p>이 테마는 원하는 모든 작업을 수행하며 아름답게 디자인되었습니다.</p>
          </div>
        </div>
        <div className="imgBox">
          <img src="./images/1205-01.jpg" alt="imgBox" />
        </div>
      </div>
    </TabBox>
  );
}

export default TabSection;