import React from 'react';
import { Link } from "react-router-dom";
import { Navi } from './PageStyle';

function Nav() {
  return (
    <Navi>
      <h1><Link><img src="/images/logo-dyami.png" alt="로고" /></Link></h1>
      <ul id="gnb">
        <li>
          <Link to="/">about</Link>
          <ul className="subMenu">
            <li><Link to="/">clean</Link></li>
            <li><Link to="/">sample</Link></li>
            <li><Link to="/">wide</Link></li>
            <li><Link to="/">history</Link></li>
            <li><Link to="/">store map</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/">service</Link>
          <ul className="subMenu">
            <li><Link to="/">clean</Link></li>
            <li><Link to="/">simple</Link></li>
            <li><Link to="/">wide</Link></li>
            <li><Link to="/">grid</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/">portfolio</Link>
          <ul className="subMenu">
            <li><Link to="/">photo</Link></li>
            <li><Link to="/">albums</Link></li>
            <li><Link to="/">video</Link></li>
            <li><Link to="/">popup</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/">board</Link>
          <ul className="subMenu">
            <li><Link to="/">news</Link></li>
            <li><Link to="/">gallery</Link></li>
            <li><Link to="/">webzine</Link></li>
            <li><Link to="/">schedule</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/">contact</Link>
          <ul className="subMenu">
            <li><Link to="/">clean</Link></li>
            <li><Link to="/">simple</Link></li>
            <li><Link to="/">wide</Link></li>
            <li><Link to="/">faq</Link></li>
            <li><Link to="/">1:1 qna</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/">element</Link>
          <ul className="subMenu">
            <li><Link to="/">grid</Link></li>
            <li><Link to="/">section</Link></li>
            <li><Link to="/">typography</Link></li>
            <li><Link to="/">buttons</Link></li>
            <li><Link to="/">icon box</Link></li>
            <li><Link to="/">tabs &<br />accordions</Link></li>
            <li><Link to="/">chart &<br />progress</Link></li>
            <li><Link to="/">footer<br />style</Link></li>
            <li><Link to="/">board<br />output</Link></li>
          </ul>
        </li>
        <li><Link to="/">shop</Link></li>
      </ul>

      <ul id="registry">
        <li><Link to="/">login</Link></li>
        <li><Link to="/">join</Link></li>
      </ul>
    </Navi>
  );
}

export default Nav;