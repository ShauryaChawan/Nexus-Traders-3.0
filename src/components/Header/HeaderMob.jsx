import React from "react";
import "./headerMob.scss";
import Image from "next/image";

const HeaderMob = () => {
  return (
    <div className="headerMob_container">
      <div className="logo">
        <Image src="/images/logo.png" width={400} height={400}  alt="logo" />
      </div>
      <div className="text">
        <h1>Nexus Traders</h1>
        <h2>Turning Wealth Into Empire</h2>
        <p>
          At Nexus Traders, we offer a comprehensive trading education and
          mentorship program that will teach you everything you need to know to
          become an elite trader and investor in the stock market. Our program
          is based on proven methods and strategies that have been personally
          back-tested by our team of experts.
        </p>
        <button>Enroll Now</button>
      </div>
    </div>
  );
};

export default HeaderMob;
