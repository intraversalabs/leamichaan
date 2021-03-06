import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/png/logo_black.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <img width="150" src={imgL1LogoWhite} alt="" />
        ) : (
          <img width="150" src={imgL1Logo} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
