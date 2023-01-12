import React, {useEffect} from 'react';
 
const { kakao } = window;

const InMap = () => {
  useEffect(() => {
    let markers = [];
    const container = document.getElementById('kakaoMap'); // 지도를 표시할 div

    const options = {
        center: new window.kakao.maps.LatLng(37.54699, 127.09598),
        level: 4, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(container, options);

    const markerPosition  = new kakao.maps.LatLng(37.54699, 127.09598);
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);

  }, []);
  return (
    <>
      <div id='kakaoMap'></div>
    </>
  );
};

export default InMap;