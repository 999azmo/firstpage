import React from 'react';
import { Map } from './PageStyle';

function MapSection() {
  return (
    <Map>
      <div className="mainTitle">
        <p className="miniTitle">Map Section</p>
        <h3>찾아오시는 길</h3>
      </div>
      <div id="kakaoMap"></div>
      <div className="mapInfo">
        <div className="infoList">
          <h4>주소</h4>
          <p>서울특별시 중구 세종대로 110</p>
        </div>
        <div className="infoList">
          <h4>대표번호</h4>
          <p>Mobile: +62-111-222-333</p>
          <p>Fax: (+62)-11-4752-1433</p>
        </div>
        <div className="infoList">
          <h4>업무시간</h4>
          <p>평일 09:00~18:00</p>
          <p>점심시간 12:00~13:00</p>
        </div>
      </div>
    </Map>
  );
}

export default MapSection;