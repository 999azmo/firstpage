import 'remixicon/fonts/remixicon.css';
import { Mock } from './PageStyle';

function MockUp() {
  return (
    <Mock>
      <div className="mockupLine">
        <div className="mainTitle">
          <p className="miniTitle">01</p>
          <h3>행복한 세상을 <br />위해 달려온 길</h3>
        </div>
        <div className="checkTxt">
          <i className="ri-check-line"></i>
          <p>Thinking at the junction of beauty and elegance to create strong, lasting and remarkable design and products.</p>
        </div>
        <div className="checkTxt">
          <i className="ri-check-line"></i>
          <p>Thinking at the junction of beauty and elegance to create strong, lasting and remarkable design and products.</p>
        </div>
        <button><i className="ri-arrow-left-s-line"></i></button>
        <button><i className="ri-arrow-right-s-line"></i></button>
      </div>
      <div className="mockupLine">
        <img src="./images/1205-mockup.png" alt="mockup" />
      </div>
    </Mock>
  );
}

export default MockUp;