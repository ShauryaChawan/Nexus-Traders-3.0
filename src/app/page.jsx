"use client";

import styles from "./page.module.css";
import React, { useState, useEffect } from "react";

import Header from "@/components/Header/Header";
import Loading from "@/components/Loading/Loading";
import Testimonials from "@/components/Testimonials/Testimonials";
import Stats from "@/components/Stats/Stats";
import Courses from "@/components/Courses/Courses";
import Vision from "@/components/Vision/Vision";
import OurTeam from "@/components/Our Team/OurTeam";
import HeaderMob from "@/components/Header/HeaderMob";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout
    }, 2000); // Adjust the timeout as needed
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(loadingTimeout); // Clear the timeout on component unmount
    };
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <section style={{ height: "100vh" }}>
            {isMobile ? <HeaderMob /> : <Header />}
          </section>
          <section style={{ height: "100vh" }}>
            <Testimonials />
          </section>
          <section style={{ height: "100vh" }}>
            <Stats />
          </section>
          <section>
            <Courses />
          </section>
          <section>
            <Vision />
          </section>
          <section>
            <OurTeam />
          </section>
        </>
      )}
    </main>
  );
}
