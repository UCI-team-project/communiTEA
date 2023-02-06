import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import style from "./aboutus.css";
import { Link } from "react-router-dom";

import HeaderComponent from "../../Components/header";
import FooterComponent from "../../Components/footer/footer";

export default function AboutUs() {
  useEffect(() => {
    document.title = "CommuniTEA - AboutUs";
    }, []);

    return (
        <>
      <div className={style.loginContainer}>
        <HeaderComponent />
      </div>
      <div className={style.container}>
        <>
            <p className={style.text}>
              Meet our fantastic coding team from UCI's full-stack coding bootcamp!
            </p>
            <p>
                Darius:
            </p>
            <>
                Japbir: Hi everyone! I am Jap and a little about myself is, I love to cook. I
                am currently working in the logistics industry. 
            <p>
                Johnathan: 
            </p>
            <p>
                Justin:
            </p>
            <p>
                Stephanie:
            </p> 
            </div>
        </>
      <FooterComponent />

  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
  /</div>
  </>)
}
