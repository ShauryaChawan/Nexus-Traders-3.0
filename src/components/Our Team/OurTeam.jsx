import "./ot.scss";
import Image from "next/image";

const sujoy_hitesh_2 = "/images/sujoy_hitesh_2.jpg";

const OurTeam = () => {
  return (
    <div className="ourTeam_container">
      <div className="text">
        <h2>
          Mst. Hitesh Gadling <br /> & <br /> Mst. Sujoy Bhattacharya
        </h2>
        <h3>Founders of Nexus Traders.</h3>
        <p>
          Hello! We are Mst. Hitesh Gadling & Mst. Sujoy Bhattacharya, the
          Founder & Co-Founders of <b>&apos;NexusTraders&apos;</b>. Over the
          past 4 years, we have immersed ourself in the world of professional
          stock trading, where our passion for financial knowledge and wealth
          creation in the markets truly ignites. We firmly believe that everyone
          should have access to financial education, and it is this belief that
          drives us to share our expertise and insights with you. Join us on
          this exciting journey towards financial freedom and let&apos;s unlock
          the potential of the markets together!
        </p>
      </div>
      <div className="image">
        <Image src={sujoy_hitesh_2} width={500} height={500} alt="" />
      </div>
    </div>
  );
};

export default OurTeam;
