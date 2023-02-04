import { Button } from 'antd/es/radio'
import { useState, useEffect } from 'react'
import FooterComponent from '../../Components/footer/footer'
import HeaderComponent from '../../Components/header'
import RecentReviewsContainer from '../../Components/recentReviews/recentReviewsContainer'
import style from './singleStore.module.css'
import { useLocation } from 'react-router-dom'

const SingleStore = () => {
  const location = useLocation()
  const path = location.pathname.split('/')
  const storeID = path[path.length - 1]

  const [storeData, setStoreData] = useState({})

  useEffect(() => {
    document.title = 'CommuniTEA - Search results'
    fetchStore()
  }, [])

  const expressAPI = process.env.REACT_APP_API_ENDPOINT
  const endpoint = `/reviews/${storeID}`
  const api = expressAPI + endpoint

  async function fetchStore() {
    await fetch(api, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((stores) => setStoreData(stores))
  }

  // console.log(storeData?.reviews.map((review) => review.text))
  return (
    <>
      <div className={style.navContainer}>
        <HeaderComponent />
      </div>
      <main className={style.main}>
        <div className={style.contentWrapper}>
          <header className={style.header}>
            <h1>boba</h1>
            <p id='rating' className={style.rating}>
              4.5
            </p>
          </header>
          <section className={style.imageContainer} id='images'>
            <div className={style.image}></div>
            <div className={style.image}></div>
            <div className={style.image}></div>
          </section>
          <section className={style.storeDescription}></section>
          <section className={style.reviewsContainer}>
            <RecentReviewsContainer reviews={storeData} />
          </section>
          <article className={style.reviewFormArticle}>
            <form action='#' className={style.reviewForm}>
              <textarea
                name='review'
                id='reviewForm'
                cols='30'
                rows='10'
                placeholder='Leave a comment...'
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
  )
}

export default SingleStore
