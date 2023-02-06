import { useEffect } from "react";
import style from "./aboutus.module.css";

import HeaderComponent from "../../Components/header";
import FooterComponent from "../../Components/footer/footer";

export default function AboutUs() {
  useEffect(() => {
    document.title = "CommuniTEA - About Us";
  }, []);

  return (
    <>
      <div className={style.loginContainer}>
        <HeaderComponent />
      </div>
      <div className={style.aboutContainer}>
        <div className={style.container}>
          <h3 className={style.textHeader}>
            Meet our fantastic coding team from UCI's full-stack coding
            bootcamp!
          </h3>
          <p className={style.text}>
            <strong>Stephanie: </strong><br></br>Hi! I'm Steph and I am responsible for most of the back
            end on this project, including building out the database all the queries 
            and mutations.</p>
          <p className={style.text}>
            <strong>Johnathan: </strong><br></br>Hello there! I'm Johnathan and my role during this
            project mainly consisted of front-end design and user interface. I
            am training to become a full-stack developer.
          </p>
          <p className={style.text}>
            <strong>Darius: </strong><br></br>Hey, I'm Darius and this project I mainly focused on the
            front-end for this project. I'm looking to become a front-end dev in
            the future!
          </p>
          <p className={style.text}>
            <strong>Japbir: </strong><br></br>Hi everyone! I am Jap and a little about myself is, I love
            to cook. I am currently working in the logistics industry.
          </p>
          <p className={style.text}>
            <strong>Justin: </strong><br></br>Hi, I'm Justin and I contributed some front-end work 
            on this project. 
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
