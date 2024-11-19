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
          <div className="flex sm:flex-col gap-4">
            <div className="">
              <div className="text-[#032b41] mb-4 font-semibold text-[32px]">
                {bookInfo != undefined ? bookInfo.title : null}
              </div>
              <div className="text-[#032b41] mb-4 font-semibold">
                {bookInfo != undefined ? bookInfo.author : null}
              </div>
              <div className="text-[20px] text-[#032b41] mb-4 font-normal">
                {bookInfo != undefined ? bookInfo.subTitle : null}
              </div>
              <div className="border-t-[#e1e7ea] border-b-[#e1e7ea] px-4 mb-6">
                <div className="flex flex-wrap max-w-[400px] gap-x-4"></div>
              </div>
              <div className=""></div>
              <div>
                <div>
                  {bookInfo != undefined ? bookInfo.averageRating : null}(
                  {bookInfo != undefined ? bookInfo.totalRating : null})
                </div>
                <div>{bookInfo != undefined ? bookInfo.type : null}</div>
                <div>{bookInfo != undefined ? bookInfo.keyIdeas : null}</div>
              </div>
              <div className=""></div>
              <div>
                <div className="">
                  <button>press</button>
                  <button>press</button>
                </div>
                <a href="">Add title to My Library</a>
                <h4>What's it about?</h4>
                <div className="flex">
                  {bookInfo != undefined
                    ? bookInfo.tags.map((info) => (
                        <div className="bg-slate-300 p-2 mr-2">{info}</div>
                      ))
                    : null}
                </div>
                <div>
                {bookInfo != undefined ? bookInfo.bookDescription : null}
                <h4 className="font-bold">About the author</h4>
                {bookInfo != undefined ? bookInfo.authorDescription : null}
                </div>
              </div>
            </div>
            <div>
              <Image src={bookInfo.imageLink}/>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
