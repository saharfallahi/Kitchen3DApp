import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Button from "./Button";
import { useState } from "react";

const buttons = [
  { id: 1, label: "Floor", imgUrl: "/public/Vector 16.png" },
  { id: 2, label: "Splashback", imgUrl: "/public/Vector 18 (1).png" },
  { id: 3, label: "Door", imgUrl:  "/public/Vector 15 (1).png" },
];

function ButtonSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const buttonWidth = 80;

  const handleNextSlide = () => {
    if (currentIndex < buttons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    
};


  return (
    <div className="flex items-center space-x-0">
        {/* left Arrow */}
      <button
        onClick={handlePrevSlide}
        className="p-1 border rounded-full bg-white disabled:opacity-50"
        disabled={currentIndex === 0}
      >
        <BsChevronCompactLeft />
      </button>

      <div className="overflow-hidden w-64">
        <div
          className="flex gap-x-2 transition-transform duration-300 py-2"
          style={{
            transform: `translateX(-${currentIndex * buttonWidth}px)`,
          }}
        >
          {buttons.map((button) => (
            <Button
              onClick={() => handleButtonClick(button)}
              key={button.id}
              label={button.label}
              imgUrl={button.imgUrl}
            />
          ))}
        </div>
      </div>

      {/* right Arrow */}
      <button
        onClick={handleNextSlide}
        className="p-1 border rounded-full bg-white disabled:opacity-50"
        disabled={currentIndex === buttons.length - 1}
      >
        <BsChevronCompactRight />
      </button>
    </div>
  );
}

export default ButtonSlider;
