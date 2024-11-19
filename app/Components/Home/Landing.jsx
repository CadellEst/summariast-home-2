import React from "react";
import SignupModal from "../Modal/SignupModal";
import Image from "next/image";
import logo from "../../assets/img.png"


export default function Landing() {
  return (
    <>
      <section id="landing">
          <div className="row">
            <div className="container">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don't like to read.
                </div>
             
              </div>
              <figure className="landing__image--mask">
                <Image src={logo}/>
              </figure>
            </div>
          </div>
          </div>
      </section>
    </>
  );
}
