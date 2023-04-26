import React from "react";

const Model = ({
  clickedImage,
  handleRotetionRight,
  setClickedImage,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
    }
  };
  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImage} alt="not found" />
        <span>
          <i onClick={handleClick} className="fa-solid fa-xmark dismiss"></i>
        </span>
        <div onClick={handleRotetionRight} className="overlay-arrows_right">
          <div>
            <i
              className="fa-solid fa-angles-right"
              style={{
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            ></i>
          </div>
        </div>
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <i
              className="fa-solid fa-angles-left"
              style={{
                padding: "1rem",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
