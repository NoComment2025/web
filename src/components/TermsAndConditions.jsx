import grayCheck from "../assets/grayCheck.png";
import blueCheck from "../assets/blueCheck.png";
import { useState } from "react";
import "../styles/TermsAndConditions.css";

function TermsAndConditions({ title, content, checked, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const opening = () => {
    setIsOpen((v) => !v);
  };

  return (
    <>
      <div className="container">
        <div className="termsTitle" onClick={onToggle}>
          <div>
            <img
              src={checked ? blueCheck : grayCheck}
              alt="checked"
              className="checkImg"
            />
          </div>
          <div>{title}</div>
        </div>

        <div className="detail">
          <button className="termsCheck" onClick={opening}>
            보기
          </button>
          {isOpen && (
            <div className="overlay" onClick={opening}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p className="contentArea">{content}</p>
                <button className="closeButton" onClick={opening}>
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
