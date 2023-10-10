import React, { useState } from "react";
import { IconClose } from "../Icons";
import { IconNext, IconPrev } from "../Icons";

interface IProps {
  isOpen: boolean;
  toggleViewer: () => void;
  images: { thumbnail: string[]; fullImage: string[] };
}
const GalleryViewer: React.FC<IProps> = ({ images, isOpen, toggleViewer }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const changeImage = (op: string) => {
    if (op === "prev") {
      if (selectedItem === 0)
        return setSelectedItem(images.thumbnail.length - 1);
      setSelectedItem((prev) => --prev);
      return;
    }
    if (selectedItem === 3) return setSelectedItem(0);
    setSelectedItem((prev) => ++prev);
  };

  return (
    isOpen && (
      <div
        onClick={toggleViewer}
        className="absolute inset-0 z-40 flex items-start justify-center bg-overlayBlack pt-14"
      >
        <div
          className="flex w-[30vw] flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={toggleViewer} className="ml-auto py-6 pr-3">
            <IconClose className=" scale-150 fill-white hover:fill-mainOrange" />
          </button>

          <div className="relative w-full">
            <img
              className="overflow-hidden rounded-2xl"
              src={`${images.fullImage[selectedItem]}`}
              alt={images.fullImage[selectedItem]}
            />
            <button
              onClick={() => changeImage("prev")}
              className="absolute -left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white"
            >
              <IconPrev />
            </button>
            <button
              onClick={() => changeImage("next")}
              className="absolute -right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white"
            >
              <IconNext />
            </button>
          </div>
          <div>
            <div className="mx-auto mt-4 flex w-5/6 cursor-pointer items-center gap-6 py-4">
              {images.thumbnail.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedItem(idx)}
                  className={`hidden overflow-hidden rounded-2xl border-[3px]  hover:bg-white sm:block ${
                    selectedItem === idx
                      ? "border-mainOrange bg-white hover:border-mainOrange"
                      : "border-transparent hover:border-overlayBlack"
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
        </div>
      </div>
    )
  );
};

export default GalleryViewer;
