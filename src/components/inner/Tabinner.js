import React, { useState } from 'react';

const tabData = [
  { id: 1, title: "브랜딩", img: "/images/1205-01.jpg" },
  { id: 2, title: "프로그램", img: "/images/1280x1000.jpg" },
  { id: 3, title: "퍼블리싱", img: "/images/1280x1000.jpg" },
];

function Tabinner() {
  const path = process.env.PUBLIC_URL;
  
  const [select, setSelect] = useState(1);
  const onTab = (e, id) => {
    e.preventDefault();
    setSelect(id);
  }

  return (
    <>
      <div className="tabClick">
        { tabData.map((item) => (
          <div key={item.id} 
            className={select === item.id ? "colorTab tab" : "tab"} 
            onClick={(e)=>onTab(e, item.id)}
          >
            <h4>{item.title}</h4>
            <p>이 테마는 원하는 모든 작업을 수행하며 아름답게 디자인되었습니다.</p>
          </div>
        ))}
      </div>
      <div className="imgBox">
        { select === 1 && <img src={path + `/images/1205-01.jpg`} alt="imgBox" /> || <img src={path + `/images/1280x1000.jpg`} alt="imgBox" /> }
      </div>
    </>
  );
}

export default Tabinner;