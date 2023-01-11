import styled from "styled-components";
import "../assets/animation.css"
// Nav
export const Navi = styled.nav`
  text-transform: uppercase;
  display: flex;
  color: #444444;
  align-items: center;
  box-sizing: border-box;
  height: 100px;
  background-color: #fff;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, .1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  h1 {
    margin-left: 200px;
    margin-right: 50px;
  }
  ul > li > a { 
    padding: 39px 15px;
    font-weight: 700;
    letter-spacing: 1.5px;
    font-size: 19px;
  }
  ul li a:hover {
    color: #f5805a;
  }
  #gnb {
    display: flex;
  }
  #gnb li {
    position: relative;
  }
  #gnb .subMenu {
    background-color: #fff;
    box-shadow: 17px 6px 40px rgba(0, 0, 0, .2);
    width: 160px;
    position: absolute;
    left: 0; top: 85px;
    border-radius: 20px;
    padding: 10px;
    display: none;
  }
  #gnb li:hover .subMenu {
    display: block;
  }
  #gnb .subMenu a {
    font-size: 16px;
    padding: 15px 10px;
    transition: .3s;
  }
  #gnb .subMenu a:hover {
    background-color: #f9f9f9;
    padding: 15px 0 15px 15px;
    border-radius: 20px;
  }
  #registry {
    margin: 0 200px 0 auto;
    display: flex;
  }
`;
// MainSwiper
export const MainSwip = styled.article`
  margin-top: 100px;
  padding: 0 80px;
  
  .headBg {
    height: 700px;
    position: relative;
  }
  .headBg .firstBg {
    height: 100%;
    background: url(path + "/images/1205-hero-2.jpg") no-repeat 50% / cover;
    border-radius: 70px;
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .headBg h2 {
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: 900;
    font-size: 50px;
    color: #222222;

    animation: moveDown 1.5s both;
  }
  .headBg p {
    font-family: "Malgun Gothic";
    font-size: 22px;
    margin: 30px 0 10px;

    animation: moveDown 1.5s .3s both;
  }
  .headBg .ghostBtn {
    font-size: 16px;
    border: 2px solid #333;
    margin: 40px 0 5px;
    width: 180px; height: 50px;
    line-height: 50px;
    text-align: center;
    transition: .2s;

    animation: moveUp 1.5s both;
  }
  .headBg .ghostBtn:hover{
    background-color: #333333;
    color: #fff;
    transition: .4s;
  }
  .slideBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px; height: 44px;
    border-radius: 50%;
    border: 1px solid #fff;
    transition: .2s;
    overflow: hidden;
  }
  .leftBtn { left: 20px;}
  .rightBtn { right: 20px;}
  .slideBtn > a {
    color: #fff;
    width: 44px; height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 25px;
  }
  .leftBtn > a {
    width: 42px;
  }
  .slideBtn:hover {
    border: 1px solid #f5805a;
  }
  .slideBtn:hover > a {
    background-color: #f5805a;
    transition: 1s;
  }

  .ri-arrow-down-line {
    font-size: 35px;
    color: #fff;

    position: absolute;
    bottom: 10px; left: 50%;

    animation: arrowDown 1s infinite;
  }
`;

// TabSection
export const TabBox = styled.article`
  p {
    margin-top: 5px;
    line-height: 1.2;
  }
  .tabContents {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
  }
  .tab {
    border: 1px solid #D9D9D9;
    border-radius: 30px;
    width: 356px;
    margin-bottom: 30px;
    padding: 40px;
    color: #A6A6A6;
  }
  .tabClick {
    position: relative;
  }
  .branding {
    border: none;
    background-color: #f5805a;
    color: #fff;
    box-shadow: 17px 5px 38px rgba(0, 0, 0, .2);
  }
  .branding::before {
    content: "";
    width: 40px; height: 40px;
    border-style: solid;
    border-width: 20px 0 20px 40px;
    border-color:transparent transparent transparent #f5805a;
    position: absolute;
    right: -20px;
  }
  .program p, .publishing p {
    display: none;
  }
  .imgBox img{
    border-radius: 50px;
    width: 990px; 
  }
`;

// Service
export const ServiceBox = styled.article`
  padding: 140px 200px;
  background-color: #F8F9FA;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .mainTitle {
    grid-row: 1 / 3;
  }
  .txtBox {
    background-color: #fff;
    border-radius: 30px;
    padding: 48px;
    margin: 14px;
    transition: .4s;
  }
  .txtBox h4 {
    font-size: 28px;
    margin: 26px 0 ;
  }
  .txtBox i {
    font-size: 32px;
    color: inherit;
  }
  .txtBox:hover {
    box-shadow: 10px 12px 38px rgba(0, 0, 0, .2);
    transition: .4s;
  }
  .txtBox:last-child {
    background-color: #22262A;
    color: white;
  }
`;

// PopupBox
export const PopupBox = styled.article`
  padding: 140px;
  .mainTitle {
    padding-left: 60px;
  }
  .popupContainer {
    display: flex;
    text-align: center;
    margin-top: 50px;
  }
  .popupContainer img {
    border-radius: 50px;
    margin-bottom: 10px;
    width: 100%;
  }
  .popupContainer .popupPlay{
    position: relative;
  }
  .popupContainer .iconBox {
    font-size: 24px;
    background-color: #fff;
    width: 72px; height: 72px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: .3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .popupContainer .iconBox:hover {
    box-shadow: 1px 12px 38px rgba(0, 0, 0, .2);
    transform: scale(1.1) translate(-50%, -50%);
    transition: .3s;
  }
  .popupContainer p {
    font-size: 18px;
    width: 300px;
    margin: 0 auto;
    padding-bottom: 80px;
  }
  .swiper-pagination-bullet {
    width: 50px;
    height: 10px;
    border-radius: 10px;
    background-color: #f5805a;
  }
  .swiper-pagination-bullet:hover{
    background-color: #dfdfdf;
  }
`;

// youtube
export const VideoBg = styled.article`
  padding: 0 200px;
  background-image: linear-gradient(#fff, #fff 60%,#F8F9FA 60%, #F8F9FA 100%);
  .videoPlay {
    width: 100%;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    box-shadow: 1px 12px 30px rgba(0, 0, 0, .2);
    position: relative;
    overflow: hidden;
  }
  video {
    width: 100%;
    height: 720px;
    object-fit: cover;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .ytContents {
    position: absolute;
    /* transform: translate(-50%, -50%); */
    text-align: center;
    animation: moveUp 1s both;
  }
  .ytContents h3 {
    color: #fff;
  }
  .ytContents .ytBtn {
    color: #fff;
    border: 2px solid #fff;
    width: 190px; height: 56px;
    line-height: 56px;
    margin: 48px auto 0;
  }
  .ytContents .ytBtn:hover {
    background-color: #fff;
    color: #333333;
  }
`;

// MockUp
export const Mock = styled.article`
  background-color: #F8F9FA;
  display: flex;
  justify-content: space-between;

  .mockupLine {
  width: 700px;
  }
  .mockupLine .mainTitle h3 {
    margin-bottom: 48px;
  }
  .checkTxt {
    display: flex;
    font-size: 20px;
    margin-bottom: 34px;
    width: 600px;
  }
  .checkTxt i {
    font-size: 36px;
    margin-right: 16px;
  }
  .mockupLine img {
    width: 100%;
  }
  button {
    border: none;
    width: 50px; height: 50px;
    background-color: #EBECED;
    color: #2f2f2f;
    transition: .3s;
    margin-top: 150px;
  }
  button i {
    font-size: 32px;
    line-height: 50px;
  }
  button:hover {
    background-color: #959596;
    color: #f6f6f6;
    transition: .3s;
  }
`;

// Board
export const BoardBox = styled.article`
  display: flex;
  justify-content: space-between;
  
  .boardTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .boardTitle h3 {
    font-size: 36px;
    margin: 0;
  }
  a:hover {
    color: #f5805a;
  }
  .boardTitle a {
    width: 40px;
    font-size: 40px;
    color: #f5805a;
    text-align: center;
  }
  .boardTitle a:hover {
    color: #222222;
  }
  .boardL {
    width: 40%;
  }
  .notice {
    width: 100%;
  }
  .notice tr{
    border-bottom: 1px solid #DEE2E6;
  }
  table td {
    padding: 15px;
  }
  .notice a {
    font-size: 20px;
  }
  .boardR {
    width: 50%;
  }
  .gallery img {
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  .gallery a {
    font-size: 16px;
    text-align: center;
  }
`;


// MapSection
export const Map = styled.article`
  background-image: linear-gradient(#fff, #fff 45%,#F8F9FA 45%, #F8F9FA 100%);
  border-top: 1px solid #EEEEEE;
  padding: 150px 144px;
 .mainTitle {
    margin-bottom: 60px;
    padding-left: 56px;
  }
  #kakaoMap {
    height: 468px;
    border-radius: 70px;
    box-shadow: 1px 12px 30px rgba(0, 0, 0, .2);
    filter: grayscale(150%);
  }
  .mapInfo {
    padding: 100px 56px 0;
    display: flex;
    justify-content: space-between;
  }
  .mapInfo h4 {
    margin-bottom: 10px;
  }
`;

// ContactUs
export const Contact = styled.article`
  display: flex;
  .contactL {
  width: 35%;
}
.contactR {
  width: 65%;
}
.contactR p {
  font-weight: 700;
  padding-bottom: 10px;
}
.contactR input, textarea {
  font-family: 'NanumSquareRound', 'AppleGothic', 돋움, sans-serif;
  border: none;
  background-color: #F7F7F7;
  margin-bottom: 20px;
  width: 100%;
  height: 46px;
  padding: 10px 10px;
  font-size: 18px;
}
.contactR :is(input, textarea):focus {
  outline: 1px solid #000;
}
.contactR #inquiry {
  height: 300px;
}
.contactR button {
  font-family: 'NanumSquareRound';
  width: 100%; height: 55px;
  border: none;
  background-color: #333333;
  color: #fff;
  font-size: 16px;
  transition: .2s;
  line-height: 55px;
}
.contactR button a {
  width: 100%; height: 100%;
}
.contactR button:hover {
  transition: .2s;
  background-color: #f5805a;
  text-shadow: 1px 1px 0 orangered;
  cursor: pointer;
}
`;

// footer
export const Foot = styled.footer`
    background-color: #282828;
    color: #A6A6A6;
    height: 130px;
    font-size: 14px;
    padding: 40px 200px;
    line-height: 2;
    display: flex;
    justify-content: space-between;
  .footerL p a {
    display: inline;
    padding-bottom: 3px;
  }
  .footerL p a:hover {
    color: #fff;
    border-bottom: 1px solid #A6A6A6;
  }
`;

// top
export const Top = styled.a`
  #top {
    width: 40px; height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 2px;
    transition: .3s;

    position: fixed;
    right: 30px; bottom: 20px;
  }
  #top:hover {
    background-color: #f5805a;
    transition: .3s;
  }
`;