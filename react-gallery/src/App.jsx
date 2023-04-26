import React, { useState } from "react";
import data from "./Data/images.json";
import Model from "./Components/model";

function App() {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const handleRotetionRight = () => {
    let totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImage(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="wrapper">
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images">
          <img
            src={item.link}
            alt="not found"
            onClick={() => handleClick(item, index)}
          />
        </div>
      ))}
      {clickedImage && (
        <Model
          clickedImage={clickedImage}
          handleRotetionRight={handleRotetionRight}
          setClickedImage={setClickedImage}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
}

export default App;
