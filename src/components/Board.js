import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { BoardBox } from './PageStyle';
import { Link } from "react-router-dom";

function Board() {
  return (
    <BoardBox>
      <div className="boardL">
        <div className="boardTitle">
          <h3>공지사항</h3>
          <Link to="/"><i className="ri-add-line"></i></Link>
        </div>
        <table className="notice">
          <tbody>
            <tr><td><Link to="/">심플전자의 제품 판매를 할 수 있는 제휴업체를 모집..</Link></td></tr>
            <tr><td><Link to="/">How to Jump-Start a Car With a Dead Battery</Link></td></tr>
            <tr><td><Link to="/">메일로 문의주시면 빠른 답변 드리고 있습니다.</Link></td></tr>
            <tr><td><Link to="/">반응형 홈페이지는 이제 선택이 아닌 필수입니다.</Link></td></tr>
          </tbody>
        </table>
      </div>
      <div className="boardR">
        <div className="boardTitle">
          <h3>갤러리</h3>
          <Link to="/"><i className="ri-add-line"></i></Link>
        </div>
        <table className="gallery">
          <tbody>
            <tr>
              <td>
                <img src="https://via.placeholder.com/640x480/DDDDDD" alt="img01" />
                <Link to="/">메일로 문의주시면 빠른 답변 드리고 있습니다.</Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://via.placeholder.com/640x480/DDDDDD" alt="img02" />
                <Link to="/">메일로 문의주시면 빠른 답변 드리고 있습니다.</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BoardBox>
  );
}

export default Board;