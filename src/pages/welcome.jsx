import React, { useRef, useState } from "react";

const defaultTitle = "Nhập mật khẩu đi nè!";

const errorTitle = "Sai rùi! Nhập lại mật khẩu đi nhớ";
const successTitle = "Chuẩn rùi đấy ^^";

function WelcomePage({ onSubmitPassword }) {
  const inputRef = useRef();
  const [title, setTitle] = useState(defaultTitle);

  const onSubmit = () => {
    if (onSubmitPassword(inputRef.current.value)) {
      setTitle(successTitle);
    } else {
      setTitle(errorTitle);
    }
  };

  return (
    <div className="welcome">
      <div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
      </div>
      <div className="input">
        <h2>{title}</h2>
        <input
          ref={inputRef}
          className="input-text"
          type="password"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
        />
        <button className="button" onClick={onSubmit} >
          Next
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
