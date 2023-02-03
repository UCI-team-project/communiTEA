import { Button } from "antd/es/radio";
import { useState, useEffect } from "react";
import FooterComponent from "../../Components/footer/footer";
// import NavBar from '../../Components/navbar'
import DrawerComp from "../../Components/drawer";
import RecentReviewsContainer from "../../Components/recentReviews/recentReviewsContainer";
import style from "./singleStore.module.css";

const SingleStore = () => {
  return (
    <>
      <div className={style.navContainer}>
        <DrawerComp />
      </div>
      <main className={style.main}>
        <div className={style.contentWrapper}>
          <header className={style.header}>
            <h1>Boba House</h1>
            <p id="rating" className={style.rating}>
              4.5
            </p>
          </header>
          <section className={style.imageContainer} id="images">
            <div className={style.image}></div>
            <div className={style.image}></div>
            <div className={style.image}></div>
          </section>
          <section className={style.storeDescription}></section>
          <section className={style.reviewsContainer}>
            <RecentReviewsContainer />
          </section>
          <article className={style.reviewFormArticle}>
            <form action="#" className={style.reviewForm}>
              <textarea
                name="review"
                id="reviewForm"
                cols="30"
                rows="10"
                placeholder="Leave a comment..."
              ></textarea>
              <div className={style.reviewBtnContainer}>
                <button className={style.reviewBtn}>Post</button>
              </div>
            </form>
          </article>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default SingleStore;
