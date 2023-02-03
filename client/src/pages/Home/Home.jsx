/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
// import Navbar from "../../Components/navbar.jsx";
import HeaderComponent from "../../Components/header";

import { Link } from "react-router-dom";
import SearchBar from "../../Components/searchBar/searchBar";
import { Button } from "antd";
import TrendingShopsContainer from "../../Components/trendingshops/trendingshopsContainer";
import style from "./home.module.css";
import FooterComponent from "../../Components/footer/footer";
// import image from "../../assets/images/tea.jpg";
import ImageCarousel from "../../Components/carousel/carousel";

export default function Home() {
  useEffect(() => {
    document.title = "CommuniTEA - Home";
  }, []);

  const headerText = {
    header: {
      text: "Unsure of where to go for delicious boba drinks? Find the best boba spots near you curated by our friendly community!",
    },
    api: {
      text: `"With millions of business updates every month, Yelp Fusion
      delivers the most current and most accurate local data
      available. Choose from dozens of attributes per business, and as
      millions of new reviews and photos are added by active Yelp
      users, the Yelp data set remains unparalleled in its rich
      detail, freshness, and accuracy."`,
    },
  };

  return (
    <>
      <div className={style.navContainer}>
        <HeaderComponent />
        {/* <Navbar navItem={"home"} /> */}
        {/* <DrawerComp /> */}
      </div>
      <div className={style.homeContainer}>
        <div className={style.wrapper}>
          <h1 className="">CommuniTEA</h1>
          <span className={style.headerTextWrapper}>
            <p className={style.headerText}>{headerText.header.text}</p>
          </span>
          <article className={style.ctaWrapper}>
            <ImageCarousel />
            <article className={style.apiContainer}>
              <p className={style.apiInfo}>
                {" "}
                {headerText.api.text}
                <a
                  href="https://fusion.yelp.com/"
                  className={style.apiLink}
                  target="_blank"
                >
                  - Yelp Fusion API{" "}
                </a>
              </p>
            </article>
          </article>
          <section className={style.bottomSection}>
            <div className={style.cta}>
              <SearchBar />
              <Link to="/login">
                <Button className={style.btn1}>LOGIN</Button>
              </Link>
              <p>or</p>
              <Link to="/signup">
                <Button className={style.btn2}>SIGNUP</Button>
              </Link>
            </div>
            <section className={style.trendingShopsContainer}>
              <TrendingShopsContainer />
            </section>
          </section>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
