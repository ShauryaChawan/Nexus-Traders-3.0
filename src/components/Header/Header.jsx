import React from "react";
import "./header.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header_container">
      <div className="text">
        <h1>Nexus Traders</h1>
        <h2>Turning Wealth Into Empire</h2>
        {/*<p>
          We at Nexus Traders provide you with all the elements required to
          become an ELITE Trader and Investor in the Stock Market in the most
          simple way and methods, personally back-tested by us.
        </p>*/}
        <p>
          At Nexus Traders, we offer a comprehensive trading education and
          mentorship program that will teach you everything you need to know to
          become an elite trader and investor in the stock market. Our program
          is based on proven methods and strategies that have been personally
          back-tested by our team of experts.
        </p>
        <button>Enroll Now</button>
      </div>
      <div className="logo">
        <Image src="/images/logo.png" width={500} height={500} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
