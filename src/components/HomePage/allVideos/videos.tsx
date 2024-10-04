"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Btn from "./detailsBtn/btn";

const Videos = (props: any) => {
  const searchData = props?.params?.q || "";
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const [videos, setVideos] = useState([]);

  const onVideos = async () => {
    try {
      const response = await axios.get(
        "https://openapi.programming-hero.com/api/phero-tube/videos?title"
      );
      setVideos(response?.data?.videos);
      const responseCategory = await axios.get(
        "https://openapi.programming-hero.com/api/phero-tube/categories"
      );
      setCategory(responseCategory?.data?.categories);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const filterData = videos?.filter(
    (item: any) =>
      item.title.toLowerCase().includes(searchData.toLowerCase()) &&
      item.category_id.toLowerCase().includes(categoryId)
  );

  useEffect(() => {
    onVideos();
  }, []);
  return (
    <div>
      <div className=" flex items-center justify-center gap-5 py-5">
        {category?.map((item: any, index: any) => (
          <button
            key={index}
            onClick={() => setCategoryId(item.category_id)}
            className=" w-28 h-12 max-sm:w-20 btn btn-ghost rounded-lg bg-slate-200 font-semibold"
          >
            {item?.category}
          </button>
        ))}
      </div>
      {/* ----------------------- */}
      <div className=" flex justify-center items-center">
        {filterData.length !== 0 ? (
          <div className=" grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
            {filterData?.map((item: any, index: any) => (
              <div
                key={index}
                className=" border shadow-lg rounded-2xl overflow-hidden "
              >
                <div className=" h-72">
                  <Image
                    src={item?.thumbnail}
                    alt="image"
                    width={500}
                    height={500}
                    className=" h-full w-full object-cover"
                  />
                </div>

                <div className=" flex gap-5 p-2 pb-10">
                  <div className=" h-14 w-14  ">
                    <Image
                      src={item?.authors[0]?.profile_picture}
                      alt="user"
                      width={500}
                      height={500}
                      className=" rounded-full w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                  <div className="max-sm:w-full">
                    <h1>{item?.title}</h1>
                    <h1 className=" opacity-60">
                      {item?.authors[0]?.profile_name}
                    </h1>
                    <Btn item={item} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="  w-full flex justify-center h-[70vh]">
            <div className=" mt-10 flex flex-col items-center">
              <div className="w-32 max-sm:w-24">
                <Image
                  src={"/assets/icon.png"}
                  alt="noVideo"
                  width={500}
                  height={500}
                />
              </div>
              <h1 className=" text-xl mt-5 font-semibold max-sm:text-base">
                No Content Here in this Categery
              </h1>
            </div>
          </div>
        )}
      </div>
      {/* --------------------------------------- */}
    </div>
  );
};

export default Videos;
