import React from "react";
import Image from "next/image";

export default function Nav(auth) {
  const dispatch = "()";

  return (
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <div className="w-fit ">
              <Image className="w-[200px] pt-6 pb-8 " src={""} />
            </div>
          </figure>
          <ul className="nav__list--wrapper">
            <li
              className="nav__list nav__list--login"
              onClick={""}
            >
              {auth ? "Logout" : "Login"}
            </li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
  );
}
