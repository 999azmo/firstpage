import React from 'react';
import { Foot } from './PageStyle';

function Footer() {
  return (
    <Foot>
      <div className="footerL">
        <p>Copyrights &copy; 2021 All Rights Reserved by DYAMI.</p>
        <p><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></p>
      </div>
      <div className="footerR">
        <p>from.yami@gmail.com · 1234-5678</p>
      </div>
    </Foot>

  );
}

export default Footer;