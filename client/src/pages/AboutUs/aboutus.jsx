import { useEffect } from "react";
import style from "./aboutus.css";

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
      <div className={style.container}>
        <p className={style.text}>
          Meet our fantastic coding team from UCI's full-stack coding bootcamp!
        </p>
        <p>Stephanie:</p>
        <p>
          Johnathan: Hello there! I'm Johnathan and my role during this project
          mainly consisted of front-end design and user interface. I am training
          to become a full-stack developer.
        </p>
        <p>
          Darius: Hey, I'm Darius and this project I mainly focused on the
          front-end for this project. I'm looking to become a front-end dev in
          the future!
        </p>
        <div>
          Japbir: Hi everyone! I am Jap and a little about myself is, I love to
          cook. I am currently working in the logistics industry.
          <p>Justin:</p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
