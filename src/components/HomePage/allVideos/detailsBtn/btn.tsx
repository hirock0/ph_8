"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
interface Props {
  item: any;
}

const Btn: React.FC<Props> = ({ item }) => {
  const [modalData, setModalData] = useState<any>(null);
  const [flag, setFlag] = useState(false);
  const OnModal = async () => {
    document.body.style.overflow = "hidden";
    setFlag(true);
    setModalData({
      ...modalData,
      description: item.description,
      image: item.thumbnail,
    });
  };

  const Cancel = () => {
    document.body.style.overflow = "auto";
    setFlag(false);
  };
  const WindowEvent = () => {
    window.addEventListener("click", () => {
      setFlag(false);
    });
  };
  useEffect(() => {
    WindowEvent();
  }, []);

  return (
    <div className="">
      <button
        onClick={(e) => {
          e.stopPropagation(), OnModal();
        }}
        className=" btn btn-ghost border bg-red-500 w-20 max-sm:w-5/6 mt-2 text-white rounded-lg h-9"
      >
        Details
      </button>
      <div
        className={`${
          !flag ? "hidden" : "block fixed z-50 left-0 w-full top-0 h-full "
        } bg-slate-800/80 flex items-center justify-center  flex-col`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={` w-96 max-sm:w-60 max-sm:text-sm bg-white shadow-lg shadow-black text-black p-5 rounded-lg`}
        >
          <div className="">
            <Image
              src={modalData?.image}
              alt="thumb"
              width={500}
              height={500}
              className=""
            />
            <p className=" mt-5">{modalData?.description}</p>
          </div>
          <div className=" flex justify-end mt-5">
            <button
              onClick={(e) => {
                e.stopPropagation(), Cancel();
              }}
              className=" bg-red-600 w-32 h-12 max-sm:h-10 rounded-lg text-white hover:bg-red-500 active:bg-red-400"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Btn;
