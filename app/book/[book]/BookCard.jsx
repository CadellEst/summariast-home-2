"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function () {
  const id = useParams();
  const [bookInfo, setBookInfo] = useState();

  async function getBookInfo() {
    const  data = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    setBookInfo(data);
  }
  useEffect(() => {
    getBookInfo();
  }, []);
  console.log(bookInfo);
  return (
    <>
      <div className="row">
        <audio src=""></audio>
        <div className="container">
          <div className="flex sm:flex-col gap-4">
            <div className="w-full">
              <div className="text-[#032b41] mb-4 font-semibold text-[32px]">
                {id.title}
              </div>
              <div className="text-[#032b41] mb-4 font-semibold">AUTHOR</div>
              <div className="text-[20px] text-[#032b41] mb-4 font-normal">
                SUB-TITLE
              </div>
              <div className="border-t-[#e1e7ea] border-b-[#e1e7ea] px-4 mb-6">
                <div className="flex flex-wrap max-w-[400px] gap-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
