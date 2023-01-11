import React from 'react';
import { Contact } from './PageStyle';

function ContactUs(props) {
  return (
    <Contact>
      <div className="contactL">
        <p className="miniTitle">Contact Us</p>
        <h3>궁금한 내용이 <br />있으신가요?</h3>
        <p>궁금하신 내용을 남겨주시면 <br />담당 부서에서 확인 후 답변 드리겠습니다.</p>
      </div>
      <div className="contactR">
        <p>회사명</p><input type="text" id="companyName" />
        <p>연락처</p><input type="text" id="userNumber" />
        <p>메일주소</p><input type="email" id="userMail" />
        <p>문의내용</p>
        <textarea name="inquiry" id="inquiry"></textarea>
        <button className="send">개인정보 동의 후 전송</button>
      </div>
    </Contact>
  );
}

export default ContactUs;