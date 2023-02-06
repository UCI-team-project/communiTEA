/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrendingShopsContainer from "../../Components/trendingshops/trendingshopsContainer";
import ImageCarousel from "../../Components/carousel/carousel";
import SearchBar from "../../Components/searchBar/searchBar";
import FooterComponent from "../../Components/footer/footer";
import HeaderComponent from "../../Components/header";
import { Button } from "antd";
import style from "./home.module.css";
import Auth from "../../utils/auth";

export default function Home() {
  useEffect(() => {
    document.title = "CommuniTEA - Home";
  }, []);

  return (
    <>
      <div className={style.navContainer}>
        <HeaderComponent />
      </div>
      <div className={style.homeContainer}>
        <div className={style.wrapper}>
          {/* <h1 className={style.wrapperHeader}>CommuniTEA</h1> */}
          <div className={style.headerTextWrapper}>
            <p className={style.headerText}>{headerText.header.text}</p>
          </div>
          <article className={style.ctaWrapper}>
            <ImageCarousel />
            <article className={style.apiContainer}>
              <p className={style.apiInfo}>
                {" "}
                {headerText.api.text}
                <a
                  href={headerText.href}
                  className={style.apiLink}
                  target="_blank"
                >
                  - Yelp Fusion API{" "}
                </a>
              </p>
            </article>
          </article>
          {Auth.loggedIn() ? (
            <section className={style.bottomSection}>
              <section className={style.trendingShopsContainer}>
                <TrendingShopsContainer />
              </section>
            </section>
          ) : (
            <section className={style.bottomSection}>
              <div className={style.cta}>
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
          )}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

const headerText = {
  header: {
    text: "Welcome to your new favorite website for all your Boba needs. Find the best boba in your area. Unsure of where to go for delicious boba drinks? Find the best boba spots near you curated by our friendly community!",
  },
  api: {
    text: `"With millions of business updates every month, Yelp Fusion
    delivers the most current and most accurate local data
    available. Choose from dozens of attributes per business, and as
    millions of new reviews and photos are added by active Yelp
    users, the Yelp data set remains unparalleled in its rich
    detail, freshness, and accuracy."`,
  },
  href: "https://fusion.yelp.com/",
};
