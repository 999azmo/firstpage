import React from 'react';
import { VideoBg } from './PageStyle';

function Youtube() {
  const path = process.env.PUBLIC_URL;

  return (
    <VideoBg>
      <div className="videoPlay">
        <video src={path + "/videos/1205-Day.mp4"} muted loop autoPlay></video>
        <div className="ytContents">
          <p className="miniTitle">Youtube Background</p>
          <h3>Your new project?<br />Please get in touch.</h3>
          <a href="#" className="ytBtn">자세히보기</a>
        </div>
      </div>
    </VideoBg>
  );
}

export default Youtube;