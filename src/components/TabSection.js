import React from 'react';
import Tabinner from './inner/Tabinner';
import { TabBox } from "./PageStyle";

function TabSection() {
  const path = process.env.PUBLIC_URL;

  return (
    <TabBox>
      <div className='mainTitle'>
        <p className="miniTitle">Tab Section</p>
        <h3>삶 전체에 있어 일이란 큰 비중을 차지한다.</h3>
      </div>
      <div className="tabContents">
        <Tabinner />
      </div>
    </TabBox>
  );
}

export default TabSection;