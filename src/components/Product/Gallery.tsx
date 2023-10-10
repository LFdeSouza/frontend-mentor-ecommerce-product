import React, { useState } from "react";
import { IconNext, IconPrev } from "../Icons";

interface IProps {
  images: { thumbnail: string[]; fullImage: string[] };
  toggleViewer?: () => void;
}

const Gallery: React.FC<IProps> = ({ images, toggleViewer }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const changeImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    op: string,
  ) => {
    e.stopPropagation();
    if (op === "prev") {
      if (selectedItem === 0) return;
      setSelectedItem((prev) => --prev);
      return;
    }
    if (selectedItem === 3) return;
    setSelectedItem((prev) => ++prev);
  };
  return (
    <div className="flex sm:flex-col sm:gap-6 sm:px-10 xl:px-24">
      <div
        onClick={toggleViewer}
        className="relative h-full cursor-pointer overflow-hidden sm:rounded-3xl"
      >
        <img
          className="h-[35vh] w-[99vw] object-cover sm:h-full sm:w-full"
          src={`/${images.fullImage[selectedItem]}`}
          alt={images.fullImage[selectedItem]}
        />
        <button
          onClick={(e) => changeImage(e, "prev")}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white sm:hidden"
        >
          <IconPrev />
        </button>
        <button
          onClick={(e) => changeImage(e, "next")}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white sm:hidden"
        >
          <IconNext />
        </button>
      </div>
      <div className="hidden  items-center gap-6 py-4 sm:flex ">
        {images.thumbnail.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedItem(idx)}
            className={`cursor-pointer overflow-hidden rounded-2xl border-[3px] sm:block ${
              selectedItem === idx ? "border-mainOrange" : "border-transparent"
            }`}
          >
            <img
              className={`${
                selectedItem === idx ? "opacity-40" : "opacity-100"
              } hover:opacity-40`}
              src={`/${item}`}
              alt={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
