"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

export default function Suggested() {
  const [suggBooks, setSuggBooks] = useState();

  useEffect(() => {
    async function ReccomendedSection() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
      );

      setSuggBooks(data);
      console.log(data);
    }
    ReccomendedSection();
  }, []);


  return (
    <>
      <div className="px-6">
        <h2 className="font-bold text-[22px] text-[#032b41] mb-8">
          Recommended for you
        </h2>
        <p className="font-normal text-[#394547] mb-8">
          We think you'll like these
        </p>
        <div className="flex overflow-x-auto snap-x gap[16px] mb-8">
          {suggBooks?.map((suggBooks) => (
              <a
                href= {`/book/${suggBooks.id}`}
                key={suggBooks.id}
                className="relative snap-start pt-8 pb-3 pl-3 pr-3 rounded-[4px] max-w-[200px] w-full"
              >
                <audio src=""></audio>
                <figure className="w-[172px] h-[172px] mb-2">
                  <img src={suggBooks.imageLink} alt="" className="w-full h-full"/>
                </figure>
                <div className="font-bold text-[16px] text-[#032b41] mb-2">{suggBooks.title}</div>
                <div className="text-[14px] text-[#6b757b] mb-2">{suggBooks.author}</div>
                <div className="text-[14px] text-[#394547] mb-2">{suggBooks.subTitle}</div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 text-[14px] text-[#6b757b]">
                    <div className="flex w-4 h-4"><CiClock2 /></div>
                    <div>03:24</div>
                  </div>
                  <div className="flex items-center gap-1 text-[14px] text-[#6b757b]">
                    <div className="flex w-4 h-4">
                      <CiStar />
                    </div>
                    <div>{suggBooks.averageRating}</div>
                  </div>
                </div>
              </a>
          ))}
        </div>
      </div>
    </>
  );
}
