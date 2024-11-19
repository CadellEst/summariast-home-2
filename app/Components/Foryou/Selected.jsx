import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

export default function Selected() {
  const [selectedBook, setSelectedBook] = useState([]);

  useEffect(() => {
    async function SelectedSection() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
      );
      setSelectedBook(data[0]);
    }
    SelectedSection();
  }, []);

  return (
    <div className="px-6">
      <div className="text-[22px] font-bold text-[#032b41] pb-4">
        Selected just for you
      </div>
      <div className="flex justify-between w-[calc((100%/3) * 2)] bg-[#fbefd6] rounded-md p-6 mb-6 gap-6 sm:w-full">
        <div className="w-[40%] text-[#032b41]">
          <p>How Constant Innovation Creates Radically Successful Businesses</p>
        </div>
        <div className="">
          <div className="bg-[#bac8ce] w-[1px] h-[140px]"></div>
        </div>
        <div className="flex gap-4 w-[60%]">
              <figure className="w-[172px] h-[172px] md:w-[140px] md:h-[140px] min-w-[140px]">
            <img
              src={selectedBook.imageLink}
              alt=""
              className="w-full h-full"
            />
          </figure>
          <div>
            <div className="font-semibold text-[#032b41] mb-1">{selectedBook.title}</div>
            <div className="text-[14px] text-[#394547] mb-2">{selectedBook.author}</div>
            <div className="flex items-center gap-2">
                <div className="flex items-center w-[40px] min-w-[40px] h-[40px] min-h-[40px]">
                <FaCirclePlay className="w-full h-full flex justify-center items-center bg-white rounded-full"/>
                </div>
                <div className="text-[14px] font-semibold text-[#032b41]">3 mins 23secs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
