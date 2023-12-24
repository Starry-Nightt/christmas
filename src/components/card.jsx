import React, { useState } from "react";

function Card() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="christmas-card">
        <input id="open" type="checkbox" checked={isOpen} />
        <label
          className="open"
          htmlFor="open"
          onClick={() => setOpen(!isOpen)}
        ></label>
        <div className="card-front">
          <div className="christmas-tree"></div>
          <div className="ribbon"></div>
          <div className="text">- Click to Open -</div>
          <div className="star"></div>
          <div className="balls"></div>
        </div>

        <div className="card-inside">
          <div className="title">
            Merry <br /> Christmas!
          </div>
          <div className="wishes">
            Merry Christmas. {"<3"}. Mãi bên nhau nhớ bé My của anh ^^ !{" "}
            <br></br> LOVE YOU
          </div>
          {isOpen && (
            <div className="images">
              <div className="image-container">
                <div className="my-image"></div>
              </div>
              <div className="heart"></div>
              <div className="image-container">
                <div className="my-image-2"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
