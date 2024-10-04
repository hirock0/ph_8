"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchData, setSearchData] = useState("");
  const onSearch = () => {
    try {
      const SearchUrl = new URLSearchParams(window.location.search);

      if (searchData !== "") {
        SearchUrl.set("q", searchData.toString());
      } else {
        SearchUrl.delete("q");
      }
      router.replace(`${pathname}?${SearchUrl}`);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    onSearch();
  }, [searchData]);

  return (
    <nav className=" h-24 flex items-center ">
      <div className=" container mx-auto border-b h-full px-5 flex items-center justify-between gap-5 max-sm:gap-3">
        <div className="">
          <Image src={"/assets/Logo.png"} alt="log" width={100} height={100} />
        </div>
        <div className=" relative rounded-md overflow-hidden border ">
          <input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="search"
            className=" pl-2 h-12 outline-none  "
          />
          <div className=" absolute right-0 flex items-center justify-center w-8  top-0 h-full">
            <IoIosSearch size={20} />
          </div>
        </div>
        <div className="">
          <button className=" bg-slate-200 w-24 max-sm:w-16 rounded-lg h-12 btn btn-ghost">
            Sport
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
