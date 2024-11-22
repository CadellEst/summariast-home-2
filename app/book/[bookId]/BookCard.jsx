"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function () {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState();
  console.log(bookId);

  useEffect(() => {
    async function getBookInfo() {
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`
      );
      setBookInfo(data);
    }
    getBookInfo();
  }, []);
  console.log(bookInfo);
  return (
    <>
      <div className="row">
        <audio src=""></audio>
        <div className="container">
          <div className="flex flex-row justify-between">
            <div className="w-[70%]">
              <div className="text-[#032b41] mb-4 font-semibold text-[32px]">
                {bookInfo != undefined ? bookInfo.title : null}
              </div>
              <div className="text-[#032b41] mb-4 font-semibold">
                {bookInfo != undefined ? bookInfo.author : null}
              </div>
              <div className="text-[20px] text-[#032b41] font-normal">
                {bookInfo != undefined ? bookInfo.subTitle : null}
              </div>

              <div className="h-[1px] w-full bg-slate-200 my-4"></div>
              <div className="">
                <div className="flex flex-row justify-between w-[40%]">
                  <div className="">
                    {bookInfo != undefined ? bookInfo.averageRating : null}(
                    {bookInfo != undefined ? bookInfo.totalRating : null})
                  </div>
                  <div>{bookInfo != undefined ? bookInfo.type : null}</div>
                </div>
                <div className="flex flex-row justify-between w-[40%] pt-4">
                  <div>4:00</div>
                  <div>{bookInfo != undefined ? bookInfo.keyIdeas : null} key ideas</div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-slate-200 my-4"></div>
              <div>
                <div className="mb-4">
                  <button className="py-2 px-8 bg-blue-950 text-white mr-2 rounded-sm">Read</button>
                 <a href={`/player/${bookId}`}>
                    <button className="py-2 px-8 bg-blue-950 text-white ml-2 rounded-sm">Listen</button>
                 </a>
               
                </div>
                <a href="" className="text-blue-500 font-bold">Add title to My Library</a>
                <h4 className="font-bold mb-4 mt-8 ">What's it about?</h4>
                <div className="flex mb-4">
                  {bookInfo != undefined
                    ? bookInfo.tags.map((info) => (
                        <div className="bg-slate-300 p-2 mr-2 rounded-sm">{info}</div>
                      ))
                    : null}
                </div>
                <div className="">
                  {bookInfo != undefined ? bookInfo.bookDescription : null}
                  <h4 className="font-bold py-4">About the author</h4>
                  {bookInfo != undefined ? bookInfo.authorDescription : null}
                </div>
              </div>
            </div>
            <div className="w-[200px]">
              {bookInfo != undefined ? (
                <Image width={500} height={500} src={bookInfo.imageLink} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
