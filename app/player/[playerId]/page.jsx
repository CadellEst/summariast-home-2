"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  RiForward10Fill,
  RiPlayCircleFill,
  RiReplay10Fill,
  RiStopCircleFill,
} from "react-icons/ri";

export default function page() {
  const { playerId } = useParams();
  const [bookInfo, setBookInfo] = useState();
  const [playing, setPlaying] = useState(false);
  console.log(bookInfo);

  useEffect(() => {
    async function getBookInfo() {
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${playerId}`
      );
      setBookInfo(data);
    }
    getBookInfo();
  }, []);

  window.onload = () => {
    const myAudio = document.getElementById("my-audio");
    const myControl = document.getElementById("my-control");

    function switchState() {
      if (myAudio.paused) {
        myAudio.play();
        myControl.textContent = "pause";
        setPlaying(true);
      } else {
        myAudio.pause();
        myControl.textContent = "play";
        setPlaying(false);
      }
    }

    function checkKey(e) {
      if (e.code === "Space") {
        switchState();
      }
    }

    myControl.addEventListener(
      "click",
      () => {
        switchState();
      },
      false
    );

    window.addEventListener("keyup", checkKey, false);
  };

  return (
    <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)">
      <div className="row">
        <div className="container flex justify-center">
          <div className="w-[90%]">
            <div>
              <h1 className="font-bold">
                {bookInfo != undefined ? bookInfo.title : null}
              </h1>
            </div>
            <div className="h-[1px] w-full bg-slate-200 my-4"></div>
            <div className="whitespace-pre-line mb-4">
              {bookInfo != undefined ? bookInfo.summary : null}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[75px] bg-gray-900 sticky bottom-0 text-white flex items-center justify-between px-8">
        <div className="flex">
          <div className="mr-4">
            {bookInfo != undefined ? (
              <Image width={50} height={500} src={bookInfo.imageLink} />
            ) : null}
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-sm">
              {bookInfo != undefined ? bookInfo.title : null}
            </div>
            <div className="text-sm">
              {bookInfo != undefined ? bookInfo.author : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {bookInfo != undefined ? (
            <audio
              id="my-audio"
              preload="metadata"
              src={bookInfo.audioLink}
              controls
            ></audio>
          ) : null}
          <button id="">
            <RiReplay10Fill className="w-6 h-6" />
          </button>
          <button id="my-controls">
            {playing === true ? (
              <RiStopCircleFill className="w-8 h-8 mx-4" />
            ) : (
              <RiPlayCircleFill className="w-8 h-8 mx-4" />
            )}
          </button>
          <button>
            <RiForward10Fill className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center">
          <div className="h-1 w-[200px] bg-white z-10 flex items-center">
            <div className="h-3 w-3 rounded-lg bg-white z-20 hover:h-4 hover:w-4 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
}